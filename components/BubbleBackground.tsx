export default function BubbleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Fade out gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-background via-background/85 to-transparent pointer-events-none z-10" />

      <div className="absolute inset-0">
        {/* Subtle gradient circles with slow motion */}
        <div
          className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-full blur-3xl opacity-50 sm:opacity-70 gradient-circle-1"
          style={{
            top: '10%',
            left: '10%',
            background:
              'radial-gradient(circle, oklch(65% 0.20 280 / 0.35) 0%, oklch(65% 0.20 280 / 0.12) 55%, transparent 100%)',
          }}
        />
        <div
          className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full blur-3xl opacity-50 sm:opacity-70 gradient-circle-2"
          style={{
            top: '55%',
            right: '10%',
            background:
              'radial-gradient(circle, oklch(70% 0.18 280 / 0.32) 0%, oklch(70% 0.18 280 / 0.10) 55%, transparent 100%)',
          }}
        />
        <div
          className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] rounded-full blur-3xl opacity-50 sm:opacity-70 gradient-circle-3"
          style={{
            bottom: '18%',
            left: '45%',
            background:
              'radial-gradient(circle, oklch(60% 0.22 280 / 0.28) 0%, oklch(60% 0.22 280 / 0.08) 55%, transparent 100%)',
          }}
        />
        <div
          className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full blur-3xl opacity-50 sm:opacity-70 gradient-circle-4"
          style={{
            top: '25%',
            right: '28%',
            background:
              'radial-gradient(circle, oklch(68% 0.19 280 / 0.30) 0%, oklch(68% 0.19 280 / 0.10) 55%, transparent 100%)',
          }}
        />
      </div>
    </div>
  )
}
