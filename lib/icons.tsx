import {
  Brain,
  Globe,
  Layers,
  Megaphone,
  Palette,
  Share2,
  Sparkles,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Palette,
  Sparkles,
  TrendingUp,
  Share2,
  Brain,
  Megaphone,
  Zap,
}

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] || Globe
}
