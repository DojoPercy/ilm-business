import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Lightbulb, Zap, Leaf, Database } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function ResearchPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">R&D in AI and Renewable Energy</h1>
              <p className="text-xl text-gray-300">Pioneering Technological Advancement Across Africa</p>
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
                  At Illuminate Africa, we're at the forefront of driving technological advancement. Our Research and
                  Development (R&D) division specializes in cutting-edge innovations in Artificial Intelligence (AI) and
                  Renewable Energy.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We're proud to announce our partnership with RAIL (Research and Innovation in Artificial Intelligence
                  and Renewable Energy Laboratory) at the Kwame Nkrumah University of Science and Technology. This
                  collaboration allows us to leverage the expertise of leading researchers and cutting-edge facilities
                  to pioneer groundbreaking solutions.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Together with RAIL, we collaborate with businesses and researchers to explore new frontiers, develop
                  sustainable solutions, and create a positive impact on the environment. Whether you're interested in
                  AI-driven applications or renewable energy solutions, our R&D team is dedicated to pushing the
                  boundaries of innovation in Africa.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="R&D in AI and Renewable Energy"
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
                    <Lightbulb className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">AI Research & Development</h3>
                  <p className="text-gray-700">
                    Cutting-edge research and development in artificial intelligence applications tailored for African
                    contexts and challenges.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Machine learning solutions for business optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Natural language processing for African languages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Computer vision applications for agriculture and healthcare</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Renewable Energy Solutions</h3>
                  <p className="text-gray-700">
                    Innovative research and practical applications in renewable energy technologies adapted for African
                    environments and needs.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Solar energy optimization for diverse African climates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Micro-grid solutions for rural electrification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Energy storage innovations for intermittent power challenges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">AI-Powered Energy Management</h3>
                  <p className="text-gray-700">
                    Integration of AI and renewable energy technologies to create intelligent energy management systems
                    for businesses and communities.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Predictive maintenance for renewable energy systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Smart grid optimization algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Energy consumption forecasting and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="flex">
                <div className="mr-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Database className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Research Partnerships</h3>
                  <p className="text-gray-700">
                    Collaborative research opportunities with our academic and industry partners to develop innovative
                    solutions for your specific challenges.
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Access to RAIL's research facilities and expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Joint research project development and funding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Knowledge transfer and capacity building</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Partnership with RAIL</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <AnimatedSection animation="slide-in-left" delay={200}>
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="RAIL Laboratory"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={300}>
              <div>
                <h3 className="text-2xl font-bold mb-4">Research and Innovation in AI and Renewable Energy Laboratory</h3>
                <p className="text-gray-700 mb-4">
                  Our strategic partnership with RAIL at Kwame Nkrumah University of Science and Technology enhances our
                  commitment to staying at the forefront of technological advancements.
                </p>
                <p className="text-gray-700 mb-4">
                  This collaboration brings together academic expertise, industry knowledge, and practical application
                  to develop solutions that address Africa's unique challenges and opportunities in AI and renewable
                  energy.
                </p>
                <p className="text-gray-700 mb-4">
                  Through this partnership, we ensure that we can deliver the most innovative and impactful solutions
                  to our clients and partners across the continent.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Innovation in Action</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="AI in Agriculture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AI-Powered Crop Disease Detection</h3>
                  <p className="text-gray-600 mb-4">
                    We developed a mobile application using computer vision and machine learning to help farmers
                    identify crop diseases early, resulting in a 40% reduction in crop losses for participating
                    communities.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-amber-100 px-3 py-1 rounded-full">Computer Vision</div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full">Agriculture</div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full">Mobile App</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Renewable Energy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Smart Micro-Grid for Rural Communities</h3>
                  <p className="text-gray-600 mb-4">
                    Our team designed and implemented an AI-optimized solar micro-grid system that provides reliable
                    electricity to rural communities, increasing energy access while reducing operational costs by 35%.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-amber-100 px-3 py-1 rounded-full">Solar Energy</div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full">Smart Grid</div>
                    <div className="bg-amber-100 px-3 py-1 rounded-full">Rural Development</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate with Us?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're looking to leverage AI for business optimization or explore renewable energy solutions,
              our R&D team is ready to collaborate with you on groundbreaking innovations.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white" asChild>
                <Link href="/contact">Discuss Your R&D Needs</Link>
              </Button>\
