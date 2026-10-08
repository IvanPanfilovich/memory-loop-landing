import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnalyticsConsent from '@/components/AnalyticsConsent'

export const metadata: Metadata = {
  metadataBase: new URL('https://memoryloop.co'),
  title: 'Memory Loop — AI recaps with audio & flashcards',
  description:
    'Memory Loop turns YouTube videos and documents into personalized learning recaps, flashcards, and audio summaries — so you actually remember what you learn.',
  keywords: [
    'memory loop',
    'memoryloop',
    'YouTube summarizer',
    'video summarizer',
    'transcript to summary',
    'PDF summarizer',
    'Word document summarizer',
    'audio recap',
    'flashcards',
    'spaced repetition',
    'active recall',
    'study tool',
    'learning tool',
    'AI study assistant',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://memoryloop.co/',
  },
  manifest: '/site.webmanifest',
  authors: [{ name: 'Memoryloop' }],
  creator: 'Memoryloop',
  publisher: 'Memoryloop',
  applicationName: 'Memoryloop',
  category: 'Education, Productivity, Learning',
  classification: 'Educational Software, Study Tool, AI Summarizer',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', sizes: '16x16', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Memoryloop',
  },
  openGraph: {
    type: 'website',
    url: 'https://memoryloop.co/',
    title: 'Memory Loop — Turn videos and documents into recaps, audio, and flashcards',
    description:
      'Paste a YouTube link or upload a PDF/Word file, and Memory Loop turns it into a recap, audio summary, and flashcards so you remember the key ideas.',
    siteName: 'Memoryloop',
    locale: 'en_US',
    alternateLocale: ['en_US'],
    images: [
      {
        url: 'https://memoryloop.co/og-image.png', // Recommended size: 1200x630px
        width: 1200,
        height: 630,
        alt: 'Memory Loop — AI recaps with audio and flashcards from videos and documents',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memory Loop — AI recaps with audio and flashcards',
    description:
      'Turn YouTube videos and documents into learning recaps, audio summaries, and flashcards so you can review only what matters.',
    images: ['https://memoryloop.co/og-image.png'], // Recommended size: 1200x630px (can use same as OG image)
    creator: '@memoryloop',
  },
  verification: {
    // Add verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Memoryloop',
    'application-name': 'Memoryloop',
    'msapplication-TileColor': '#000000',
    // 'msapplication-config': '/browserconfig.xml', // Uncomment when browserconfig.xml is added to public/
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden w-full max-w-full">
        <Header />
        <main id="main" className="w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <AnalyticsConsent />
      </body>
    </html>
  )
}
