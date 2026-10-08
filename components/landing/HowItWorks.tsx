import { Upload, Sparkles, Target, Brain } from 'lucide-react'

const steps = [
  {
    number: 1,
    Icon: Upload,
    title: 'Add content',
    copy: 'Paste a YouTube link or upload PDFs/Docs.',
    subtext: 'Up to 10 files • 10MB each',
  },
  {
    number: 2,
    Icon: Sparkles,
    title: 'AI finds the key themes',
    copy: 'We extract the transcript/text and map the main topics.',
    subtext: "You'll see a clean theme list (with timestamps for YouTube).",
  },
  {
    number: 3,
    Icon: Target,
    title: 'Choose what you actually want to learn',
    copy: 'Pick the themes you care about. Skip the rest.',
    subtext: 'Your recap becomes personalized, not generic.',
  },
  {
    number: 4,
    Icon: Brain,
    title: 'Review smarter',
    copy: 'Get a summary, flashcards, and optional audio.',
    subtext: 'Then test your recall and spot gaps.',
  },
]

function StepCard({ step }: { step: (typeof steps)[0] }) {
  const { Icon, title, copy } = step

  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Animated gradient border effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(135deg, oklch(65% 0.20 280 / 0.15), transparent 50%, oklch(70% 0.18 200 / 0.1))',
          }}
        />

        {/* Top glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle, oklch(65% 0.20 280 / 0.3), transparent 70%)',
          }}
        />

        {/* Icon */}
        <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent shadow-lg shadow-primary/5 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/10 group-hover:scale-110">
          <Icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="relative mb-3 text-xl font-bold text-foreground">{title}</h3>

        {/* Copy */}
        <p className="relative mb-4 text-base leading-relaxed text-muted-foreground">{copy}</p>

        {/* Bottom corner accent */}
        <div
          className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
          style={{
            background: 'radial-gradient(circle, oklch(65% 0.20 280 / 0.4), transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}

function AnimatedLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-visible z-0"
      style={{ minHeight: '100%' }}
    >
      {/* Left to Right lines */}
      <div
        className="line-ltr-1 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '10%',
          left: '-200px',
          width: '280px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-ltr-2 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '25%',
          left: '-250px',
          width: '320px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-ltr-3 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '40%',
          left: '-300px',
          width: '350px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-ltr-4 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '55%',
          left: '-180px',
          width: '240px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-ltr-5 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '70%',
          left: '-220px',
          width: '290px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-ltr-6 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '85%',
          left: '-260px',
          width: '330px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />

      {/* Right to Left lines */}
      <div
        className="line-rtl-1 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '15%',
          right: '-160px',
          width: '220px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-rtl-2 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '30%',
          right: '-200px',
          width: '260px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-rtl-3 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '45%',
          right: '-240px',
          width: '300px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-rtl-4 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '60%',
          right: '-180px',
          width: '240px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-rtl-5 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '75%',
          right: '-220px',
          width: '280px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
      <div
        className="line-rtl-6 absolute h-[3px] bg-primary rounded-full"
        style={{
          top: '90%',
          right: '-280px',
          width: '340px',
          boxShadow: '0 0 10px oklch(65% 0.20 280 / 0.8)',
        }}
      />
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="relative overflow-visible py-20 sm:py-28 lg:py-36">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(1400px circle at 50% 40%, oklch(65% 0.20 280 / 0.08), transparent 50%), radial-gradient(1000px circle at 20% 80%, oklch(70% 0.18 200 / 0.06), transparent 50%), radial-gradient(800px circle at 80% 20%, oklch(65% 0.20 280 / 0.05), transparent 50%)',
        }}
      />

      {/* Animated purple lines */}
      <AnimatedLines />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
            <Sparkles className="h-4 w-4" />
            Simple & Powerful
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            From content to comprehension in four simple steps
          </p>
        </div>

        {/* Desktop & Tablet: Grid */}
        <div className="relative hidden md:block">
          <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {steps.map(step => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>

        {/* Mobile: Stack */}
        <div className="relative md:hidden">
          <div className="relative space-y-6">
            {steps.map(step => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
