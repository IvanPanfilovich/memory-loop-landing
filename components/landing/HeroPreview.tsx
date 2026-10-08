import { AudioLines, FileText, Layers, Sparkles, Target } from 'lucide-react'

function PhoneCard({
  Icon,
  label,
  title,
  body,
}: {
  Icon: typeof Sparkles
  label: string
  title: string
  body: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/30 p-4 shadow-lg shadow-primary/5">
      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Icon className="h-4 w-4 text-primary/80" />
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-foreground">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</div>
    </div>
  )
}

export default function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div
        className="absolute -inset-6 rounded-[32px] opacity-50 blur-2xl"
        style={{
          background:
            'radial-gradient(60% 60% at 40% 20%, oklch(65% 0.20 280 / 0.28), transparent 60%), radial-gradient(60% 60% at 80% 60%, oklch(70% 0.18 200 / 0.14), transparent 55%)',
        }}
      />

      <div className="relative rounded-[32px] border border-border bg-card/18 p-4 shadow-2xl shadow-primary/10 backdrop-blur">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-background/20">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                'radial-gradient(900px circle at 20% 0%, oklch(65% 0.20 280 / 0.10), transparent 50%), radial-gradient(700px circle at 80% 60%, oklch(70% 0.18 200 / 0.06), transparent 55%)',
            }}
          />

          <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full border border-border bg-background/35 backdrop-blur" />

          <div className="relative px-5 pb-6 pt-12">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                <span className="grid h-7 w-7 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/10">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                Memory Loop
              </span>
              <span className="hidden sm:inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary/80" />
                Phone preview
              </span>
            </div>

            <div className="mt-6">
              <div className="text-xs font-semibold text-muted-foreground">Your next recap</div>
              <div className="mt-1 text-base font-semibold text-foreground">
                Active recall that sticks
              </div>
            </div>

            <div className="relative mt-5 h-[196px]">
              <div className="ml-phone-card ml-phone-card-1">
                <PhoneCard
                  Icon={Target}
                  label="Themes"
                  title="Pick what matters"
                  body="Select topics first so the recap stays focused on your goals."
                />
              </div>
              <div className="ml-phone-card ml-phone-card-2">
                <PhoneCard
                  Icon={Layers}
                  label="Flashcards"
                  title="Review with active recall"
                  body="Turn key ideas into cards you can actually remember."
                />
              </div>
              <div className="ml-phone-card ml-phone-card-3">
                <PhoneCard
                  Icon={AudioLines}
                  label="Audio"
                  title="Listen anywhere"
                  body="Generate an audio summary for commute‑friendly review."
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-primary/70" />
                  YouTube + PDFs + DOCX
                </span>
                <span>Typical: ~30–60s</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full border border-border bg-muted/10">
                <div className="ml-phone-progress h-full rounded-full bg-primary/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
