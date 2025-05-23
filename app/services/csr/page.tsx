import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Leaf, Users, Globe, Building, Target, Award } from "lucide-react"
import { AnimatedSection } from "@/components/animated-sections-about"

export default function CSRAdvisoryPage() {
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
              CSR Advisory
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Corporate Social
              <span className="block">Responsibility</span>
              <span className="block h-1 w-24 bg-brand-red mt-6"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Making a positive impact on society while benefiting your bottom line through effective CSR strategies
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Our CSR Advisory</h2>
              <p className="text-lg text-gray-700 mb-4">
                Corporate Social Responsibility (CSR) is not just about profit; it's about making a positive impact on
                society. Our CSR Advisory services assist corporations in developing and implementing effective CSR
                strategies.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We help you align your corporate values and objectives with initiatives that create a meaningful and
                lasting impact on the communities you serve.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                From sustainability initiatives to community engagement programs, we'll work with you to ensure your
                business contributes positively to society while also benefiting your bottom line.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/csr.jpg"
                alt="CSR Advisory Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CSR Focus Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">CSR Focus Areas</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability Initiatives</h3>
                <p className="text-gray-600">
                  Environmental sustainability programs including carbon footprint reduction, renewable energy adoption,
                  and sustainable business practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                <p className="text-gray-600">
                  Community development programs, local partnerships, and initiatives that create positive social impact
                  in the communities where you operate.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Social Impact Programs</h3>
                <p className="text-gray-600">
                  Healthcare, education, and social welfare initiatives that address critical societal needs and create
                  lasting positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ethical Business Practices</h3>
                <p className="text-gray-600">
                  Implementation of ethical business standards, fair trade practices, and responsible supply chain
                  management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Impact Measurement</h3>
                <p className="text-gray-600">
                  Development of metrics and reporting systems to measure and communicate the impact of your CSR
                  initiatives effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Stakeholder Engagement</h3>
                <p className="text-gray-600">
                  Strategic engagement with stakeholders including employees, customers, investors, and community
                  leaders to build strong CSR partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our CSR Approach</h2>

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
                    Evaluate current CSR practices and identify opportunities for impact
                  </p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Align</h3>
                  <p className="text-sm text-gray-600">
                    Align CSR initiatives with corporate values and business objectives
                  </p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Implement</h3>
                  <p className="text-sm text-gray-600">Execute CSR programs with clear goals and measurable outcomes</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Measure</h3>
                  <p className="text-sm text-gray-600">Monitor impact and communicate results to stakeholders</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4">Benefits of Effective CSR</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Enhanced Reputation:</span> Build trust and credibility with
                    stakeholders and the public
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Employee Engagement:</span> Attract and retain talent through
                    meaningful purpose-driven work
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Risk Management:</span> Mitigate social and environmental risks
                    while ensuring compliance
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Business Value:</span> Create shared value that benefits both
                    society and your bottom line
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
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Partner With Us</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Corporations</h3>
              <p className="text-gray-700 mb-6">
                Whether you're starting your CSR journey or looking to enhance existing programs, we help you develop
                strategies that create meaningful impact while supporting business objectives.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Start Your CSR Journey</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Organizations</h3>
              <p className="text-gray-700 mb-6">
                Partner with us to develop comprehensive CSR frameworks that align with international standards and
                create lasting positive change in African communities.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Positive Impact?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            This partnership enhances our commitment to staying at the forefront of technological advancements, ensuring
            that we can deliver the most innovative and impactful solutions to our clients and partners across the
            continent.
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
