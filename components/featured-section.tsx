"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  align?: "left" | "center" | "right"
  className?: string
}

const SectionHeading = ({ children, align = "left", className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-6", align === "center" && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{children}</h2>
      <div
        className={cn("h-1 bg-brand-red w-16 mt-4", align === "center" && "mx-auto", align === "right" && "ml-auto")}
      />
    </div>
  )
}

interface AnimatedCounterProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
}

const AnimatedCounter = ({ end, prefix = "", suffix = "", duration = 2, decimals = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)

      const currentCount = Math.floor(progress * end)
      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    window.requestAnimationFrame(step)
  }, [end, duration, inView])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(decimals) + "K"
    }
    return num.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  }

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

interface StatBoxProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  index: number
}

const StatBox = ({ value, label, prefix = "", suffix = "", index }: StatBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      className="bg-white rounded-lg p-4 shadow-md border border-gray-100 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h4 className="text-2xl md:text-3xl font-bold text-brand-red mb-1">
          <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
        </h4>
        <p className="text-xs md:text-sm text-gray-600 font-medium">{label}</p>
      </div>
    </motion.div>
  )
}

interface ProgramCardProps {
  title: string
  description: string
  stats: Array<{ value: number; label: string; prefix?: string; suffix?: string }>
  link: string
  variant: "primary" | "secondary"
  logo?: string
  index: number
}

const ProgramCard = ({ title, description, stats, link, variant, logo, index }: ProgramCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={cn(
        "rounded-xl overflow-hidden shadow-lg border border-gray-100 group",
        variant === "primary" ? "bg-white" : "bg-white",
      )}
    >
      <div
        className={cn(
          "h-2",
          variant === "primary"
            ? "bg-gradient-to-r from-brand-red to-brand-red/70"
            : "bg-gradient-to-r from-gray-700 to-gray-500",
        )}
      ></div>
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div
              className={cn(
                "text-xs font-semibold uppercase tracking-wider mb-2 inline-block px-3 py-1 rounded-full",
                variant === "primary" ? "bg-brand-red/10 text-brand-red" : "bg-gray-700/10 text-gray-700",
              )}
            >
              Featured Program
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          {logo && (
            <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center p-2">
              <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} width={32} height={32} />
            </div>
          )}
        </div>

        <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, i) => (
            <StatBox
              key={stat.label}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
              index={i}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className={cn(
              "group border transition-all duration-300",
              variant === "primary"
                ? "border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                : "border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white",
            )}
            asChild
          >
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedPrograms() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const programs = [
    {
      title: "DeveloPPP Ventures Ghana",
      description:
        "The develoPPP project, funded by the German Federal Ministry for Economic Cooperation and Development (BMZ) and implemented by GIZ in collaboration with partners including ILM Africa Consult, supports the growth and expansion of startups across various sectors.",
      stats: [
        { value: 20, label: "Selected Participants" },
        { value: 5, label: "Startups Funded", suffix: "+" },
        { value: 8, label: "Expert Judges" },
      ],
      link: "/projects/developpp",
      variant: "primary",
    },
    {
      title: "The BOLT Accelerator",
      description:
        "The BOLT Accelerator, backed by BOLT and partners like The Nest (Nigeria) and ILM Africa Consult, empowers startups across diverse industries with €2000 seed funding, resources, and mentorship.",
      stats: [
        { value: 10, label: "Ventures Supported" },
        { value: 2, label: "Seed Funding", prefix: "€", suffix: "K" },
        { value: 20, label: "Pitches" },
        { value: 10, label: "Expert Judges" },
      ],
      link: "/projects/bolt-accelerator",
      variant: "secondary",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-brand-red/5 rounded-full -translate-x-1/2"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-red/5 rounded-full translate-x-1/2"></div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#E63946_1px,_transparent_1px),_linear-gradient(-45deg,_#E63946_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionHeading align="center">Featured Programs</SectionHeading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Our flagship programs that are making a significant impact across Africa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              stats={program.stats}
              link={program.link}
              variant={program.variant as "primary" | "secondary"}
              index={index}
            />
          ))}
        </div>

       
      </div>
    </section>
  )
}
