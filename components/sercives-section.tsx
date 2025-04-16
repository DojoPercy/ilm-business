"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Award, Briefcase, Target, Users } from "lucide-react"

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

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  link: string
  linkText?: string
  index: number
}

const ServiceCard = ({
  title,
  description,
  icon,
  features,
  link,
  linkText = "Learn More",
  index,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-red/5 rounded-2xl rotate-1 transform translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-red/20 to-brand-red/5 flex items-center justify-center mr-4">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">{icon}</div>
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <div className="mb-6 flex-grow">
          <div className="space-y-3">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <div className="h-5 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2 mt-0.5"></span>
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href={link}
          className="inline-flex items-center text-brand-red font-medium group/link transition-all duration-300"
        >
          <span className="relative">
            {linkText}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red/30 group-hover/link:w-full transition-all duration-300"></span>
          </span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Upanuzi Accelerator",
      description:
        "A comprehensive program designed to support and scale promising African businesses through funding, mentorship, and resources.",
      icon: <Target className="h-5 w-5 text-brand-red" />,
      features: [
        "$100,000 investment support",
        "Customized business guidance",
        "Access to the Ubuntu digital platform",
      ],
      link: "/upanuzi",
    },
    {
      title: "Business Consulting",
      description:
        "Strategic business planning and support for startups and SMEs, including market entry strategies and capacity building.",
      icon: <Briefcase className="h-5 w-5 text-brand-red" />,
      features: ["Market entry and scalability", "Business restructuring", "Export & import facilitation"],
      link: "/services/business-development",
    },
    {
      title: "Nikela Fund",
      description:
        "An investment fund focused on supporting high-growth African businesses with capital and strategic guidance.",
      icon: <Award className="h-5 w-5 text-brand-red" />,
      features: ["Open to all investors", "High growth focus", "Strategic guidance"],
      link: "/nikela-fund",
    },
    {
      title: "CSR Advisory",
      description:
        "Corporate social responsibility advisory services to help businesses make a positive impact in their communities.",
      icon: <Users className="h-5 w-5 text-brand-red" />,
      features: ["Strategy development", "Sustainability initiatives", "Community engagement programs"],
      link: "/services/csr",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-brand-red/5 to-transparent rounded-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-brand-red/5 to-transparent rounded-full opacity-70"></div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#E63946_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionHeading align="center">Our Services</SectionHeading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            We offer comprehensive solutions to help businesses navigate the African market and achieve sustainable
            growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              link={service.link}
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
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
