import { ArrowRight, Sparkles } from 'lucide-react'

import { APP_URL } from '@/lib/appUrl'

function FloatingElement({
  children,
  delay = 0,
  duration = 6,
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
}) {
  return (
    <div
      className="absolute animate-float opacity-20"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large gradient orbs */}
        <FloatingElement delay={0} duration={8}>
          <div
            className="absolute -top-32 -left-32 h-64 w-64 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, oklch(65% 0.20 280 / 0.15), transparent 70%)',
            }}
          />
        </FloatingElement>

        <FloatingElement delay={2} duration={10}>
          <div
            className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, oklch(70% 0.18 200 / 0.12), transparent 70%)',
            }}
          />
        </FloatingElement>

        <FloatingElement delay={4} duration={7}>
          <div
            className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(circle, oklch(65% 0.20 280 / 0.1), transparent 70%)',
            }}
          />
        </FloatingElement>

        {/* Animated lines background */}
        <div className="absolute inset-0 opacity-30">
          <div className="cta-line-1 absolute h-[2px] bg-primary/60 rounded-full" />
          <div className="cta-line-2 absolute h-[1px] bg-primary/40 rounded-full" />
          <div className="cta-line-3 absolute h-[2px] bg-primary/50 rounded-full" />
          <div className="cta-line-4 absolute h-[1px] bg-primary/30 rounded-full" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Animated badge */}
          <div className="mb-8 inline-flex animate-pulse-glow items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20 transition-all duration-500 hover:bg-primary/15">
            <Sparkles className="h-4 w-4 animate-spin-slow" />
            Ready to transform your learning?
          </div>

          {/* Main heading with animated text */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Start creating smarter
            <span className="relative ml-2 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                recaps
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 h-1 w-full animate-expand-width rounded-full bg-gradient-to-r from-primary to-primary/60" />
            </span>
          </h2>

          {/* Subtext */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Join thousands of learners who have transformed their study habits with AI-powered
            content processing.
          </p>

          {/* Big animated button */}
          <div className="relative">
            {/* Button glow effect */}
            <div
              className="pointer-events-none absolute -inset-4 animate-pulse-glow rounded-2xl blur-xl"
              style={{
                background: 'radial-gradient(circle, oklch(65% 0.20 280 / 0.3), transparent 70%)',
              }}
            />

            {/* Main button */}
            <a
              href={APP_URL}
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-primary/90 px-8 py-6 text-lg font-semibold text-primary-foreground shadow-2xl shadow-primary/25 transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              {/* Button inner glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, oklch(65% 0.20 280 / 0.2), transparent 50%)',
                }}
              />

              <span className="relative z-10">Try it now - it&apos;s free</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-primary/30 transition-all duration-500 group-hover:border-primary/60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
