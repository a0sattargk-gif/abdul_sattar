import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:brightness-110 active:scale-[0.98]",
        destructive:
          "bg-rose-600 text-white shadow-sm hover:bg-rose-500 active:scale-[0.98]",
        outline:
          "border border-white/15 bg-white/[0.04] text-white shadow-sm backdrop-blur-md hover:border-white/30 hover:bg-white/10 active:scale-[0.98]",
        secondary:
          "border border-white/10 bg-[#0b1120] text-slate-200 hover:border-emerald-500/30 hover:bg-[#0f172a] hover:text-white active:scale-[0.98]",
        ghost:
          "text-slate-200 hover:bg-white/[0.08] hover:text-white",
        link:
          "text-emerald-400 underline-offset-4 hover:underline hover:text-emerald-300",
        emerald:
          "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:brightness-110 active:scale-[0.98]",
        emeraldOutline:
          "border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 hover:border-emerald-500 hover:bg-emerald-500/20 hover:text-emerald-300 font-semibold active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-2xl px-7 text-base tracking-wide",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

