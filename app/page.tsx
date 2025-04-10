import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart3, Globe, Briefcase, Users, Award } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-24 pt-32 hero-content">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Accelerating African Business Growth
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-xl text-gray-200 mb-8">
                Delivering innovative, timely, and cost-effective business solutions to clients in Africa and beyond.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
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
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/20" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Who We Are</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-lg text-gray-700">
                Illuminate Africa (ILM) is a leading African brand in logistics, trade, and business support services.
                With a deep understanding of the African business landscape and strong networks with government and
                private sectors, we serve as a one-stop shop for businesses looking to thrive in Africa and beyond.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={400}>
              <Button className="mt-8" variant="outline" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Our Services</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We offer comprehensive solutions to help businesses navigate the African market and achieve sustainable
                growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 stagger-animation">
            <AnimatedSection animation="slide-up" delay={100}>
              <Card className="service-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Upanuzi Accelerator</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive program designed to support and scale promising African businesses through funding,
                    mentorship, and resources.
                  </p>
                  <Link
                    href="/upanuzi"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <Card className="service-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Business Consulting</h3>
                  <p className="text-gray-600 mb-4">
                    Strategic business planning and support for startups and SMEs, including market entry strategies and
                    capacity building.
                  </p>
                  <Link
                    href="/services/business-development"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <Card className="service-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">R&D Services</h3>
                  <p className="text-gray-600 mb-4">
                    Research and development services to help businesses innovate and stay competitive in the rapidly
                    evolving African market.
                  </p>
                  <Link
                    href="/services/research"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <Card className="service-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">CSR Advisory</h3>
                  <p className="text-gray-600 mb-4">
                    Corporate social responsibility advisory services to help businesses make a positive impact in their
                    communities.
                  </p>
                  <Link
                    href="/services/csr"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={500}>
              <Card className="service-card border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Nikela Fund</h3>
                  <p className="text-gray-600 mb-4">
                    An investment fund focused on supporting high-growth African businesses with capital and strategic
                    guidance.
                  </p>
                  <Link
                    href="/nikela-fund"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={600}>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nikela Fund Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading-left">Nikela Fund</h2>
                <p className="text-lg mb-6">
                  The Nikela Fund is our investment vehicle designed to support high-growth African businesses. We
                  provide not just capital, but strategic guidance and access to our extensive network.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-amber-500 flex-shrink-0 mt-1"></div>
                    <span className="ml-3">Open to all investors interested in the African market</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-amber-500 flex-shrink-0 mt-1"></div>
                    <span className="ml-3">Focus on high-growth sectors with significant impact potential</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-amber-500 flex-shrink-0 mt-1"></div>
                    <span className="ml-3">Comprehensive support beyond just financial investment</span>
                  </li>
                </ul>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black" asChild>
                  <Link href="/nikela-fund">Learn About Investing</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-6 rounded-lg">
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-500">
                        <AnimatedCounter end={5} suffix="M+" />
                      </h3>
                      <p className="text-gray-300">Capital Deployed</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-500">
                        <AnimatedCounter end={20} suffix="+" />
                      </h3>
                      <p className="text-gray-300">Portfolio Companies</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-500">
                        <AnimatedCounter end={500} suffix="+" />
                      </h3>
                      <p className="text-gray-300">Jobs Created</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-500">
                        <AnimatedCounter end={12} suffix="+" />
                      </h3>
                      <p className="text-gray-300">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Impact & Testimonials</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                See how we've helped businesses across Africa achieve their goals and drive sustainable growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <AnimatedSection animation="zoom-in" delay={100}>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-600 mb-2">
                  <AnimatedCounter end={10} suffix="M+" />
                </h3>
                <p className="text-gray-700">Invested</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={200}>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-600 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </h3>
                <p className="text-gray-700">Businesses Supported</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={300}>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-600 mb-2">
                  <AnimatedCounter end={1000} suffix="+" />
                </h3>
                <p className="text-gray-700">Jobs Created</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={400}>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-600 mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </h3>
                <p className="text-gray-700">Countries</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={500}>
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "Illuminate Africa's business development services were instrumental in helping us scale our operations
                across three African countries. Their deep understanding of local markets and strong network connections
                made all the difference."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">CEO, TechGrow Africa</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Featured Insights</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Stay updated with our latest articles, research, and market insights.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-in-left" delay={200}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="African Business Growth"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-amber-600 font-medium mb-2">Market Insights</p>
                  <h3 className="text-xl font-bold mb-2">
                    The Future of E-Commerce in Africa: Trends and Opportunities
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Exploring the rapidly evolving e-commerce landscape across African markets and identifying key
                    growth opportunities.
                  </p>
                  <Link
                    href="/insights/ecommerce-africa"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={300}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Investment in Africa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-amber-600 font-medium mb-2">Investment</p>
                  <h3 className="text-xl font-bold mb-2">
                    Impact Investing: Creating Sustainable Value in African Markets
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How strategic impact investments are driving both financial returns and positive social change
                    across the continent.
                  </p>
                  <Link
                    href="/insights/impact-investing"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={400}>
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/insights">View All Insights</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Business?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're looking to expand your business, invest in African markets, or need strategic guidance,
              we're here to help.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={400}>
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
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
