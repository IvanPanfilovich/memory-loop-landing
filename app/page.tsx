import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import CallToAction from '@/components/landing/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <main id="main">
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="try-now">
          <CallToAction />
        </section>
      </main>
    </div>
  )
}
