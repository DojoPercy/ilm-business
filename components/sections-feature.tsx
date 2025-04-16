"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FeatureSectionProps {
  title: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  imageSrc: string
  imageAlt: string
  imageCaption: string
  imageSubCaption: string
  variant?: "light" | "dark"
  imagePosition?: "left" | "right"
  icon?: React.ReactNode
}

export default function FeatureSection({
  title,
  description,
  features,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  imageCaption,
  imageSubCaption,
  variant = "light",
  imagePosition = "left",
  icon,
}: FeatureSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isHovered, setIsHovered] = useState(false)

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      className={cn("py-20 md:py-32 overflow-hidden relative", variant === "light" ? "bg-white" : "bg-gray-50")}
    >
      {/* Background elements */}
      <div
        className={cn(
          "absolute top-0 w-1/3 h-1/3 rounded-full opacity-70",
          imagePosition === "left" ? "right-0" : "left-0",
          variant === "light"
            ? "bg-gradient-to-br from-brand-red/5 to-transparent"
            : "bg-gradient-to-br from-brand-red/10 to-transparent",
        )}
      ></div>
      <div
        className={cn(
          "absolute bottom-0 w-1/4 h-1/4 rounded-full opacity-70",
          imagePosition === "left" ? "left-0" : "right-0",
          variant === "light"
            ? "bg-gradient-to-tr from-brand-red/5 to-transparent"
            : "bg-gradient-to-tr from-brand-red/10 to-transparent",
        )}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className={cn(imagePosition === "left" ? "order-2 md:order-1" : "order-2")}
          >
            <motion.div
              variants={imageVariants}
              className="relative rounded-xl overflow-hidden shadow-2xl group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="aspect-w-16 aspect-h-9 relative h-80 md:h-96">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={imageAlt}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    isHovered ? "scale-105" : "scale-100",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    variant === "light"
                      ? "bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                      : "bg-gradient-to-t from-black/80 via-black/50 to-transparent",
                  )}
                ></div>
                <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                  <h4 className="text-xl font-bold text-white mb-1">{imageCaption}</h4>
                  <p className="text-white/80 text-sm">{imageSubCaption}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="h-12 w-12 rounded-full bg-brand-red/20 backdrop-blur-md flex items-center justify-center">
                  {icon}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className={cn("space-y-8", imagePosition === "left" ? "order-1 md:order-2" : "order-1")}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium">
                Featured Initiative
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                {title}
                <span className="block h-1 w-16 bg-brand-red mt-4"></span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
            </motion.div>

            <motion.ul variants={itemVariants} className="space-y-5">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start group"
                  initial={{ opacity: 0, x: imagePosition === "left" ? 20 : -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="relative h-6 w-6 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-red/30 transition-colors duration-300">
                    <div className="absolute h-2 w-2 rounded-full bg-brand-red"></div>
                  </div>
                  <span className="ml-3 text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <Button
                className="group bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-red/20"
                asChild
              >
                <Link href={buttonLink}>
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
