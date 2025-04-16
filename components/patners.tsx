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

interface PartnerLogoProps {
  name: string
  logo: string
  index: number
  website?: string
}

const PartnerLogo = ({ name, logo, index, website }: PartnerLogoProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md h-32 flex items-center justify-center p-6">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 transition-opacity duration-300",
            isHovered && "opacity-100",
          )}
        ></div>

        <div className="relative z-10 flex flex-col items-center">
          <Image
            src={logo || "/placeholder.svg?height=70&width=150"}
            alt={name}
            width={150}
            height={70}
            className="max-h-16 w-auto transition-all duration-300 filter group-hover:brightness-110"
          />

          <div
            className={cn(
              "mt-2 text-xs font-medium text-gray-600 opacity-0 transition-all duration-300 -translate-y-2",
              isHovered && "opacity-100 translate-y-0",
            )}
          >
            {website ? (
              <Link href={website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red">
                Visit Website
              </Link>
            ) : (
              name
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PartnersSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    {
      name: "Mastercard Foundation",
      logo: "/images/partner-logos/mastercard-foundation.png",
      website: "https://mastercardfdn.org",
    },
    {
      name: "AfriLabs",
      logo: "/images/partner-logos/afrilabs.png",
      website: "https://afrilabs.com",
    },
    {
      name: "GIZ",
      logo: "/images/partner-logos/giz.png",
      website: "https://www.giz.de",
    },
    {
      name: "WUSC",
      logo: "/images/partner-logos/wusc.png",
      website: "https://wusc.ca",
    },
    {
      name: "CAMFED",
      logo: "/images/partner-logos/camfed.png",
      website: "https://camfed.org",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#E63946_1px,_transparent_1px),_linear-gradient(-45deg,_#E63946_1px,_transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionHeading align="center">Our Partners</SectionHeading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            We collaborate with leading organizations to create impactful programs and drive sustainable development
            across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <PartnerLogo
              key={partner.name}
              name={partner.name}
              logo={partner.logo}
              website={partner.website}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            className="group bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-red/20"
            asChild
          >
            <Link href="/partners">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
