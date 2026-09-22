import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-brand-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-navy-900 text-white shadow-sm",
        secondary:
          "border-cool-gray-200 bg-cool-gray-100 text-navy-800",
        destructive:
          "border-transparent bg-red-600 text-white shadow-sm",
        outline:
          "border-cool-gray-300 text-navy-800 bg-white",
        emerald:
          "border-emerald-brand-200 bg-emerald-brand-50 text-emerald-brand-700 font-bold",
        emeraldSolid:
          "border-transparent bg-emerald-brand-500 text-navy-950 font-bold shadow-sm",
        navyMuted:
          "border-navy-700/30 bg-navy-800 text-cool-gray-200",
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

