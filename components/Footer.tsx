export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row">
          <div>&copy; {year} Memory Loop.</div>
          <div>Built for learners who want retention.</div>
        </div>
      </div>
    </footer>
  )
}
