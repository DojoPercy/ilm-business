import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Globe, FileText, Scale, Building } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function TradeFacilitationPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Trade Facilitation</h1>
              <p className="text-xl text-gray-300">Enabling Seamless Cross-Border Business in Africa</p>
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
                  Our Trade Facilitation services provide comprehensive support for businesses engaging in cross-border
                  trade across Africa, helping you navigate complex regulations, customs procedures, and market access
                  requirements.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  With our deep understanding of African trade agreements, customs processes, and regulatory frameworks,
                  we enable your business to move goods efficiently across borders while ensuring full compliance with
                  all applicable laws and regulations.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Whether you're looking to export products to new African markets or streamline your existing
                  cross-border operations, our team of trade experts will develop tailored solutions that reduce costs,
                  minimize delays, and maximize opportunities.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Trade Facilitation"
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
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Customs Documentation & Compliance</h3>
                  <p className="text-gray-700">
                    Expert assistance with all aspects of customs documentation and regulatory compliance to ensure
                    smooth clearance of goods across African borders.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Customs declaration preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Compliance with import/export regulations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Trade Agreement Advisory</h3>
                  <p className="text-gray-700">
                    Strategic guidance on leveraging African trade agreements such as AfCFTA to maximize market access
                    and minimize tariffs for your products.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Trade agreement analysis and application</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Preferential tariff qualification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Regulatory Navigation</h3>
                  <p className="text-gray-700">
                    Expert guidance on navigating the complex regulatory landscape for product standards,
                    certifications, and market access requirements across African countries.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Product certification and standards compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Regulatory approval processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Building className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Trade Finance Solutions</h3>
                  <p className="text-gray-700">
                    Access to innovative trade finance solutions and partnerships to support your cross-border trade
                    activities and manage associated risks.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Trade finance options assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Financial institution partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Success Story</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="md:grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Case Study" fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">Agricultural Exports Expansion</h3>
                  <p className="text-gray-700 mb-4">
                    We helped a Ghanaian agricultural producer expand exports to five new African markets by navigating
                    complex regulatory requirements and optimizing customs processes, resulting in a 200% increase in
                    export volume within 12 months.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-amber-100 px-3 py-1 rounded-full">
                      <span className="font-semibold">5</span> New Markets
                    </div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full">
                      <span className="font-semibold">200%</span> Export Growth
                    </div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full">
                      <span className="font-semibold">30%</span> Cost Reduction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Approach</h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-amber-600">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4">Analyze</h3>
                  <p className="text-gray-700">
                    We assess your current trade operations and identify opportunities and challenges in your target
                    markets.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4">Strategize</h3>
                  <p className="text-gray-700">
                    We develop tailored trade facilitation strategies that align with your business objectives and
                    market realities.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4">Implement</h3>
                  <p className="text-gray-700">
                    We execute the strategy with meticulous attention to detail, ensuring compliance and efficiency at
                    every step.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-amber-600">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4">Optimize</h3>
                  <p className="text-gray-700">
                    We continuously monitor performance and refine processes to achieve optimal results and adapt to
                    changing conditions.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Expand Your Cross-Border Trade?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our trade facilitation services can help you navigate the complexities of
              African markets and unlock new growth opportunities.
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
