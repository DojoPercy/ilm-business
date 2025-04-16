"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react"

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

interface TeamMemberProps {
  name: string
  role: string
  image: string
  index: number
  linkedin?: string
  twitter?: string
  email?: string
}

const TeamMember = ({ name, role, image, index, linkedin, twitter, email }: TeamMemberProps) => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-red/5 rounded-2xl rotate-3 transform translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100">
        <div className="h-48 relative overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-b from-brand-red/20 to-transparent opacity-0 transition-opacity duration-300 z-10",
              isHovered && "opacity-100",
            )}
          ></div>
          <Image
            src={image || "/placeholder.svg?height=200&width=200"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-brand-red text-sm font-medium mt-1">{role}</p>

          <div
            className={cn(
              "flex items-center justify-center gap-3 mt-4 opacity-0 transition-all duration-300 -translate-y-2",
              isHovered && "opacity-100 translate-y-0",
            )}
          >
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4 text-gray-700" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <Twitter className="h-4 w-4 text-gray-700" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 text-gray-700" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    {
      name: "Maurice Cashinco",
      role: "Executive Director, Co-founder",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
      twitter: "#",
      email: "maurice@example.com",
    },
    {
      name: "Emmanuel Gyimah",
      role: "Director, Co-founder",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
      twitter: "#",
      email: "emmanuel@example.com",
    },
    {
      name: "Katherine Kellein",
      role: "Program Director",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
      twitter: "#",
      email: "katherine@example.com",
    },
    {
      name: "Chelsea Kowovi",
      role: "Technical Lead",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
      twitter: "#",
      email: "chelsea@example.com",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionHeading align="center">Meet Our Team</SectionHeading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Our diverse team of experts is dedicated to empowering African businesses and driving sustainable growth
            across the continent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              twitter={member.twitter}
              email={member.email}
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
            variant="outline"
            className="group border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300"
            asChild
          >
            <Link href="/team">
              View Full Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
