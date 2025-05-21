import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  align?: "left" | "center" | "right"
  className?: string
  subtitle?: string
  accentColor?: string
}

export function SectionHeading({
  children,
  align = "left",
  className,
  subtitle,
  accentColor = "bg-brand-red",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", align === "center" && "text-center", align === "right" && "text-right", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{children}</h2>
      <div
        className={cn("h-1 w-16 mt-4", accentColor, align === "center" && "mx-auto", align === "right" && "ml-auto")}
      />
      {subtitle && <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
