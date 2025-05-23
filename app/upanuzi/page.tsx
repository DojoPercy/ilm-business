"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Award, Lightbulb, Rocket } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function UpanuziPage() {
  return (
    <>
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
                          Upanuzi Accelerator
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                          Upanuzi Accelerator
                          <span className="block h-1 w-24 bg-brand-red mt-6"></span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                          Propelling Africa's Businesses Forward Through Innovation, Investment, and Strategic Support
                        </p>
                      </AnimatedSection>
                    </div>
                  </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-3xl font-bold mb-6 section-heading-left">Overview</h2>
                <p className="text-lg text-gray-700 mb-4">
                  The Upanuzi Accelerator is a comprehensive program designed to support and scale promising African
                  businesses through funding, mentorship, and resources.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our mission is to identify, nurture, and scale innovative businesses that have the potential to
                  transform industries and create significant economic impact across Africa.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Through a combination of capital investment, tailored guidance, and access to our extensive network,
                  we help entrepreneurs overcome challenges and accelerate their growth trajectory.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <Image
                  src="/accelerate.jpg"
                  alt="Upanuzi Accelerator Workspace"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      
      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">What We Offer</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-in-left" delay={100}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Investment Support</h3>
                  <p className="text-gray-700">
                    Up to $100,000 in funding to help scale your business, with flexible terms designed to support your
                    growth trajectory.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Customized Guidance</h3>
                  <p className="text-gray-700">
                    Personalized mentorship from industry experts, successful entrepreneurs, and business leaders who
                    understand the African market.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-left" delay={300}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Ubuntu Digital Platform</h3>
                  <p className="text-gray-700">
                    Access to our proprietary digital platform with resources, tools, and learning modules designed to
                    support your business growth.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={400}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Events and Networking</h3>
                  <p className="text-gray-700">
                    Regular workshops, networking events, and demo days to connect with investors, partners, and other
                    entrepreneurs.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-left" delay={500}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Post-Acceleration Support</h3>
                  <p className="text-gray-700">
                    Ongoing support after program completion, including follow-on funding opportunities and continued
                    access to our network.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    {/* Application Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Application Process</h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line - hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 transform -translate-x-1/2"></div>

              {/* Step 1 */}
              <AnimatedSection animation="slide-in-left" delay={100}>
                <div className="relative mb-12 md:mb-24">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold mb-2">1. Online Application</h3>
                      <p className="text-gray-700">
                        Submit your application through our online portal, including business information, team details,
                        and growth plans.
                      </p>
                    </div>
                    {/* Mobile dot - positioned at start of content */}
                    <div className="absolute -left-4 top-0 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-12"></div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Step 2 */}
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="relative mb-12 md:mb-24">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right md:pr-12"></div>
                    {/* Mobile dot - positioned at start of content */}
                    <div className="absolute -left-4 top-0 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-12">
                      <h3 className="text-xl font-bold mb-2">2. Initial Screening</h3>
                      <p className="text-gray-700">
                        Our team reviews applications to identify businesses that align with our criteria and have
                        strong growth potential.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Step 3 */}
              <AnimatedSection animation="slide-in-left" delay={300}>
                <div className="relative mb-12 md:mb-24">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold mb-2">3. Interview & Pitch</h3>
                      <p className="text-gray-700">
                        Selected applicants are invited for interviews and to pitch their business to our selection
                        committee.
                      </p>
                    </div>
                    {/* Mobile dot - positioned at start of content */}
                    <div className="absolute -left-4 top-0 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-12"></div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Step 4 */}
              <AnimatedSection animation="slide-in-right" delay={400}>
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right md:pr-12"></div>
                    {/* Mobile dot - positioned at start of content */}
                    <div className="absolute -left-4 top-0 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-12">
                      <h3 className="text-xl font-bold mb-2">4. Final Selection & Onboarding</h3>
                      <p className="text-gray-700">
                        Final participants are selected and onboarded into the program, with investment terms finalized
                        and program kickoff.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-in" delay={500}>
              <div className="text-center mt-16">
                <Button size="lg" asChild>
                  <Link href="/upanuzi/apply">Apply Now</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Stories */}
     

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Who can apply to the Upanuzi Accelerator?</h3>
                <p className="text-gray-700">
                  We accept applications from businesses across Africa that have a validated product or service, some
                  initial traction, and a clear growth strategy. Founders must be committed full-time to the business.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">What industries do you focus on?</h3>
                <p className="text-gray-700">
                  While we're industry-agnostic, we have particular interest in technology, agriculture, healthcare,
                  renewable energy, financial services, and education.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">What are the terms of investment?</h3>
                <p className="text-gray-700">
                  We typically invest between $50,000 and $100,000 in exchange for equity ranging from 5-10%, depending
                  on the stage and valuation of the business. Specific terms are discussed during the final selection
                  phase.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Do I need to relocate for the program?</h3>
                <p className="text-gray-700">
                  Our program is primarily virtual, with periodic in-person events in Accra, Ghana. While relocation is
                  not required, participants are expected to attend key in-person events throughout the program.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={500}>
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/upanuzi/faq">View All FAQs</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
        <section className="py-16 md:py-24 bg-white">
             <div className="container mx-auto px-4">
               <h2 className="text-3xl font-bold mb-12 text-center section-heading">Meet Our Team</h2>
     
               <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                 <div className="text-center">
                   <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                     <Image
                       src="/gyimah.png"
                       alt="Emmanuel Gyimah"
                       width={128}
                       height={128}
                       className="object-cover"
                     />
                   </div>
                   <h3 className="font-bold text-lg">Emmanuel Gyimah</h3>
                   <p className="text-amber-600">Director, Cofounder</p>
                 </div>
     
                 <div className="text-center">
                   <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                     <Image
                       src="/maurice.png"
                       alt="Maurice Cashinco"
                       width={128}
                       height={128}
                       className="object-cover object-top"
                     />
                   </div>
                   <h3 className="font-bold text-lg">Maurice Cashinco</h3>
                   <p className="text-amber-600">Executive Director, Cofounder</p>
                 </div>
     
                 <div className="text-center">
                   <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                     <Image
                       src="/kelle.png"
                       alt="Katherine Kellein"
                       width={128}
                       height={128}
                       className="object-cover"
                     />
                   </div>
                   <h3 className="font-bold text-lg">Katherine Kellein</h3>
                   <p className="text-amber-600">Management</p>
                 </div>
     
                 <div className="text-center">
                   <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                     <Image
                       src="/chelseapro.png"
                       alt="Chelsea Kowovi"
                       width={128}
                       height={128}
                       className="object-cover"
                     />
                   </div>
                   <h3 className="font-bold text-lg">Chelsea Kowovi</h3>
                   <p className="text-amber-600">Technical Lead</p>
                 </div>
     
                 <div className="text-center">
                   <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                     <Image
                       src="/obed.png"
                       alt="Obed Lamptey"
                       width={128}
                       height={128}
                       className="object-cover"
                     />
                   </div>
                   <h3 className="font-bold text-lg">Obed Lamptey</h3>
                   <p className="text-amber-600">Creative Lead</p>
                 </div>
     
                 
     
     
               </div>
     
               <div className="text-center mt-12">
                 <Button variant="outline" asChild>
                   <Link href="/about#team">View Full Team</Link>
                 </Button>
               </div>
             </div>
           </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Business?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the Upanuzi Accelerator and take your business to the next level with funding, mentorship, and
              resources.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-black" asChild>
                <Link href="/upanuzi/apply">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
                asChild
              >
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
