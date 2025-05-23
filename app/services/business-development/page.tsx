import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BarChart3, Globe, Users, TrendingUp, Target, Building, Briefcase } from "lucide-react"
import { AnimatedSection } from "@/components/animated-sections-about"

export default function BusinessConsultingPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 text-amber-500 rounded-full text-sm font-medium mb-6">
              Business Consulting
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Strategic Business
              <span className="block">Consulting</span>
              <span className="block h-1 w-24 bg-amber-500 mt-6"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Tailored to help you navigate the complexities of your industry effectively through strategic insights and
              customized business plans
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">What We Offer</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our Business Consulting Services provide invaluable strategic insights, thorough market research, and
                customized business plans to help you navigate the complexities of your industry effectively.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We empower you to make informed decisions, address challenges proactively, and position your business
                for sustained success.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our comprehensive approach ensures that every aspect of your business strategy is aligned with your
                objectives and market realities.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Business Consulting Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Market Entry</h3>
                <p className="text-gray-600">
                  Strategic guidance for entering new markets, including market analysis, competitive positioning, and
                  entry strategy development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Market Scalability</h3>
                <p className="text-gray-600">
                  Comprehensive scalability assessments and strategic planning to help your business grow sustainably
                  across markets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Restructuring</h3>
                <p className="text-gray-600">
                  Organizational restructuring services to optimize operations, improve efficiency, and align with
                  strategic objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Export & Imports</h3>
                <p className="text-gray-600">
                  International trade consulting including export/import strategies, regulatory compliance, and market
                  expansion planning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Talent Recruitment</h3>
                <p className="text-gray-600">
                  Strategic talent acquisition and human resource consulting to build high-performing teams aligned with
                  your business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
                <p className="text-gray-600">
                  Comprehensive strategic planning services including market research, competitive analysis, and
                  business plan development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Approach</h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                <div className="flex flex-col items-center text-center md:w-1/4">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Assess</h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive analysis of your current business situation and challenges
                  </p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Strategize</h3>
                  <p className="text-sm text-gray-600">
                    Development of customized strategies aligned with your objectives
                  </p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Implement</h3>
                  <p className="text-sm text-gray-600">Guided implementation with ongoing support and monitoring</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Optimize</h3>
                  <p className="text-sm text-gray-600">Continuous improvement and optimization for sustained success</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Consulting Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Industry Expertise:</span> Deep understanding of African markets and
                    business environments
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Customized Solutions:</span> Tailored strategies that align with
                    your specific business objectives
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Proven Track Record:</span> Successful implementation across diverse
                    industries and markets
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Ongoing Support:</span> Continuous guidance throughout
                    implementation and beyond
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Get Started</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Established Businesses</h3>
              <p className="text-gray-700 mb-6">
                If you're looking to scale, enter new markets, or optimize your operations, our consulting services can
                help you navigate complex challenges and achieve sustainable growth.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Growing Companies</h3>
              <p className="text-gray-700 mb-6">
                Whether you're restructuring, expanding internationally, or building your team, we provide the strategic
                insights and practical guidance you need to succeed.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Strategy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get in touch with us today to learn how our business consulting services can help you navigate industry
            complexities and achieve sustained success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white" asChild>
              <Link href="/contact">Contact Us</Link>
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
        </div>
      </section>
    </>
  )
}
