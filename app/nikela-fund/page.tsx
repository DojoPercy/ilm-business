import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BarChart3, Globe, Users, TrendingUp, DollarSign } from "lucide-react"
import { AnimatedSection } from "@/components/animated-sections-about"

export default function NikelaFundPage() {
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
                    Nikela Fund
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                    Illuminate Africa
                    <span className="block h-1 w-24 bg-brand-red mt-6"></span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                    Propelling Africa's Businesses Forward Through Innovation, Investment, and Strategic Support
                  </p>
                </AnimatedSection>
              </div>
            </section>

      {/* What is Nikela Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">What is Nikela?</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Illuminate Africa, we are proud to introduce a groundbreaking initiative that's set to transform the
                African business landscape - The Nikela Fund.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This remarkable fund, in partnership with SBINC Capital, is designed to bring together investors,
                high-growth businesses, and Impact Financiers to fuel the next wave of innovation and economic
                development across the continent.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The Nikela Fund is a unique investment vehicle established with the goal of accelerating the growth of
                promising businesses in Africa. Named after the Swahili word for "spark," Nikela embodies our commitment
                to ignite progress and positive change in the region.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/nikela.jpg"
                alt="Nikela Fund Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Key Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Open to All Investors</h3>
               <p className="text-gray-600 mb-4">
  The Nikela Fund welcomes all who believe in collective action and are committed to supporting African businesses and economic growth.
</p>
<p className="text-gray-600">
  Whether you're an individual, family office, or corporate entity, there's a place for you in Nikela.
</p>

              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">High Growth Focus</h3>
                <p className="text-gray-600 mb-4">
  Nikela partners with SBINC Capital to support high-growth businesses with lasting impact, providing the capital, expertise, and mentorship they need to scale.
</p>

              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Impact Financiers</h3>
                <p className="text-gray-600 mb-4">
  Nikela offers a dedicated window for Impact Financiers, enabling socially responsible investors to support ventures that drive both financial returns and positive societal change.
</p>

              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Guidance</h3>
               <p className="text-gray-600 mb-4">
  Illuminate Africa supports every stage of the investment process—from due diligence to post-investment—to ensure each Nikela Fund investment is set up for success.
</p>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Investment Approach</h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                <div className="flex flex-col items-center text-center md:w-1/5">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Discover</h3>
                  <p className="text-sm text-gray-600">Identifying promising businesses across Africa</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/5 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Evaluate</h3>
                  <p className="text-sm text-gray-600">Comprehensive assessment of business potential</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/5 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Invest</h3>
                  <p className="text-sm text-gray-600">Strategic capital deployment</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/5 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Support</h3>
                  <p className="text-sm text-gray-600">Ongoing mentorship and strategic guidance</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/5 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">5</span>
                  </div>
                  <h3 className="font-bold mb-2">Scale</h3>
                  <p className="text-sm text-gray-600">Accelerating growth and maximizing impact</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4">Our Investment Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Innovation-Driven:</span> Businesses leveraging technology and
                    innovative approaches to solve African challenges
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Scalable Impact:</span> Ventures with potential for significant
                    growth and positive social or environmental impact
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Strong Leadership:</span> Teams with the vision, expertise, and
                    determination to execute effectively
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Regional Relevance:</span> Solutions tailored to African markets
                    with potential for regional or continental expansion
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">How to Get Involved</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Investors</h3>
              <p className="text-gray-700 mb-6">
                If you're an investor looking to make a meaningful impact in Africa's business ecosystem, or if you
                represent an organization focused on impact investing, we invite you to join the Nikela Fund.
              </p>
              <p className="text-gray-700 mb-6">
                Together, we can be the spark that propels African businesses to new heights.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Connect With Us</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
              <p className="text-gray-700 mb-6">
                If you're running a high-growth business in Africa and looking for capital and strategic support to
                scale, we want to hear from you.
              </p>
              <p className="text-gray-700 mb-6">
                At Illuminate Africa, we believe in the transformative power of partnerships and collective action. The
                Nikela Fund is more than an investment opportunity; it's a vehicle for positive change.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Apply for Funding</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Impact */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision for Impact</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            The Nikela Fund aims to catalyze sustainable economic growth across Africa by supporting businesses that
            create jobs, improve livelihoods, and address critical challenges.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-amber-500 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Job Creation</h3>
              <p className="text-gray-300">Supporting businesses that generate meaningful employment opportunities</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-amber-500 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Innovation</h3>
              <p className="text-gray-300">Fostering innovative solutions to Africa's most pressing challenges</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-amber-500 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Economic Growth</h3>
              <p className="text-gray-300">Accelerating sustainable economic development across the continent</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-amber-500 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Knowledge Transfer</h3>
              <p className="text-gray-300">Facilitating the exchange of expertise and best practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Illuminating Africa's Future</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get in touch with us today to learn more about the Nikela Fund and how you can become a part of this
            exciting journey towards progress and prosperity.
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
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
