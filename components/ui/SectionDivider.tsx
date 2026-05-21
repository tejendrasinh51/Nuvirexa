export function SectionDivider({ glow = false }: { glow?: boolean }) {
  return (
    <div className="relative h-px w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {glow && (
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent" />
      )}
    </div>
  )
}
