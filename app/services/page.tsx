import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, CheckCircle, Zap, Lightbulb, Heart, DollarSign } from "lucide-react"
import { AnimatedSection } from "@/components/animated-sections-about"

export default function ServicesPage() {
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
                   Our Services
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

      {/* Company Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Focus</h2>
            <p className="text-lg text-gray-700 mb-6">
              Illuminate Africa is dedicated to propelling Africa's Businesses towards accelerated growth, fostering
              innovation and advocating for gender equality. At Illuminate Africa, our Mission is to empower businesses
              to soar to new heights.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We are dedicated to working with businesses that have already taken flight and are now poised for
              exponential growth, as well as promising start-ups in the Tech Ecosystem. Our goal is to accelerate their
              product offerings, increase their user base, and unlock multiple avenues for raising capital.
            </p>
            <p className="text-lg text-gray-700">
              Uniquely from traditional accelerators that cater primarily to startups at various stages, Illuminate
              Africa specializes in nurturing established businesses with a proven track record in addition to
              discovering potential start-ups across the continent. We understand that the path to success is never a
              straight line, and we are here to help these companies reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 section-heading">What We Offer</h2>
            <p className="text-lg text-gray-700">
              Illuminate Africa offers a comprehensive suite of services designed to help businesses navigate the
              complexities of African markets and achieve sustainable growth. Our team of experts brings deep local
              knowledge and global best practices to every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Upanuzi Accelerator</h3>
                <p className="text-gray-600 mb-4">
                  We offer a comprehensive ecosystem that equips your business with the tools and support needed to
                  achieve significant progress in a short timeframe.
                </p>
                <Link
                  href="/upanuzi"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="service-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Tailored to help you navigate the complexities of your industry effectively. We provide strategic
                  insights, market research, and customized business plans.
                </p>
                <Link
                  href="/services/business-development"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="service-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">R&D in AI and Renewable Energy</h3>
                <p className="text-gray-600 mb-4">
                  Our Research and Development division specializes in cutting-edge innovations in Artificial
                  Intelligence and Renewable Energy technologies.
                </p>
                <Link
                  href="/services/research-development"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="service-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">CSR Advisory</h3>
                <p className="text-gray-600 mb-4">
                  Our CSR Advisory services assist corporations in developing and implementing effective CSR strategies
                  that create meaningful impact on communities.
                </p>
                <Link
                  href="/services/csr-advisory"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="service-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nikela Fund</h3>
                <p className="text-gray-600 mb-4">
                  An investment fund designed to bring together investors, high-growth businesses, and Impact Financiers
                  to fuel innovation across Africa.
                </p>
                <Link
                  href="/nikela-fund"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upanuzi Accelerator Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Upanuzi Accelerator</h2>
              <p className="text-lg text-gray-700 mb-4">
                Upanuzi is more than an accelerator; it's a transformative service designed to empower established
                businesses aiming to scale and accelerate their growth.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We cater to businesses at different growth stages, from well-established to those in early phases. Our
                primary objective is to help your business reach a dramatically improved state within a three-month
                timeframe.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Investment Support: $100,000 in exchange for either debt or equity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customized Guidance with dedicated advisors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ubuntu: Digital connection to fellow founders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Events, Networking, and Post-Acceleration Support</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/upanuzi">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/upanuzi.jpg"
                alt="Upanuzi Accelerator"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Consulting Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/images/hero-consultation.jpeg"
                alt="Business Consulting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Business Consulting</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our Business Consulting Services provide invaluable strategic insights, thorough market research, and
                customized business plans to help you navigate the complexities of your industry effectively.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We empower you to make informed decisions, address challenges proactively, and position your business
                for sustained success.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Market Entry Strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Market Scalability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Business Restructuring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Export & Imports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Talent Recruitment</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/services/business-development">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">R&D in AI and Renewable Energy</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Illuminate Africa, we're at the forefront of driving technological advancement. Our Research and
                Development (R&D) division specializes in cutting-edge innovations in Artificial Intelligence (AI) and
                Renewable Energy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We're proud to announce our partnership with RAIL (Research and Innovation in Artificial Intelligence
                and Renewable Energy Laboratory) at the Kwame Nkrumah University of Science and Technology. This
                collaboration allows us to leverage the expertise of leading researchers and cutting-edge facilities to
                pioneer groundbreaking solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Together with RAIL, we collaborate with businesses and researchers to explore new frontiers, develop
                sustainable solutions, and create a positive impact on the environment. Whether you're interested in
                AI-driven applications or renewable energy solutions, our R&D team is dedicated to pushing the
                boundaries of innovation in Africa.
              </p>
              <Button asChild>
                <Link href="/services/research-development">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/ai.jpeg"
                alt="R&D in AI and Renewable Energy"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CSR Advisory Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="CSR Advisory"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 section-heading-left">CSR Advisory</h2>
              <p className="text-lg text-gray-700 mb-4">
                Corporate Social Responsibility (CSR) is not just about profit; it's about making a positive impact on
                society. Our CSR Advisory services assist Corporations in developing and implementing effective CSR
                strategies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We help you align your corporate values and objectives with initiatives that create a meaningful and
                lasting impact on the communities you serve. From sustainability initiatives to community engagement
                programs, we'll work with you to ensure your business contributes positively to society while also
                benefiting your bottom line.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This partnership enhances our commitment to staying at the forefront of technological advancements,
                ensuring that we can deliver the most innovative and impactful solutions to our clients and partners
                across the continent.
              </p>
              <Button asChild>
                <Link href="/services/csr-advisory">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nikela Fund Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Nikela Fund</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Illuminate Africa, we are proud to introduce a groundbreaking initiative that's set to transform the
                African business landscape - The Nikela Fund. This remarkable fund, in partnership with SBINC Capital,
                is designed to bring together investors, high-growth businesses, and Impact Financiers to fuel the next
                wave of innovation and economic development across the continent.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The Nikela Fund is a unique investment vehicle established with the goal of accelerating the growth of
                promising businesses in Africa. Named after the Swahili word for "spark," Nikela embodies our commitment
                to ignite progress and positive change in the region.
              </p>
              <h3 className="text-xl font-bold mb-3">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Open to All Investors: Individual investors, family offices, or corporate entities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>High Growth Focus: Identifying and nurturing high-growth businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Impact Financiers: Special window for socially responsible investors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Strategic Guidance: Support throughout the investment process</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/nikela-fund">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Nikela Fund"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-60">
                <Image
                  src="/pitch.jpg"
                  alt="DeveloPPP Ventures"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">DeveloPPP Ventures Ghana Pitch 2024</h3>
                <p className="text-gray-600 mb-4">
                  The develoPPP project, funded by the German Federal Ministry for Economic Cooperation and Development
                  (BMZ) and implemented by GIZ in collaboration with partners such as Greentech, SCIO, and ILM Africa
                  Consult, was designed to support the growth and expansion of startups in various sectors.
                </p>
                <p className="text-gray-600 mb-4">
                  The project aimed to empower 5 to 7 startups by providing them with the necessary funding, resources,
                  and mentorship to scale their businesses and make a significant impact on the economy.
                </p>
                <Link
                  href="/projects/developpp-ventures"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-60">
                <Image
                  src="/accelerate.jpg"
                  alt="Bolt Accelerator"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Bolt Accelerator</h3>
                <p className="text-gray-600 mb-4">
                  The BOLT Accelerator, a collaborative initiative backed by BOLT and partners like The Nest (Nigeria)
                  and ILM Africa Consult, was established to empower startups across diverse industries.
                </p>
                <p className="text-gray-600 mb-4">
                  The program aimed to nurture 10 promising ventures by providing them with €2000 seed funding,
                  resources, and mentorship, enabling them to scale their operations and contribute significantly to the
                  transportation sector and the broader economy.
                </p>
                <Link
                  href="/projects/bolt-accelerator"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/gyimah.png"
                  alt="Emmanuel Gyimah"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Emmanuel Gyimah</h3>
              <p className="text-amber-600">Director, Cofounder</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/maurice.png"
                  alt="Maurice Cashinco"
                  width={128}
                  height={128}
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-bold text-lg">Maurice Cashinco</h3>
              <p className="text-amber-600">Executive Director, Cofounder</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/kelle.png"
                  alt="Katherine Kellein"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Katherine Kellein</h3>
              <p className="text-amber-600">Management</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/chelseapro.png"
                  alt="Chelsea Kowovi"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Chelsea Kowovi</h3>
              <p className="text-amber-600">Technical Lead</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/obed.png"
                  alt="Obed Lamptey"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Obed Lamptey</h3>
              <p className="text-amber-600">Creative Lead</p>
            </div>

            


          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/about#team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Business Growth?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help you achieve your goals in African markets.
          </p>
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
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
