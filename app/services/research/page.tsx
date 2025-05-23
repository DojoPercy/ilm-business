import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Cpu, Leaf, Building, Users } from "lucide-react"
import { AnimatedSection } from "@/components/animated-sections-about"

export default function RDAIRenewablePage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-brand-red/20 text-amber-400 rounded-full text-sm font-medium mb-6">
              R&D Innovation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              R&D in AI and
              <span className="block">Renewable Energy</span>
              <span className="block h-1 w-24 bg-brand-red mt-6"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              At the forefront of driving technological advancement through cutting-edge innovations in AI and Renewable
              Energy
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Our R&D Division</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Illuminate Africa, we're at the forefront of driving technological advancement. Our Research and
                Development (R&D) division specializes in cutting-edge innovations in Artificial Intelligence (AI) and
                Renewable Energy.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We're proud to announce our partnership with RAIL (Research and Innovation in Artificial Intelligence
                and Renewable Energy Laboratory) at the Kwame Nkrumah University of Science and Technology.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This collaboration allows us to leverage the expertise of leading researchers and cutting-edge
                facilities to pioneer groundbreaking solutions in AI and Renewable Energy.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="R&D in AI and Renewable Energy"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Research & Innovation Areas</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <Cpu className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Artificial Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Developing AI-driven applications and solutions tailored to African markets and challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Machine Learning Applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Computer Vision Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Predictive Analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Renewable Energy</h3>
                <p className="text-gray-600 mb-4">
                  Pioneering sustainable energy solutions to address Africa's energy challenges and environmental needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solar Energy Systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Wind Power Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Energy Storage Technologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Smart Grid Integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership with RAIL */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/rail.png"
                alt="RAIL Partnership"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Partnership with RAIL</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our partnership with RAIL (Research and Innovation in Artificial Intelligence and Renewable Energy
                Laboratory) at the Kwame Nkrumah University of Science and Technology represents a significant milestone
                in our R&D capabilities.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This collaboration allows us to leverage the expertise of leading researchers and cutting-edge
                facilities to pioneer groundbreaking solutions in AI and Renewable Energy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Together with RAIL, we collaborate with businesses and researchers to explore new frontiers, develop
                sustainable solutions, and create a positive impact on the environment.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Learn About Partnership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our R&D Approach</h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                <div className="flex flex-col items-center text-center md:w-1/4">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Research</h3>
                  <p className="text-sm text-gray-600">
                    Identify challenges and opportunities in AI and renewable energy
                  </p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Innovate</h3>
                  <p className="text-sm text-gray-600">Develop cutting-edge solutions using latest technologies</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Collaborate</h3>
                  <p className="text-sm text-gray-600">
                    Partner with businesses and researchers for real-world applications
                  </p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Impact</h3>
                  <p className="text-sm text-gray-600">Create positive environmental and technological impact</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg mt-12 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Why Choose Our R&D Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Academic Partnership:</span> Access to world-class research
                    facilities and expertise through RAIL collaboration
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">African Focus:</span> Solutions tailored specifically for African
                    markets and challenges
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Innovation Leadership:</span> Pushing the boundaries of what's
                    possible in AI and renewable energy
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Sustainable Impact:</span> Creating solutions that benefit both
                    technology advancement and environmental sustainability
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Collaboration Opportunities</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
              <p className="text-gray-700 mb-6">
                Whether you're interested in AI-driven applications or renewable energy solutions, our R&D team is
                dedicated to pushing the boundaries of innovation in Africa.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Explore Collaboration</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Researchers</h3>
              <p className="text-gray-700 mb-6">
                Join our collaborative network of researchers and institutions working together to explore new frontiers
                and develop sustainable solutions for Africa's future.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">Join Our Network</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate with Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together with RAIL, we collaborate with businesses and researchers to explore new frontiers, develop
            sustainable solutions, and create a positive impact on the environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-amber-600" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600"
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
