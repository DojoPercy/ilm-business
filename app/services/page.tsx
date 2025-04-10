import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart3, Globe, Briefcase, Users, Award, Truck, FileText, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">Comprehensive Business Solutions for Africa</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
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
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Development</h3>
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

            <Card className="service-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Logistics Management</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end logistics solutions including supply chain optimization, warehousing, and distribution
                  across African markets.
                </p>
                <Link
                  href="/services/logistics"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="service-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trade Facilitation</h3>
                <p className="text-gray-600 mb-4">
                  Support for businesses engaging in cross-border trade, including regulatory compliance, customs
                  clearance, and trade finance.
                </p>
                <Link
                  href="/services/trade-facilitation"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

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

            <Card className="service-card border-none shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Research & Development</h3>
                <p className="text-gray-600 mb-4">
                  Market research, feasibility studies, and product development support tailored to African markets and
                  consumer needs.
                </p>
                <Link
                  href="/services/research"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="service-card border-none shadow-lg md:col-start-2">
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
          </div>
        </div>
      </section>

      {/* Featured Service: Business Development */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Business Development</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our business development services are designed to help companies at all stages navigate the complexities
                of African markets and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're looking to enter new markets, optimize your operations, or scale your business across
                borders, our team of experts brings deep local knowledge and global best practices to every engagement.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-500 flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Market entry strategy and execution</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-500 flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Business model optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-500 flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Partnership development and management</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-500 flex-shrink-0 mt-1"></div>
                  <span className="ml-3">Sales and distribution strategy</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/services/business-development">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Business Development"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service: Logistics Management */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Logistics Management"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Logistics Management</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our logistics management services provide end-to-end solutions for businesses operating in Africa.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We help optimize supply chains, manage warehousing, and ensure efficient distribution across diverse
                geographical locations.
              </p>
              <Button asChild>
                <Link href="/services/logistics">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Development Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Development</h1>
            <p className="text-xl text-gray-300">Strategic Growth Solutions for African Markets</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-left">Overview</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our business development services are designed to help companies at all stages navigate the complexities
                of African markets and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With deep local knowledge and extensive networks across the continent, we provide tailored solutions
                that address your specific business challenges and opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether you're looking to enter new markets, optimize your operations, or scale your business across
                borders, our team of experts brings both strategic insight and practical execution support to every
                engagement.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Business Development Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Services Offered</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Market Entry Strategy</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive support for businesses looking to enter or expand in African markets, including:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Market assessment and opportunity identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Competitive landscape analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Entry mode selection and planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regulatory navigation and compliance</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Business Model Optimization</h3>
              <p className="text-gray-700 mb-4">
                Strategic review and refinement of your business model to maximize performance in African markets:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Revenue model assessment and enhancement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cost structure optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Value proposition refinement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Operational efficiency improvements</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Partnership Development</h3>
              <p className="text-gray-700 mb-4">
                Identification and facilitation of strategic partnerships to accelerate growth:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Partner identification and screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Partnership structure and negotiation support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Joint venture establishment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Alliance management frameworks</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Sales & Distribution Strategy</h3>
              <p className="text-gray-700 mb-4">Development and implementation of effective go-to-market strategies:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Channel strategy development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Distribution network design and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sales force effectiveness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pricing strategy and execution</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Growth Financing</h3>
              <p className="text-gray-700 mb-4">Support in securing the capital needed to fuel your growth:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Funding needs assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Investor identification and matching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pitch preparation and investor presentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Due diligence support</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Market Intelligence</h3>
              <p className="text-gray-700 mb-4">Actionable insights to inform your strategic decision-making:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Market sizing and segmentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Consumer behavior analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Competitive intelligence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Trend analysis and forecasting</span>
                </li>
              </ul>
            </div>
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
                  <h3 className="font-bold mb-2">Discover</h3>
                  <p className="text-sm text-gray-600">
                    In-depth assessment of your business, goals, and the market landscape
                  </p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Design</h3>
                  <p className="text-sm text-gray-600">Development of tailored strategies and action plans</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Implement</h3>
                  <p className="text-sm text-gray-600">Execution support and guidance throughout implementation</p>
                </div>

                <div className="hidden md:block w-full h-0.5 bg-amber-200 flex-grow mt-8"></div>

                <div className="flex flex-col items-center text-center md:w-1/4 mt-8 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-amber-600">4</span>
                  </div>
                  <h3 className="font-bold mb-2">Optimize</h3>
                  <p className="text-sm text-gray-600">Continuous monitoring, evaluation, and refinement</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-xl font-bold mb-4">Our Difference</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Local Expertise:</span> Our team brings deep understanding of
                    African markets, cultures, and business practices.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Extensive Networks:</span> We leverage our connections across
                    government, private sector, and civil society to open doors for our clients.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Practical Execution:</span> We don't just provide strategies on
                    paper—we roll up our sleeves and help you implement them.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Results Focus:</span> We measure our success by the tangible
                    business outcomes we help our clients achieve.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-60">
                <Image src="/placeholder.svg?height=400&width=600" alt="Case Study" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Market Entry Strategy for Global FMCG Brand</h3>
                <p className="text-gray-600 mb-4">
                  We helped a leading global consumer goods company enter three new African markets, achieving 30%
                  market share within 18 months.
                </p>
                <div className="flex justify-between text-sm mb-4">
                  <div>
                    <p className="font-semibold">Industry</p>
                    <p className="text-gray-600">Consumer Goods</p>
                  </div>
                  <div>
                    <p className="font-semibold">Markets</p>
                    <p className="text-gray-600">Ghana, Kenya, Nigeria</p>
                  </div>
                  <div>
                    <p className="font-semibold">Results</p>
                    <p className="text-gray-600">30% Market Share</p>
                  </div>
                </div>
                <Link
                  href="/case-studies/fmcg-market-entry"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-60">
                <Image src="/placeholder.svg?height=400&width=600" alt="Case Study" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Distribution Network Optimization for Pharmaceutical Company</h3>
                <p className="text-gray-600 mb-4">
                  We redesigned the distribution network for a pharmaceutical company, reducing costs by 25% and
                  improving delivery times by 40%.
                </p>
                <div className="flex justify-between text-sm mb-4">
                  <div>
                    <p className="font-semibold">Industry</p>
                    <p className="text-gray-600">Pharmaceuticals</p>
                  </div>
                  <div>
                    <p className="font-semibold">Markets</p>
                    <p className="text-gray-600">East Africa</p>
                  </div>
                  <div>
                    <p className="font-semibold">Results</p>
                    <p className="text-gray-600">25% Cost Reduction</p>
                  </div>
                </div>
                <Link
                  href="/case-studies/pharma-distribution"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Emmanuel Gyimah</h3>
              <p className="text-amber-600">Director, Business Development</p>
              <p className="text-gray-600 mt-2">
                15+ years experience in business strategy and market development across Africa
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Fatima Diallo</h3>
              <p className="text-amber-600">Senior Consultant</p>
              <p className="text-gray-600 mt-2">
                Expert in market entry strategy and partnership development in West African markets
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">David Osei</h3>
              <p className="text-amber-600">Growth Strategist</p>
              <p className="text-gray-600 mt-2">Specialist in sales strategy and distribution network optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Business Growth?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our business development services can help you achieve your goals in African
            markets.
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
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
