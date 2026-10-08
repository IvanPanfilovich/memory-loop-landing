import BubbleBackground from '@/components/BubbleBackground'
import HeroPreview from '@/components/landing/HeroPreview'
import { ArrowRight } from 'lucide-react'

import { APP_URL } from '@/lib/appUrl'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BubbleBackground />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="relative z-10 grid items-center gap-10 py-12 sm:py-16 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
          <div className="text-center lg:text-left lg:col-span-6">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Remember what you learn.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Turn YouTube videos and documents into personalized recaps, flashcards, and audio —
              built for review.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Try it now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
