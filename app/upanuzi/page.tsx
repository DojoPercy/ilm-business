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
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Upanuzi Accelerator</h1>
              <p className="text-xl text-gray-300">Transforming African Businesses</p>
            </div>
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
                  src="/placeholder.svg?height=600&width=800"
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Program Tracks</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-up" delay={100}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Early Stage</h3>
                  <p className="text-gray-600 mb-4">
                    For startups with a validated product and initial traction looking to refine their business model
                    and prepare for scale.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>$50,000 investment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>6-month program</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Product-market fit focus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Growth Stage</h3>
                  <p className="text-gray-600 mb-4">
                    For established businesses with proven traction seeking to expand into new markets or scale
                    operations significantly.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>$100,000 investment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>9-month program</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Scaling & expansion focus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation Track</h3>
                  <p className="text-gray-600 mb-4">
                    For businesses developing innovative solutions to critical challenges in healthcare, agriculture,
                    energy, or education.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>$75,000 investment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>8-month program</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Impact & innovation focus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={400}>
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/upanuzi/brochure">Download Program Brochure</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-red-200 transform md:translate-x-0 translate-x-4"></div>

              {/* Step 1 */}
              <AnimatedSection animation="slide-in-left" delay={100}>
                <div className="relative mb-12 md:mb-24 pl-12 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold mb-2">1. Online Application</h3>
                      <p className="text-gray-700">
                        Submit your application through our online portal, including business information, team details,
                        and growth plans.
                      </p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-4 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-12"></div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Step 2 */}
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="relative mb-12 md:mb-24 pl-12 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right md:pr-12"></div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-4 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
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
                <div className="relative mb-12 md:mb-24 pl-12 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold mb-2">3. Interview & Pitch</h3>
                      <p className="text-gray-700">
                        Selected applicants are invited for interviews and to pitch their business to our selection
                        committee.
                      </p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-4 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-12"></div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Step 4 */}
              <AnimatedSection animation="slide-in-right" delay={400}>
                <div className="relative pl-12 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:text-right md:pr-12"></div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-4 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Success Stories</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-in-left" delay={200}>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AgriTech Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    A precision agriculture startup that increased farmer yields by 40% and expanded to three countries
                    after participating in our program.
                  </p>
                  <blockquote className="italic text-gray-700 border-l-4 border-red-500 pl-4 mb-4">
                    "The Upanuzi Accelerator provided us with not just capital, but the strategic guidance and
                    connections we needed to scale across borders."
                  </blockquote>
                  <p className="font-semibold">- Sarah Osei, Founder & CEO</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={300}>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">MediConnect</h3>
                  <p className="text-gray-600 mb-4">
                    A healthcare logistics platform that now serves over 200 medical facilities and raised $2M in Series
                    A funding after our accelerator.
                  </p>
                  <blockquote className="italic text-gray-700 border-l-4 border-red-500 pl-4 mb-4">
                    "Upanuzi helped us refine our business model and connected us with investors who understood our
                    vision for healthcare in Africa."
                  </blockquote>
                  <p className="font-semibold">- David Mensah, Co-founder</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={400}>
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/upanuzi/success-stories">See All Success Stories</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Meet the Team</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Team Member"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Katherine Kellein</h3>
                <p className="text-red-600">Program Director</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Team Member"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Michael Addo</h3>
                <p className="text-red-600">Investment Lead</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Team Member"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Fatima Diallo</h3>
                <p className="text-red-600">Mentor Coordinator</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Team Member"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Daniel Osei</h3>
                <p className="text-red-600">Operations Manager</p>
              </div>
            </AnimatedSection>
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
