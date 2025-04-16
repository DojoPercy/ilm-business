"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { CardTilt } from "@/components/ui/card-tilt"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ArrowRight, Briefcase, Users, Award, Target, ChevronDown, Heart, Calendar } from "lucide-react"
import { observeElements, applyMagneticEffect, applyTiltEffect, applyParallaxEffect } from "@/lib/animations"
import ImpactStatsTicker from "@/components/impact"
import AboutSection from "@/components/about-sections"
import ServicesSection from "@/components/sercives-section"
import FeaturedPrograms from "@/components/featured-section"
import NikelaFundSection from "@/components/nikela-fund"
import FeatureSection from "@/components/sections-feature"
import TeamSection from "@/components/team"
import PartnersSection from "@/components/patners"

export default function Home() {
  // Set up animation observers when component mounts
  useEffect(() => {
    const scrollObserver = observeElements()
    const parallaxEffect = applyParallaxEffect()

    // Apply magnetic effect to specific elements
    const magneticElements = document.querySelectorAll(".magnetic-effect")
    const cleanupFunctions = Array.from(magneticElements).map((el) => applyMagneticEffect(el as HTMLElement))

    // Apply tilt effect to cards
    const tiltElements = document.querySelectorAll(".manual-tilt-effect")
    const tiltCleanupFunctions = Array.from(tiltElements).map((el) => applyTiltEffect(el as HTMLElement))

    return () => {
      if (scrollObserver) scrollObserver.disconnect()
      if (parallaxEffect) parallaxEffect()
      cleanupFunctions.forEach((cleanup) => cleanup())
      tiltCleanupFunctions.forEach((cleanup) => cleanup())
    }
  }, [])

  // Reference for the scroll down button
  const aboutSectionRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Enhanced Hero Section with Consultation Image */}
      <section className="hero-section relative min-h-screen flex items-center">
        {/* Background image with consultation silhouette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg2.png"
            alt="Business Consultation"
            fill
            className="object-cover object-center brightness-[1]"
            priority
          />
        </div>

        {/* Updated gradient overlay with brand red */}
        <div className="hero-overlay"></div>

        <div className="container mx-auto px-4 py-24 pt-32 hero-content">
          <div className="max-w-3xl animate-on-scroll fade-in">
            {/* Enhanced typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 hero-heading lg:text-left text-center">
  <span className="hero-text-gradient">Empowering Growth</span>,<br />
  <span className="hero-text-gradient">Fostering Innovation,</span><br />
  <span className="hero-text-gradient">Advancing Gender Equality Across Africa</span>
</h1>


            <p className="text-sm md:text-lg text-gray-200 mb-10 hero-subheading animate-on-scroll slide-up stagger-1 max-w-2xl lg:text-left text-center">
            Welcome to Illuminate Africa, your partner in business acceleration, innovation, and gender equality advocacy across Africa. We specialize in a wide range of services designed to empower businesses, entrepreneurs, and communities.
            </p>
            <div className="flex flex-wrap gap-4 animate-on-scroll slide-up stagger-2 lg:justify-start justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-brand-red-dark text-white btn-pulse" asChild>
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
                asChild
              >
                <Link href="/nikela-fund">Invest With Us</Link>
              </Button>
            </div>
          </div>
        </div>

        
      </section>

<ImpactStatsTicker/>


    <AboutSection/>
      <ServicesSection />

     

    <FeaturedPrograms />
    <NikelaFundSection/>

    <FeatureSection
        title="Women Entrepreneurs"
        description="We are committed to supporting and empowering women entrepreneurs across Africa, providing specialized resources, mentorship, and funding opportunities designed to address the unique challenges they face."
        features={[
          "Dedicated funding for women-led businesses",
          "Specialized mentorship and networking opportunities",
          "Skills development and capacity building programs",
        ]}
        buttonText="Learn More"
        buttonLink="/women-entrepreneurs"
        imageSrc="/images/african-women.jpeg"
        imageAlt="Women Entrepreneurs"
        imageCaption="Empowering Women"
        imageSubCaption="Supporting female entrepreneurs across Africa"
        variant="light"
        imagePosition="left"
        icon={<Heart className="h-5 w-5 text-brand-red" />}
      />

      <FeatureSection
        title="Conferences & Events"
        description="We organize and participate in high-impact conferences, workshops, and networking events across Africa, bringing together entrepreneurs, investors, and industry experts to share knowledge and build connections."
        features={[
          "Annual African Business Summit",
          "Quarterly investor networking events",
          "Industry-specific workshops and masterclasses",
        ]}
        buttonText="Upcoming Events"
        buttonLink="/events"
        imageSrc="/images/conference-hall.jpeg"
        imageAlt="Conference Hall"
        imageCaption="Knowledge Sharing"
        imageSubCaption="Building networks and fostering collaboration"
        variant="dark"
        imagePosition="right"
        icon={<Calendar className="h-5 w-5 text-brand-red" />}
      />

<TeamSection />
<PartnersSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-red text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Business?</h2>
          </div>
          <div className="animate-on-scroll slide-up stagger-1">
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're looking to expand your business, invest in African markets, or need strategic guidance,
              we're here to help.
            </p>
          </div>
          <div className="animate-on-scroll slide-up stagger-2">
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white magnetic-effect" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-red"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
