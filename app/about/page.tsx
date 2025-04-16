import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Illuminate Africa</h1>
              <p className="text-xl text-gray-300">Propelling Africa's Businesses Forward</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-3xl font-bold mb-6 section-heading-left">Our Story & Vision</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Illuminate Africa (ILM) was founded with a clear mission: to accelerate the growth of African
                  businesses and facilitate international trade and investment across the continent.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our journey began when a team of experienced professionals recognized the need for comprehensive
                  business support services that truly understand the unique challenges and opportunities of the African
                  market.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To be a leading African brand in logistics, trade, and business support services.
                  </p>

                  <h3 className="font-bold text-xl mt-6 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    Delivering innovative, timely, and cost-effective business solutions to clients in Africa and
                    beyond.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Illuminate Africa Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Impact</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <AnimatedSection animation="zoom-in" delay={100}>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={10} suffix="M+" />
                </h3>
                <p className="text-gray-700">Capital Deployed</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={200}>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </h3>
                <p className="text-gray-700">Businesses Supported</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={300}>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={1000} suffix="+" />
                </h3>
                <p className="text-gray-700">Jobs Created</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={400}>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </h3>
                <p className="text-gray-700">Countries</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in" delay={500}>
              <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
            </AnimatedSection>
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

              <div className="grid grid-cols-1 gap-12">
                <AnimatedSection animation="slide-in-left" delay={100}>
                  <div className="relative pl-12 md:pl-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right md:pr-12">
                        <h4 className="font-bold text-xl mb-2">2018</h4>
                        <p className="text-gray-700">Illuminate Africa founded with a focus on business consulting</p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12"></div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-right" delay={200}>
                  <div className="relative pl-12 md:pl-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right md:pr-12"></div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12">
                        <h4 className="font-bold text-xl mb-2">2020</h4>
                        <p className="text-gray-700">
                          Expanded services to include logistics management and trade facilitation
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-left" delay={300}>
                  <div className="relative pl-12 md:pl-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right md:pr-12">
                        <h4 className="font-bold text-xl mb-2">2021</h4>
                        <p className="text-gray-700">Launched the Upanuzi Accelerator program</p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12"></div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-right" delay={400}>
                  <div className="relative pl-12 md:pl-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right md:pr-12"></div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12">
                        <h4 className="font-bold text-xl mb-2">2022</h4>
                        <p className="text-gray-700">Established the Nikela Fund in partnership with SBINC Capital</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-left" delay={500}>
                  <div className="relative pl-12 md:pl-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right md:pr-12">
                        <h4 className="font-bold text-xl mb-2">2023</h4>
                        <p className="text-gray-700">Expanded operations to 15+ countries across Africa</p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                      <div className="mt-4 md:mt-0 md:pl-12"></div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Approach</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Understand</h3>
                <p className="text-gray-700">
                  We take time to deeply understand each client's unique needs, challenges, and goals within the African
                  context.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovate</h3>
                <p className="text-gray-700">
                  We develop tailored, innovative solutions that leverage our expertise and network across the
                  continent.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Implement</h3>
                <p className="text-gray-700">
                  We execute with precision and provide ongoing support to ensure sustainable success and growth.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={400}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-lg text-gray-700">
                Our methodology combines local expertise with global best practices, ensuring that our clients receive
                solutions that are both innovative and contextually appropriate for African markets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Team</h2>
          </AnimatedSection>

          <div className="mb-16">
            <AnimatedSection animation="fade-in" delay={100}>
              <h3 className="text-2xl font-bold mb-8 text-center">Leadership</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Maurice Cashinco"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">Maurice Cashinco</h4>
                  <p className="text-red-600">Executive Director</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Emmanuel Gyimah"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">Emmanuel Gyimah</h4>
                  <p className="text-red-600">Director</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Katherine Kellein"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">Katherine Kellein</h4>
                  <p className="text-red-600">Program Director</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={500}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Chelsea Kowovi"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">Chelsea Kowovi</h4>
                  <p className="text-red-600">Tech Lead</p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="mb-16">
            <AnimatedSection animation="fade-in" delay={600}>
              <h3 className="text-2xl font-bold mb-8 text-center">Advisory Board</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedSection animation="slide-up" delay={700}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Advisory Board Member"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold">Dr. Aisha Kareem</h4>
                  <p className="text-gray-600">Finance Expert</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={800}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Advisory Board Member"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold">James Okonkwo</h4>
                  <p className="text-gray-600">Logistics Specialist</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={900}>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Advisory Board Member"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold">Sarah Mensah</h4>
                  <p className="text-gray-600">Policy Advisor</p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div>
            <AnimatedSection animation="fade-in" delay={1000}>
              <h3 className="text-2xl font-bold mb-8 text-center">Partners & Collaborators</h3>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <AnimatedSection animation="zoom-in" delay={1100}>
                <div className="bg-white p-6 rounded-lg flex items-center justify-center h-24">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Partner Logo"
                    width={160}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="zoom-in" delay={1200}>
                <div className="bg-white p-6 rounded-lg flex items-center justify-center h-24">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Partner Logo"
                    width={160}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="zoom-in" delay={1300}>
                <div className="bg-white p-6 rounded-lg flex items-center justify-center h-24">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Partner Logo"
                    width={160}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="zoom-in" delay={1400}>
                <div className="bg-white p-6 rounded-lg flex items-center justify-center h-24">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    alt="Partner Logo"
                    width={160}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who are passionate about driving growth and innovation
              across Africa.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={400}>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-black" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
