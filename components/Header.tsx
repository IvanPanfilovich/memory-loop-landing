import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { APP_URL } from '@/lib/appUrl'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/60 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary sm:text-base"
          >
            <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-inset ring-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            Memory Loop
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`${APP_URL}/auth`}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background/30 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/25 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Log in
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Try it now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring md:hidden"
          >
            Try it now
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
