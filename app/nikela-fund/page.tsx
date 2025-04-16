import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BarChart3, Globe, Users, TrendingUp } from "lucide-react"

export default function NikelaFundPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nikela Fund</h1>
            <p className="text-xl text-gray-300">Igniting Growth Across Africa</p>
          </div>
        </div>
      </section>

      {/* What is Nikela Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">What is Nikela?</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Nikela Fund is our investment vehicle designed to support high-growth African businesses with
                capital and strategic guidance.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                In partnership with SBINC Capital, we've created a fund that bridges the gap between promising African
                businesses and global investors seeking both financial returns and positive impact.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                "Nikela" means "to give" in several African languages, reflecting our commitment to giving businesses
                the resources they need to thrive while giving investors access to Africa's dynamic markets.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Open to All Investors</h3>
                <p className="text-gray-600 mb-4">
                  Whether you're an individual investor, family office, or institutional investor, the Nikela Fund
                  provides access to curated African investment opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Minimum investment of $10,000</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Transparent reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">High Growth Focus</h3>
                <p className="text-gray-600 mb-4">
                  We target businesses with strong growth potential across key sectors including technology,
                  agriculture, healthcare, and renewable energy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Target IRR of 20-25%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>5-7 year investment horizon</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Impact Financing Window</h3>
                <p className="text-gray-600 mb-4">
                  A dedicated portion of the fund focuses on businesses creating significant social or environmental
                  impact alongside financial returns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Measurable impact metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Aligned with SDGs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg md:col-start-2">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Guidance</h3>
                <p className="text-gray-600 mb-4">
                  Beyond capital, we provide portfolio companies with strategic support, mentorship, and access to our
                  extensive network.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hands-on board involvement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Access to global partners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Impact Metrics</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-red-500 mb-2">$5M+</h3>
              <p className="text-gray-300">Capital Deployed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-red-500 mb-2">20+</h3>
              <p className="text-gray-300">Businesses Funded</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-red-500 mb-2">500+</h3>
              <p className="text-gray-300">Jobs Created</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-red-500 mb-2">12+</h3>
              <p className="text-gray-300">Countries</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Geographic Distribution</h3>
              <div className="bg-gray-800 p-6 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-400">Interactive Map Visualization</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sector Distribution</h3>
              <div className="bg-gray-800 p-6 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-400">Interactive Chart Visualization</p>
              </div>
            </div>
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
                <div className="flex flex-col items-center text-center md:w-1/6">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Screening</h3>
                  <p className="text-sm text-gray-600">Initial assessment of business potential</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-red-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/6 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Due Diligence</h3>
                  <p className="text-sm text-gray-600">Comprehensive business evaluation</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-red-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/6 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Investment</h3>
                  <p className="text-sm text-gray-600">Capital deployment and terms</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-red-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/6 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Support</h3>
                  <p className="text-sm text-gray-600">Strategic guidance and resources</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-red-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/6 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-red-600">5</span>
                  </div>
                  <h3 className="font-bold mb-2">Exit</h3>
                  <p className="text-sm text-gray-600">Value realization and returns</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4">Investment Criteria</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Stage:</span> Post-revenue businesses with proven traction and clear
                    path to profitability
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Sectors:</span> Technology, Agriculture, Healthcare, Renewable
                    Energy, Financial Services, Education
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Geography:</span> Businesses operating in Africa, with preference
                    for those with regional expansion potential
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Team:</span> Strong management team with relevant experience and
                    demonstrated execution capability
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Investment Size:</span> $100,000 - $500,000 initial investment with
                    potential for follow-on funding
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/nikela-fund/criteria">Download Investment Criteria</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Portfolio Companies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">AgriTech Solutions</h3>
              <p className="text-sm text-gray-600">Agriculture</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">MediConnect</h3>
              <p className="text-sm text-gray-600">Healthcare</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">SolarNow</h3>
              <p className="text-sm text-gray-600">Renewable Energy</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">EduTech Africa</h3>
              <p className="text-sm text-gray-600">Education</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">FinAccess</h3>
              <p className="text-sm text-gray-600">Financial Services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">LogiTrans</h3>
              <p className="text-sm text-gray-600">Logistics</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">WasteRecycle</h3>
              <p className="text-sm text-gray-600">Waste Management</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="h-16 w-16 mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold">TechBuild</h3>
              <p className="text-sm text-gray-600">Construction Tech</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/nikela-fund/portfolio">See All Portfolio Companies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials / Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Success Stories</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-60">
                <Image src="/placeholder.svg?height=400&width=600" alt="Success Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="CEO Portrait"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">SolarNow</h3>
                    <p className="text-sm text-gray-600">Renewable Energy | Uganda</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  SolarNow expanded from 2 to 12 regions across East Africa and increased revenue by 300% within 18
                  months of Nikela Fund investment.
                </p>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-semibold">$300K</p>
                    <p className="text-gray-600">Investment</p>
                  </div>
                  <div>
                    <p className="font-semibold">120+</p>
                    <p className="text-gray-600">Jobs Created</p>
                  </div>
                  <div>
                    <p className="font-semibold">30,000+</p>
                    <p className="text-gray-600">Customers Served</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-60">
                <Image src="/placeholder.svg?height=400&width=600" alt="Success Story" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="CEO Portrait"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">MediConnect</h3>
                    <p className="text-sm text-gray-600">Healthcare | Ghana, Nigeria</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  MediConnect secured Series A funding of $2M after Nikela's initial investment and strategic guidance,
                  now serving over 200 medical facilities.
                </p>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-semibold">$250K</p>
                    <p className="text-gray-600">Investment</p>
                  </div>
                  <div>
                    <p className="font-semibold">85+</p>
                    <p className="text-gray-600">Jobs Created</p>
                  </div>
                  <div>
                    <p className="font-semibold">200+</p>
                    <p className="text-gray-600">Facilities Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Partner With Us</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">For Investors</h3>
              <p className="text-gray-700 mb-6">
                Join our community of investors who are accessing curated opportunities in Africa's fastest-growing
                markets while making a positive impact.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Access to vetted, high-potential African businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Professional fund management with local expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Transparent reporting and active portfolio management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Opportunity to participate in follow-on rounds</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/nikela-fund/invest">Invest With Us</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
              <p className="text-gray-700 mb-6">
                If you're running a high-growth business in Africa and looking for capital and strategic support to
                scale, we want to hear from you.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Investment ranging from $100,000 to $500,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Strategic guidance and hands-on support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Access to our extensive network of partners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Support for future fundraising rounds</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/nikela-fund/apply">Apply for Funding</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What is the minimum investment amount?</h3>
              <p className="text-gray-700">
                The minimum investment in the Nikela Fund is $10,000 for individual investors. For institutional
                investors, the minimum is $100,000.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What is the fund's investment horizon?</h3>
              <p className="text-gray-700">
                The Nikela Fund has a 5-7 year investment horizon, with potential for earlier liquidity events depending
                on portfolio company performance and exit opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">How do you mitigate risk in African markets?</h3>
              <p className="text-gray-700">
                We mitigate risk through thorough due diligence, diversification across sectors and geographies, active
                portfolio management, and structured investment terms that align incentives.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What types of returns can investors expect?</h3>
              <p className="text-gray-700">
                The fund targets an IRR of 20-25%, though actual returns may vary based on portfolio performance and
                market conditions. We provide quarterly reports on portfolio performance.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/nikela-fund/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-red-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest in Africa's Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the Nikela Fund and be part of Africa's growth story while achieving both financial returns and
            positive impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white" asChild>
              <Link href="/nikela-fund/invest">Invest Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
              asChild
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
