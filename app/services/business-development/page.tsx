import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function BusinessDevelopmentPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Consulting</h1>
              <p className="text-xl text-gray-300">Strategic Growth Solutions for African Markets</p>
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
                  Our Business Consulting Services provide invaluable strategic insights, thorough market research, and
                  customized business plans to help you navigate the complexities of your industry effectively.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We empower you to make informed decisions, address challenges proactively, and position your business
                  for sustained success in African markets and beyond.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  With deep local knowledge and extensive networks across the continent, we provide tailored solutions
                  that address your specific business challenges and opportunities.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Business Consulting Services"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">What We Offer</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-up" delay={100}>
              <div>
                <h3 className="text-xl font-bold mb-4">Market Entry Strategy</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive support for businesses looking to enter or expand in African markets, including market
                  assessment, opportunity identification, and entry mode selection.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Market assessment and opportunity identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Competitive landscape analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entry mode selection and planning</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div>
                <h3 className="text-xl font-bold mb-4">Market Scalability</h3>
                <p className="text-gray-700 mb-4">
                  Strategic review and refinement of your business model to maximize performance and scale operations
                  across African markets.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Revenue model assessment and enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cost structure optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Growth strategy development</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div>
                <h3 className="text-xl font-bold mb-4">Business Restructuring</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive analysis and implementation of organizational changes to improve efficiency,
                  profitability, and competitive positioning.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Operational efficiency improvements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Organizational structure optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Process reengineering</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div>
                <h3 className="text-xl font-bold mb-4">Export & Imports</h3>
                <p className="text-gray-700 mb-4">
                  Expert guidance on navigating international trade regulations, logistics, and market access for
                  businesses looking to expand their import/export operations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Trade compliance and regulatory guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Supply chain optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Market access strategies</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={500}>
              <div>
                <h3 className="text-xl font-bold mb-4">Talent Recruitment</h3>
                <p className="text-gray-700 mb-4">
                  Strategic talent acquisition and management services to help businesses build high-performing teams
                  that drive growth and innovation.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Talent needs assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Recruitment strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Onboarding and retention planning</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Approach</h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                <AnimatedSection
                  animation="slide-up"
                  delay={100}
                  className="flex flex-col items-center text-center md:w-1/4"
                >
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Discover</h3>
                  <p className="text-sm text-gray-600">
                    In-depth assessment of your business, goals, and the market landscape
                  </p>
                </AnimatedSection>

                <div className="hidden md:block w-full h-0.5 bg-red-200 flex-grow mt-8"></div>

                <AnimatedSection
                  animation="slide-up"
                  delay={200}
                  className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0"
                >
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Design</h3>
                  <p className="text-sm text-gray-600">Development of tailored strategies and action plans</p>
                </AnimatedSection>

                <div className="hidden md:block w-full h-0.5 bg-red-200 flex-grow mt-8"></div>

                <AnimatedSection
                  animation="slide-up"
                  delay={300}
                  className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0"
                >
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Implement</h3>
                  <p className="text-sm text-gray-600">Execution support and guidance throughout implementation</p>
                </AnimatedSection>

                <div className="hidden md:block w-full h-0.5 bg-red-200 flex-grow mt-8"></div>

                <AnimatedSection
                  animation="slide-up"
                  delay={400}
                  className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0"
                >
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Optimize</h3>
                  <p className="text-sm text-gray-600">Continuous monitoring, evaluation, and refinement</p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-red-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Business Growth?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our business consulting services can help you achieve your goals in
              African markets.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
                asChild
              >
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
