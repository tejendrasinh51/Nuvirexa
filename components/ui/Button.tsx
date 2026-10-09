import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E0E5EC] disabled:opacity-50 disabled:pointer-events-none active:translate-y-[0.5px]',
  {
    variants: {
      variant: {
        primary:
          'bg-[#6C63FF] text-white hover:-translate-y-1 shadow-[10px_10px_20px_rgba(108,99,255,0.25),-10px_-10px_20px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgba(108,99,255,0.32),-12px_-12px_20px_rgba(255,255,255,0.6)] active:shadow-[inset_6px_6px_10px_rgba(81,69,190,0.35),inset_-6px_-6px_10px_rgba(255,255,255,0.15)]',
        secondary:
          'bg-[#E0E5EC] text-[#3D4852] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] active:shadow-[inset_6px_6px_10px_rgb(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)]',
        ghost: 'text-[#3D4852] hover:bg-white/20',
        outline: 'border border-white/40 bg-transparent text-[#3D4852] shadow-[inset_3px_3px_6px_rgba(255,255,255,0.5),inset_-3px_-3px_6px_rgba(163,177,198,0.3)]',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-2xl',
        md: 'px-6 py-3 text-base rounded-2xl',
        lg: 'px-8 py-4 text-lg rounded-[22px]',
        xl: 'px-10 py-5 text-xl rounded-[26px]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
)
Button.displayName = 'Button'
