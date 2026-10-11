import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-brand-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-[#0b1120] text-white shadow-sm",
        secondary:
          "border-white/10 bg-white/5 text-slate-200",
        destructive:
          "border-transparent bg-red-600 text-white shadow-sm",
        outline:
          "border-white/20 text-white bg-white/5",
        emerald:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold",
        emeraldSolid:
          "border-transparent bg-emerald-500 text-slate-950 font-bold shadow-sm",
        navyMuted:
          "border-white/10 bg-[#0b1120] text-slate-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

