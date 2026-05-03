import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "success" | "danger"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold border-[3px] border-black transition-transform active:translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-[#ff6e50] text-black hover:bg-[#ff866d]": variant === "default",
            "bg-white hover:bg-gray-100": variant === "outline",
            "border-transparent hover:border-black bg-transparent hover:bg-gray-100": variant === "ghost",
            "bg-[#f8d8a7] text-black hover:bg-[#f3cc92]": variant === "secondary",
            "bg-[#9ed8a0] text-black hover:bg-[#b0ebb2]": variant === "success",
            "bg-[#ff5555] text-black hover:bg-[#ff6b6b]": variant === "danger",
            "h-12 px-6 py-2": size === "default",
            "h-10 rounded-lg px-4 text-sm": size === "sm",
            "h-14 rounded-2xl px-8 text-lg": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
