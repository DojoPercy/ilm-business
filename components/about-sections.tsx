"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({
  children,
  align = "left",
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn("mb-6", align === "center" && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {children}
      </h2>
      <div
        className={cn(
          "h-1 bg-brand-red w-16 mt-4",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
    </div>
  );
};

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
  };

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
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-brand-red/10 rounded-full" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <SectionHeading align="center">Who We Are</SectionHeading>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed"
          >
            At Illuminate Africa, we are committed to accelerating the growth of
            Africa’s most promising businesses. Our focus is on companies that
            have already launched and are ready to scale within the dynamic tech
            ecosystem. We champion innovation, foster strategic growth, and
            advocate for gender equality in business. By empowering
            entrepreneurs and startups, we help expand their product offerings,
            grow their user base, and unlock diverse funding opportunities.
            Illuminate Africa is more than a growth partner — we are a catalyst
            for transformative impact across the continent.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <Button
              className="group bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-red/20"
              asChild
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative mt-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 to-brand-red/5 rounded-3xl rotate-1 transform translate-y-4 -z-10"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium">
                Our Purpose
              </div>

              <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>

              <div className="relative pl-6 border-l-2 border-brand-red/30">
                <Quote className="absolute -left-4 -top-1 text-brand-red/20 h-8 w-8" />
                <p className="text-gray-700 italic">
             We empower high-potential African businesses to scale faster, grow stronger, and access capital by advancing innovation and inclusive growth within the tech ecosystem.
                </p>
              </div>

              <p className="text-gray-700">
                At Illuminate Africa, we empower businesses to soar to new
                heights. We dedicate ourselves to working with businesses that
                have already taken flight and are now poised for exponential
                growth, along with discovering promising start-ups in the Tech
                Ecosystem.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Innovation
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Growth
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Equality
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Tech Ecosystem
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="relative h-80 md:h-96 rounded-xl overflow-hidden group"
            >
              <Image
                src="/growth.jpg"
                alt="Business Growth"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <h4 className="text-xl font-bold text-white mb-2">
                  Empowering Growth
                </h4>
                <p className="text-white/80 text-sm max-w-xs">
                  Accelerating business success across Africa through strategic
                  partnerships and innovative solutions
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
