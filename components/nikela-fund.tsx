"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, TrendingUp, Globe, Users, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

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

interface StatCardProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  icon: React.ReactNode
  index: number
}

const StatCard = ({ value, label, prefix = "", suffix = "", icon, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-brand-red/30 group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="h-10 w-10 rounded-lg bg-brand-red/10 flex items-center justify-center">{icon}</div>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-brand-red transition-colors duration-300">
        <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
      </h3>
      <p className="text-gray-400 text-sm font-medium">{label}</p>
    </motion.div>
  )
}

export default function NikelaFundSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const features = [
    {
      text: "Open to all investors interested in the African market",
      icon: <Users className="h-4 w-4 text-brand-red" />,
    },
    {
      text: "Focus on high-growth sectors with significant impact potential",
      icon: <TrendingUp className="h-4 w-4 text-brand-red" />,
    },
    {
      text: "Comprehensive support beyond just financial investment",
      icon: <Sparkles className="h-4 w-4 text-brand-red" />,
    },
  ]

  const stats = [
    {
      value: 25,
      label: "Target Returns",
      suffix: "%",
      icon: <TrendingUp className="h-5 w-5 text-brand-red" />,
    },
    {
      value: 26,
      label: "Start-ups Funded",
      suffix: "+",
      icon: <Sparkles className="h-5 w-5 text-brand-red" />,
    },
    {
      value: 3,
      label: "African Countries",
      icon: <Globe className="h-5 w-5 text-brand-red" />,
    },
    {
      value: 2,
      label: "CSR Companies",
      icon: <Users className="h-5 w-5 text-brand-red" />,
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-950 to-black text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#E63946_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-flex items-center px-4 py-2 bg-brand-red/20 text-brand-red rounded-full text-sm font-medium mb-4">
                Investment Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Nikela Fund
                <span className="block h-1 w-16 bg-brand-red mt-4"></span>
              </h2>
              <p className="text-lg text-gray-300 mt-6 leading-relaxed">
                The Nikela Fund is our investment vehicle designed to support high-growth African businesses. Named
                after the Swahili word for "spark," Nikela embodies our commitment to ignite progress and positive
                change in the region.
              </p>
            </motion.div>

            <motion.ul variants={itemVariants} className="space-y-5">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="h-6 w-6 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-red/30 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="ml-3 text-gray-300">{feature.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <Button
                className="group bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-red/20"
                asChild
              >
                <Link href="/nikela-fund">
                  Learn About Investing
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                icon={stat.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
