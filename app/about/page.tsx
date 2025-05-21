"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Briefcase, Globe, Lightbulb, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-sections-about"
import { AnimatedCounter } from "@/components/animated-counter-aboutpage"
import { SectionHeading } from "@/components/sections-heading"
import PartnersSection from "@/components/patners"

export default function AboutPage() {
  return (
    <main>
      {/* Header Banner */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-brand-red/20 text-brand-red rounded-full text-sm font-medium mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              About Illuminate Africa
              <span className="block h-1 w-24 bg-brand-red mt-6"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Propelling Africa's Businesses Forward Through Innovation, Investment, and Strategic Support
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story & Vision */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-6">
                <SectionHeading>Our Story & Vision</SectionHeading>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Illuminate Africa (ILM) was founded with a clear mission: to accelerate the growth of African
                  businesses and facilitate international trade and investment across the continent.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our journey began when a team of experienced professionals recognized the need for comprehensive
                  business support services that truly understand the unique challenges and opportunities of the African
                  market.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-brand-red" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Our Vision</h3>
                    <p className="text-gray-700">
                      To be a leading African brand in logistics, trade, and business support services.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-brand-red" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Our Mission</h3>
                    <p className="text-gray-700">
                      Delivering innovative, timely, and cost-effective business solutions to clients in Africa and
                      beyond.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-red/5 rounded-2xl rotate-3 transform translate-y-4 -z-10"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <div className="aspect-w-4 aspect-h-3 relative">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Illuminate Africa Team"
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h4 className="text-xl font-bold text-white mb-1">Empowering Growth</h4>
                      <p className="text-white/80 text-sm">
                        Our team of experts working to transform African businesses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_#E63946_1px,_transparent_1px),_linear-gradient(-45deg,_#E63946_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <SectionHeading
              align="center"
              subtitle="We're proud of the difference we've made across Africa through our programs and initiatives."
            >
              Our Impact
            </SectionHeading>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-20">
            <AnimatedSection animation="zoom-in" delay={100}>
              <div className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Briefcase className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-3xl font-bold text-brand-red mb-2">
                  <AnimatedCounter end={500} suffix="k+" />
                </h3>
                <p className="text-gray-700 font-medium">Capital Deployed</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="zoom-in" delay={200}>
              <div className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Users className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-3xl font-bold text-brand-red mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </h3>
                <p className="text-gray-700 font-medium">Businesses Supported</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="zoom-in" delay={300}>
              <div className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Award className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-3xl font-bold text-brand-red mb-2">
                  <AnimatedCounter end={100} suffix="+" />
                </h3>
                <p className="text-gray-700 font-medium">Jobs Created</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="zoom-in" delay={400}>
              <div className="bg-white p-6 rounded-xl text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Globe className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-3xl font-bold text-brand-red mb-2">
                  <AnimatedCounter end={3} suffix="+" />
                </h3>
                <p className="text-gray-700 font-medium">Countries</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" delay={500}>
              <SectionHeading align="center">Our Journey</SectionHeading>
            </AnimatedSection>

            <div className="relative mt-16">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-red/30 via-brand-red/20 to-brand-red/10 rounded-full"></div>

              <div className="space-y-24">
                <AnimatedSection animation="slide-in-left" delay={100}>
                  <div className="relative">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="md:text-right md:pr-12">
                        <div className="inline-flex items-center px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-2">
                          2018
                        </div>
                        <h4 className="font-bold text-xl mb-3">Foundation</h4>
                        <p className="text-gray-700">
                          Illuminate Africa founded with a focus on business consulting and advisory services for
                          emerging African enterprises.
                        </p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-red/80 flex items-center justify-center shadow-lg z-10">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12"></div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-right" delay={200}>
                  <div className="relative">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="md:text-right md:pr-12"></div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-red/80 flex items-center justify-center shadow-lg z-10">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12">
                        <div className="inline-flex items-center px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-2">
                          2020
                        </div>
                        <h4 className="font-bold text-xl mb-3">Expansion</h4>
                        <p className="text-gray-700">
                          Expanded services to include logistics management and trade facilitation, helping businesses
                          navigate cross-border operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-left" delay={300}>
                  <div className="relative">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="md:text-right md:pr-12">
                        <div className="inline-flex items-center px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-2">
                          2021
                        </div>
                        <h4 className="font-bold text-xl mb-3">Acceleration</h4>
                        <p className="text-gray-700">
                          Launched the Upanuzi Accelerator program to provide funding, mentorship, and resources to
                          high-potential African startups.
                        </p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-red/80 flex items-center justify-center shadow-lg z-10">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12"></div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-right" delay={400}>
                  <div className="relative">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="md:text-right md:pr-12"></div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-red/80 flex items-center justify-center shadow-lg z-10">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12">
                        <div className="inline-flex items-center px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-2">
                          2022
                        </div>
                        <h4 className="font-bold text-xl mb-3">Investment</h4>
                        <p className="text-gray-700">
                          Established the Nikela Fund in partnership with SBINC Capital to provide strategic investments
                          to growth-stage African businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-left" delay={500}>
                  <div className="relative">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="md:text-right md:pr-12">
                        <div className="inline-flex items-center px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-2">
                          2023
                        </div>
                        <h4 className="font-bold text-xl mb-3">Continental Growth</h4>
                        <p className="text-gray-700">
                          Expanded operations to 15+ countries across Africa, establishing a pan-African network of
                          partners and clients.
                        </p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-red/80 flex items-center justify-center shadow-lg z-10">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12"></div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-brand-red/10 rounded-full"></div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <SectionHeading
              align="center"
              subtitle="Our methodology combines local expertise with global best practices, ensuring solutions that are both innovative and contextually appropriate for African markets."
            >
              Our Approach
            </SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-brand-red">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Understand</h3>
                <p className="text-gray-700 text-center">
                  We take time to deeply understand each client's unique needs, challenges, and goals within the African
                  context.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-brand-red">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Innovate</h3>
                <p className="text-gray-700 text-center">
                  We develop tailored, innovative solutions that leverage our expertise and network across the
                  continent.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-brand-red">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Implement</h3>
                <p className="text-gray-700 text-center">
                  We execute with precision and provide ongoing support to ensure sustainable success and growth.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#E63946_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <SectionHeading
              align="center"
              subtitle="Our core principles guide everything we do as we work to empower businesses across Africa."
            >
              Our Values
            </SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hands.jpg"
                  alt="Team collaboration and unity"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white">United in Purpose</h4>
                  <p className="text-white/80">Working together to transform African business</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">What Drives Us</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Illuminate Africa, our values are the foundation of our work. They shape our culture, guide our
                    decisions, and define how we engage with our clients, partners, and communities.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center mr-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                        <span className="text-brand-red font-bold">01</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Excellence</h4>
                        <p className="text-gray-700">
                          We strive for excellence in everything we do, setting high standards and continuously
                          improving our services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center mr-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                        <span className="text-brand-red font-bold">02</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Integrity</h4>
                        <p className="text-gray-700">
                          We act with honesty, transparency, and ethical conduct in all our business dealings and
                          relationships.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center mr-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                        <span className="text-brand-red font-bold">03</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Collaboration</h4>
                        <p className="text-gray-700">
                          We believe in the power of partnership and teamwork to achieve greater impact and sustainable
                          results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center mr-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                        <span className="text-brand-red font-bold">04</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Innovation</h4>
                        <p className="text-gray-700">
                          We embrace creativity and forward-thinking approaches to solve complex challenges facing
                          African businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#E63946_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <SectionHeading
              align="center"
              subtitle="Our diverse team of experts is dedicated to empowering African businesses and driving sustainable growth across the continent."
            >
              Our Team
            </SectionHeading>
          </AnimatedSection>

          <div className="mb-16">
            <AnimatedSection animation="fade-in" delay={100}>
              <h3 className="text-2xl font-bold mb-8 text-center">Leadership</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md">
                    <Image
                      src="/maurice_1.png"
                      alt="Maurice Cashinco"
                      width={128}
                      height={128}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-1">Maurice Cashinco</h4>
                  <p className="text-brand-red font-medium mb-3">Executive Director</p>
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="#" className="text-gray-500 hover:text-brand-red">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-brand-red">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md">
                    <Image
                      src="/gyimah.png"
                      alt="Emmanuel Gyimah"
                      width={128}
                      height={128}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-1">Emmanuel Gyimah</h4>
                  <p className="text-brand-red font-medium mb-3">Director</p>
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="#" className="text-gray-500 hover:text-brand-red">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-brand-red">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md">
                    <Image
                      src="/kelle.png"
                      alt="Katherine Kellein"
                      width={128}
                      height={128}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-1">Katherine Kellein</h4>
                  <p className="text-brand-red font-medium mb-3">Program Director</p>
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="#" className="text-gray-500 hover:text-brand-red">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-brand-red">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={500}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md">
                    <Image
                      src="/chelseapro.png"
                      alt="Chelsea Kowovi"
                      width={128}
                      height={128}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-1">Chelsea Kowovi</h4>
                  <p className="text-brand-red font-medium mb-3">Tech Lead</p>
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="#" className="text-gray-500 hover:text-brand-red">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-brand-red">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="mb-16">
            <AnimatedSection animation="fade-in" delay={600}>
              <h3 className="text-2xl font-bold mb-8 text-center">Advisory Board</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={700}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-md">
                    <Image
                      src="/kakrah.png"
                      alt="Kakrah Sersah"
                      width={96}
                      height={96}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold mb-1">Kakrah Sersah</h4>
                  <p className="text-gray-600 text-sm">Board Chair</p>
                  <div className="mt-3 h-px w-16 bg-brand-red/30 mx-auto"></div>
                  <p className="text-gray-600 text-sm mt-3"></p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={800}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-md">
                    <Image
                      src="/wil.png"
                      alt="William Sena Mochia"
                      width={96}
                      height={96}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold mb-1">William Sena Mochia</h4>
                  <p className="text-gray-600 text-sm">Vice Chair</p>
                  <div className="mt-3 h-px w-16 bg-brand-red/30 mx-auto"></div>
                  <p className="text-gray-600 text-sm mt-3"></p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={900}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-md">
                    <Image
                      src="/luc.png"
                      alt="Lucia Arntz"
                      width={96}
                      height={96}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold mb-1">Lucia Arntz</h4>
                  <p className="text-gray-600 text-sm">Board Member</p>
                  <div className="mt-3 h-px w-16 bg-brand-red/30 mx-auto"></div>
                  <p className="text-gray-600 text-sm mt-3"></p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={900}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-md">
                    <Image
                      src="/lisan.png"
                      alt="Lisa Bosch"
                      width={96}
                      height={96}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold mb-1">Lisa Bosch</h4>
                  <p className="text-gray-600 text-sm">Board Member</p>
                  <div className="mt-3 h-px w-16 bg-brand-red/30 mx-auto"></div>
                  <p className="text-gray-600 text-sm mt-3"></p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={900}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-md">
                    <Image
                      src="/gyimah.png"
                      alt="Emmanuel Gyimah"
                      width={96}
                      height={96}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold mb-1">Emmanuel Gyimah</h4>
                  <p className="text-gray-600 text-sm">Board Member</p>
                  <div className="mt-3 h-px w-16 bg-brand-red/30 mx-auto"></div>
                  <p className="text-gray-600 text-sm mt-3"></p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={900}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-md">
                    <Image
                      src="/maurice_1.png"
                      alt="Maurice Cashinco"
                      width={96}
                      height={96}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold mb-1">Maurice Cashinco</h4>
                  <p className="text-gray-600 text-sm">Board Member</p>
                  <div className="mt-3 h-px w-16 bg-brand-red/30 mx-auto"></div>
                  <p className="text-gray-600 text-sm mt-3"></p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={900}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-md">
                    <Image
                      src="/annn.png"
                      alt="Ann Sophie Mante"
                      width={96}
                      height={96}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold mb-1">Ann Sophie Mante</h4>
                  <p className="text-gray-600 text-sm">Board Member</p>
                  <div className="mt-3 h-px w-16 bg-brand-red/30 mx-auto"></div>
                  <p className="text-gray-600 text-sm mt-3"></p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div>
          
           <PartnersSection />
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-brand-red/20 text-brand-red rounded-full text-sm font-medium mb-6">
              Careers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              We're always looking for talented individuals who are passionate about driving growth and innovation
              across Africa. Join us in our mission to transform the continent's business landscape.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={400}>
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 h-auto rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-red/20 group"
              asChild
            >
              <Link href="/careers">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
