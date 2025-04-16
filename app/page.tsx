"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { CardTilt } from "@/components/ui/card-tilt"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ArrowRight, Briefcase, Users, Award, Target, ChevronDown } from "lucide-react"
import { observeElements, applyMagneticEffect, applyTiltEffect, applyParallaxEffect } from "@/lib/animations"

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

      {/* Impact Stats Ticker */}
      <section
  ref={aboutSectionRef}
  className="py-16 bg-brand-red text-white relative overflow-hidden"
>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
      {/* Start-ups */}
      <div className="animate-on-scroll slide-up">
        <h3 className="text-4xl font-extrabold tracking-tight">
          <AnimatedCounter end={26} suffix="+" />
        </h3>
        <p className="text-xs md:text-sm uppercase font-semibold opacity-80 mt-2">Start-ups</p>
      </div>

      {/* Capital Invested */}
      <div className="animate-on-scroll slide-up stagger-1">
        <h3 className="text-4xl font-extrabold tracking-tight">
          <AnimatedCounter end={500000} prefix="€" suffix="+" />
        </h3>
        <p className="text-xs md:text-sm uppercase font-semibold opacity-80 mt-2">Capital Invested</p>
      </div>

      {/* Growth Rate */}
      <div className="animate-on-scroll slide-up stagger-2">
        <h3 className="text-4xl font-extrabold tracking-tight">
          <AnimatedCounter end={30} suffix="%" />
        </h3>
        <p className="text-xs md:text-sm uppercase font-semibold opacity-80 mt-2">Growth Rate</p>
      </div>

      {/* Business Partners */}
      <div className="animate-on-scroll slide-up stagger-3">
        <h3 className="text-4xl font-extrabold tracking-tight">
          <AnimatedCounter end={100} suffix="+" />
        </h3>
        <p className="text-xs md:text-sm uppercase font-semibold opacity-80 mt-2">Business Partners</p>
      </div>

      {/* Women Entrepreneurs */}
      <div className="animate-on-scroll slide-up stagger-4">
        <h3 className="text-4xl font-extrabold tracking-tight">
          <AnimatedCounter end={20} suffix="+" />
        </h3>
        <p className="text-xs md:text-sm uppercase font-semibold opacity-80 mt-2">Women Entrepreneurs</p>
      </div>
    </div>
  </div>
</section>


      {/* About Section with Business Growth Image */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="animate-on-scroll slide-up">
              <SectionHeading align="center">Who We Are</SectionHeading>
            </div>
            <p className="text-lg text-gray-700 animate-on-scroll fade-in stagger-1">
              Illuminate Africa (ILM) is a leading African brand in logistics, trade, and business support services.
              With a deep understanding of the African business landscape and strong networks with government and
              private sectors, we serve as a one-stop shop for businesses looking to thrive in Africa and beyond.
            </p>
            <div className="mt-8 animate-on-scroll slide-up stagger-2">
              <Button className="magnetic-effect bg-brand-red hover:bg-brand-red-dark text-white" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-20">
            <div className="absolute inset-0 bg-red-50 rounded-3xl -rotate-1 transform -translate-y-4 -z-10"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="animate-on-scroll slide-in-left">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  Illuminate Africa is dedicated to propelling Africa's Businesses towards accelerated growth, fostering
                  innovation and advocating for gender equality. At Illuminate Africa, our Mission is to empower
                  businesses to soar to new heights.
                </p>
                <p className="text-gray-700">
                  We dedicate ourselves to working with businesses that have already taken flight and are now poised for
                  exponential growth, along with discovering promising start-ups in the Tech Ecosystem.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden animate-on-scroll slide-in-right">
                <Image src="/images/business-growth.jpeg" alt="Business Growth" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Empowering Growth</h4>
                  <p>Accelerating business success across Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with AI Technology Image */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll slide-up">
            <SectionHeading align="center">Our Services</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer comprehensive solutions to help businesses navigate the African market and achieve sustainable
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <CardTilt className="animate-on-scroll scale-up stagger-1">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Upanuzi Accelerator</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive program designed to support and scale promising African businesses through funding,
                  mentorship, and resources.
                </p>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>$100,000 investment support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Customized business guidance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Access to the Ubuntu digital platform</span>
                  </li>
                </ul>
                <Link
                  href="/upanuzi"
                  className="inline-flex items-center text-brand-red hover:text-brand-red-dark font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </CardTilt>

            <CardTilt className="animate-on-scroll scale-up stagger-2">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic business planning and support for startups and SMEs, including market entry strategies and
                  capacity building.
                </p>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Market entry and scalability</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Business restructuring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Export & import facilitation</span>
                  </li>
                </ul>
                <Link
                  href="/services/business-development"
                  className="inline-flex items-center text-brand-red hover:text-brand-red-dark font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </CardTilt>

            <CardTilt className="animate-on-scroll scale-up stagger-3">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nikela Fund</h3>
                <p className="text-gray-600 mb-4">
                  An investment fund focused on supporting high-growth African businesses with capital and strategic
                  guidance.
                </p>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Open to all investors</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>High growth focus</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Strategic guidance</span>
                  </li>
                </ul>
                <Link
                  href="/nikela-fund"
                  className="inline-flex items-center text-brand-red hover:text-brand-red-dark font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </CardTilt>

            <CardTilt className="animate-on-scroll scale-up stagger-4">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">CSR Advisory</h3>
                <p className="text-gray-600 mb-4">
                  Corporate social responsibility advisory services to help businesses make a positive impact in their
                  communities.
                </p>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Strategy development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Sustainability initiatives</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red mr-2"></span>
                    <span>Community engagement programs</span>
                  </li>
                </ul>
                <Link
                  href="/services/csr"
                  className="inline-flex items-center text-brand-red hover:text-brand-red-dark font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </CardTilt>
          </div>

          <div className="text-center mt-12 animate-on-scroll fade-in">
            <Button className="bg-brand-red hover:bg-brand-red-dark text-white magnetic-effect" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

     

      {/* Featured Projects/Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll slide-up">
            <SectionHeading align="center">Featured Programs</SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-lg animate-on-scroll slide-in-left">
              <h3 className="text-2xl font-bold mb-6">DeveloPPP Ventures Ghana</h3>
              <p className="text-gray-700 mb-6">
                The develoPPP project, funded by the German Federal Ministry for Economic Cooperation and Development
                (BMZ) and implemented by GIZ in collaboration with partners including ILM Africa Consult, supports the
                growth and expansion of startups across various sectors.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <h4 className="text-2xl font-bold text-brand-red">
                    <AnimatedCounter end={20} />
                  </h4>
                  <p className="text-sm text-gray-600">Selected Participants</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <h4 className="text-2xl font-bold text-brand-red">
                    <AnimatedCounter end={5} suffix="+" />
                  </h4>
                  <p className="text-sm text-gray-600">Startups Funded</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <h4 className="text-2xl font-bold text-brand-red">
                    <AnimatedCounter end={8} />
                  </h4>
                  <p className="text-sm text-gray-600">Expert Judges</p>
                </div>
              </div>
              <div className="text-center">
                <Button
                  variant="outline"
                  className="magnetic-effect border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  asChild
                >
                  <Link href="/projects/developpp">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg animate-on-scroll slide-in-right">
              <h3 className="text-2xl font-bold mb-6">The BOLT Accelerator</h3>
              <p className="text-gray-700 mb-6">
                The BOLT Accelerator, backed by BOLT and partners like The Nest (Nigeria) and ILM Africa Consult,
                empowers startups across diverse industries with €2000 seed funding, resources, and mentorship.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <h4 className="text-2xl font-bold text-brand-red">
                    <AnimatedCounter end={10} />
                  </h4>
                  <p className="text-sm text-gray-600">Ventures Supported</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <h4 className="text-2xl font-bold text-brand-red">
                    <AnimatedCounter end={2000} prefix="€" />
                  </h4>
                  <p className="text-sm text-gray-600">Seed Funding</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <h4 className="text-2xl font-bold text-brand-red">
                    <AnimatedCounter end={20} />
                  </h4>
                  <p className="text-sm text-gray-600">Pitches</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <h4 className="text-2xl font-bold text-brand-red">
                    <AnimatedCounter end={10} />
                  </h4>
                  <p className="text-sm text-gray-600">Expert Judges</p>
                </div>
              </div>
              <div className="text-center">
                <Button
                  variant="outline"
                  className="magnetic-effect border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  asChild
                >
                  <Link href="/projects/bolt-accelerator">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Entrepreneurs Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left order-2 md:order-1">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/african-women.jpeg" alt="Women Entrepreneurs" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Empowering Women</h4>
                  <p>Supporting female entrepreneurs across Africa</p>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll slide-in-right order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 section-heading">Women Entrepreneurs</h2>
              <p className="text-lg text-gray-700 mb-6">
                We are committed to supporting and empowering women entrepreneurs across Africa, providing specialized
                resources, mentorship, and funding opportunities designed to address the unique challenges they face.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Dedicated funding for women-led businesses</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Specialized mentorship and networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Skills development and capacity building programs</span>
                </li>
              </ul>
              <Button className="bg-brand-red hover:bg-brand-red-dark text-white magnetic-effect" asChild>
                <Link href="/women-entrepreneurs">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nikela Fund Section */}
      <section className="py-16 md:py-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Nikela Fund</h2>
              <p className="text-lg mb-6">
                The Nikela Fund is our investment vehicle designed to support high-growth African businesses. Named
                after the Swahili word for "spark," Nikela embodies our commitment to ignite progress and positive
                change in the region.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Open to all investors interested in the African market</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Focus on high-growth sectors with significant impact potential</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Comprehensive support beyond just financial investment</span>
                </li>
              </ul>
              <Button className="bg-brand-red hover:bg-brand-red-dark text-white magnetic-effect" asChild>
                <Link href="/nikela-fund">Learn About Investing</Link>
              </Button>
            </div>
            <div className="animate-on-scroll slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-red">
                      <AnimatedCounter end={20} suffix="-30%" />
                    </h3>
                    <p className="text-gray-300">Target Returns</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-red">
                      <AnimatedCounter end={26} suffix="+" />
                    </h3>
                    <p className="text-gray-300">Start-ups Funded</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-red">
                      <AnimatedCounter end={3} />
                    </h3>
                    <p className="text-gray-300">African Countries</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-red">
                      <AnimatedCounter end={2} />
                    </h3>
                    <p className="text-gray-300">CSR Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference & Events Section */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <h2 className="text-3xl font-bold mb-6 section-heading">Conferences & Events</h2>
              <p className="text-lg text-gray-700 mb-6">
                We organize and participate in high-impact conferences, workshops, and networking events across Africa,
                bringing together entrepreneurs, investors, and industry experts to share knowledge and build
                connections.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Annual African Business Summit</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Quarterly investor networking events</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Industry-specific workshops and masterclasses</span>
                </li>
              </ul>
              <Button className="bg-brand-red hover:bg-brand-red-dark text-white magnetic-effect" asChild>
                <Link href="/events">Upcoming Events</Link>
              </Button>
            </div>
            <div className="animate-on-scroll slide-in-right">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/conference-hall.jpeg" alt="Conference Hall" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Knowledge Sharing</h4>
                  <p>Building networks and fostering collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Preview */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll slide-up">
            <SectionHeading align="center">Meet Our Team</SectionHeading>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="animate-on-scroll slide-up stagger-1">
              <div className="bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-red-200">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Maurice Cashinco"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Maurice Cashinco</h3>
                <p className="text-brand-red">Executive Director, Co-founder</p>
              </div>
            </div>

            <div className="animate-on-scroll slide-up stagger-2">
              <div className="bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-red-200">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Emmanuel Gyimah"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Emmanuel Gyimah</h3>
                <p className="text-brand-red">Director, Co-founder</p>
              </div>
            </div>

            <div className="animate-on-scroll slide-up stagger-3">
              <div className="bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-red-200">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Katherine Kellein"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Katherine Kellein</h3>
                <p className="text-brand-red">Program Director</p>
              </div>
            </div>

            <div className="animate-on-scroll slide-up stagger-4">
              <div className="bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-red-200">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Chelsea Kowovi"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Chelsea Kowovi</h3>
                <p className="text-brand-red">Technical Lead</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-on-scroll fade-in">
            <Button
              variant="outline"
              className="magnetic-effect border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
              asChild
            >
              <Link href="/team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll slide-up">
            <SectionHeading align="center">Our Partners</SectionHeading>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center animate-on-scroll slide-up">
              <Image
                src="/images/partner-logos/mastercard-foundation.png"
                alt="Mastercard Foundation"
                width={150}
                height={70}
                className="max-h-16 w-auto transition-all duration-300 filter hover:brightness-110 hover:scale-105"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center animate-on-scroll slide-up stagger-1">
              <Image
                src="/images/partner-logos/afrilabs.png"
                alt="AfriLabs"
                width={150}
                height={70}
                className="max-h-16 w-auto transition-all duration-300 filter hover:brightness-110 hover:scale-105"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center animate-on-scroll slide-up stagger-2">
              <Image
                src="/images/partner-logos/giz.png"
                alt="GIZ"
                width={150}
                height={70}
                className="max-h-16 w-auto transition-all duration-300 filter hover:brightness-110 hover:scale-105"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center animate-on-scroll slide-up stagger-3">
              <Image
                src="/images/partner-logos/wusc.png"
                alt="WUSC"
                width={150}
                height={70}
                className="max-h-16 w-auto transition-all duration-300 filter hover:brightness-110 hover:scale-105"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center animate-on-scroll slide-up stagger-4">
              <Image
                src="/images/partner-logos/camfed.png"
                alt="CAMFED"
                width={150}
                height={70}
                className="max-h-16 w-auto transition-all duration-300 filter hover:brightness-110 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

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
