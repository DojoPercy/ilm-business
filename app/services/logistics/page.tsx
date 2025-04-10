import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Truck, Package, BarChart3, Globe } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function LogisticsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Logistics Management</h1>
              <p className="text-xl text-gray-300">Optimizing Supply Chains Across Africa</p>
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
                  Our logistics management services provide end-to-end solutions for businesses operating in Africa,
                  helping you navigate the unique challenges of the continent's diverse markets.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  With our deep understanding of local infrastructure, regulations, and market dynamics, we optimize
                  your supply chain to ensure efficient, cost-effective, and reliable movement of goods across borders.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Whether you're looking to streamline existing operations or establish new distribution networks, our
                  team of logistics experts will develop tailored solutions that meet your specific business needs.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Logistics Management"
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
                    <Truck className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Supply Chain Optimization</h3>
                  <p className="text-gray-700">
                    Comprehensive analysis and redesign of your supply chain to improve efficiency, reduce costs, and
                    enhance reliability across African markets.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>End-to-end supply chain mapping and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Process optimization and cost reduction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Package className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Warehousing & Distribution</h3>
                  <p className="text-gray-700">
                    Strategic warehousing solutions and distribution network design to ensure your products reach
                    customers efficiently across diverse African markets.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Warehouse location strategy and management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Distribution network design and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Cross-Border Logistics</h3>
                  <p className="text-gray-700">
                    Expert guidance on navigating the complexities of cross-border trade in Africa, including customs
                    clearance, documentation, and regulatory compliance.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Customs documentation and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cross-border transportation management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Logistics Technology & Analytics</h3>
                  <p className="text-gray-700">
                    Implementation of cutting-edge logistics technologies and data analytics to enhance visibility,
                    tracking, and decision-making across your supply chain.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Supply chain visibility solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Performance metrics and analytics</span>
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
                  <h3 className="text-xl font-bold mb-4">Pharmaceutical Distribution Network Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    We redesigned the distribution network for a leading pharmaceutical company operating across East
                    Africa, reducing costs by 25% and improving delivery times by 40%.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-amber-100 px-3 py-1 rounded-full">
                      <span className="font-semibold">25%</span> Cost Reduction
                    </div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full">
                      <span className="font-semibold">40%</span> Faster Delivery
                    </div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full">
                      <span className="font-semibold">5</span> Countries
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
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-amber-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Assess</h3>
                  <p className="text-gray-700">
                    We conduct a comprehensive assessment of your current logistics operations, identifying bottlenecks,
                    inefficiencies, and opportunities for improvement.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Design</h3>
                  <p className="text-gray-700">
                    Based on our assessment, we design tailored logistics solutions that address your specific
                    challenges and align with your business objectives.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Implement & Optimize</h3>
                  <p className="text-gray-700">
                    We support you through implementation and continuously monitor performance to ensure optimal
                    results, making adjustments as needed.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Logistics Operations?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our logistics management services can help you overcome challenges and
              achieve greater efficiency in African markets.
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
