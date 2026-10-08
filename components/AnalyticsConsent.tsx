'use client'

import { useState, useEffect, useRef } from 'react'
import ReactGA from 'react-ga4'

import { GA_MEASUREMENT_ID, SMARTLOOK_KEY, SMARTLOOK_REGION } from '@/lib/analytics'

// Extend Window interface for Smartlook
interface SmartlookFunction {
  (...args: unknown[]): void
  api?: unknown[]
  initialized?: boolean
}

declare global {
  interface Window {
    smartlook?: SmartlookFunction
  }
}

// Cookie helper functions
const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof document === 'undefined') return
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export default function AnalyticsConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const gaInitialized = useRef(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Small delay to ensure component is mounted and hydrated
    const timer = setTimeout(() => {
      try {
        // Check if user has already made a choice (from cookie)
        const consent = getCookie('analytics-consent')
        if (consent === null) {
          // No choice made yet, show popover
          setShowConsent(true)
        } else if (consent === 'true') {
          loadGoogleAnalytics()
          loadSmartlook()
        }
      } catch {
        // If cookie access fails, show popover anyway
        console.warn('Cookie access not available, showing consent popover')
        setShowConsent(true)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const loadGoogleAnalytics = () => {
    // Only run on client side
    if (typeof window === 'undefined') return

    try {
      // Check if already initialized
      if (gaInitialized.current) {
        // Already initialized, just send pageview
        ReactGA.send({
          hitType: 'pageview',
          page: window.location.pathname + window.location.search,
        })
        return
      }

      // Initialize Google Analytics with react-ga4
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        testMode: false, // Set to true for testing
      })

      // Mark as initialized
      gaInitialized.current = true

      // Send initial pageview (react-ga4 automatically sends one, but we can be explicit)
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search })
    } catch (err) {
      // Silently handle initialization errors
      console.warn('Failed to initialize Google Analytics:', err)
    }
  }

  const loadSmartlook = () => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    // Check if already loaded
    if (window.smartlook && window.smartlook.api) return

    try {
      // Initialize Smartlook wrapper (creates API queue before script loads)
      if (!window.smartlook) {
        const smartlookFn: SmartlookFunction = (...args: unknown[]) => {
          if (smartlookFn.api) {
            smartlookFn.api.push(args)
          }
        }
        smartlookFn.api = []
        window.smartlook = smartlookFn
      }

      // Only load script if not already attempting
      if (document.querySelector('script[src*="smartlook.com/recorder.js"]')) {
        return
      }

      const h = document.getElementsByTagName('head')[0]
      if (!h) return

      const c = document.createElement('script')
      c.async = true
      c.type = 'text/javascript'
      c.charset = 'utf-8'
      c.src = 'https://web-sdk.smartlook.com/recorder.js'

      // Handle script loading errors (e.g., blocked by ad blockers)
      // Note: Network errors (ERR_BLOCKED_BY_CLIENT) will still appear in console
      // This is a browser security feature and cannot be suppressed
      c.onerror = () => {
        // Script was blocked - this is expected with ad blockers
        // No action needed, Smartlook simply won't load
      }

      c.onload = () => {
        // Script loaded successfully, initialize Smartlook
        try {
          if (window.smartlook && typeof window.smartlook === 'function') {
            window.smartlook('init', SMARTLOOK_KEY, { region: SMARTLOOK_REGION })
          }
        } catch {
          // Silently handle initialization errors
        }
      }

      h.appendChild(c)

      // Fallback: try to initialize after a delay in case onload doesn't fire
      // (some ad blockers prevent onload from firing)
      setTimeout(() => {
        try {
          if (
            window.smartlook &&
            typeof window.smartlook === 'function' &&
            !window.smartlook.initialized
          ) {
            // Only try if script seems to have loaded (has more than just the wrapper)
            const script = document.querySelector('script[src*="smartlook.com/recorder.js"]')
            if (script) {
              // Check if script is loaded by checking if it's in the DOM
              const scriptElement = script as HTMLScriptElement
              if (scriptElement.src && scriptElement.src.includes('smartlook.com')) {
                window.smartlook('init', SMARTLOOK_KEY, { region: SMARTLOOK_REGION })
                window.smartlook.initialized = true
              }
            }
          }
        } catch {
          // Silently handle errors
        }
      }, 2000)
    } catch {
      // Silently handle any Smartlook loading errors
      // This is expected when ad blockers or privacy extensions block the script
    }
  }

  const handleAccept = () => {
    setCookie('analytics-consent', 'true')
    setShowConsent(false)
    loadGoogleAnalytics()
    loadSmartlook()
  }

  const handleDecline = () => {
    setCookie('analytics-consent', 'false')
    setShowConsent(false)
  }

  if (!showConsent) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 z-[100] max-w-sm md:max-w-md">
      <div className="bg-card border border-border rounded-lg shadow-xl p-3 sm:p-4 md:p-6">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3">
          Cookie & Analytics Consent
        </h3>
        <p className="hidden sm:block text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 md:mb-6 leading-relaxed">
          We use Google Analytics to understand how visitors interact with our website. This helps
          us improve your experience. You can choose to allow or decline analytics tracking.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={handleAccept}
            className="w-full sm:flex-1 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Allow Analytics
          </button>
          <button
            onClick={handleDecline}
            className="w-full sm:flex-1 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
