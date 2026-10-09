export function SectionDivider({ glow = false }: { glow?: boolean }) {
  return (
    <div className="relative h-px w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9ced7] to-transparent" />
      {glow && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6C63FF]/20 to-transparent blur-sm" />}
    </div>
  )
}
