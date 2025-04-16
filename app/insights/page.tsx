import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Calendar, User } from "lucide-react"

export default function InsightsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Resources</h1>
            <p className="text-xl text-gray-300">Latest from Illuminate Africa</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Featured Article</h2>

          <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                    Market Insights
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>April 10, 2023</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">The Future of E-Commerce in Africa: Trends and Opportunities</h3>
                <p className="text-gray-700 mb-6">
                  Exploring the rapidly evolving e-commerce landscape across African markets
tsx file="app/insights/page.tsx"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Calendar, User } from 'lucide-react'

export default function InsightsPage() {\
  return (
    <>
      {/* Header Banner */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Resources</h1>
            <p className="text-xl text-gray-300">Latest from Illuminate Africa</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Featured Article</h2>

          <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                    Market Insights
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>April 10, 2023</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">The Future of E-Commerce in Africa: Trends and Opportunities</h3>
                <p className="text-gray-700 mb-6">
                  Exploring the rapidly evolving e-commerce landscape across African markets and identifying key growth
                  opportunities for businesses. From mobile payment innovations to last-mile delivery solutions, discover
                  how digital commerce is transforming the continent.
                </p>
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Author"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Maurice Cashinco</p>
                    <p className="text-sm text-gray-500">Executive Director</p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/insights/ecommerce-africa">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="whitespace-nowrap">All Topics</Button>
                <Button variant="outline" className="whitespace-nowrap">Latest</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Article 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                    Investment
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Mar 15, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Impact Investing: Creating Sustainable Value in African Markets
                </h3>
                <p className="text-gray-600 mb-4">
                  How strategic impact investments are driving both financial returns and positive social change across
                  the continent.
                </p>
                <Link
                  href="/insights/impact-investing"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                    Business Development
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Feb 28, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Navigating Regulatory Challenges in Cross-Border African Trade
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to understanding and overcoming regulatory barriers when expanding your business
                  across African borders.
                </p>
                <Link
                  href="/insights/regulatory-challenges"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                    Technology
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Feb 10, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  The Rise of Fintech Solutions in Underserved African Markets
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploring how innovative fintech solutions are addressing financial inclusion challenges and creating
                  new opportunities.
                </p>
                <Link
                  href="/insights/fintech-solutions"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                    Logistics
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Jan 25, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Optimizing Supply Chains for African Market Expansion
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategies for building resilient and efficient supply chains that can support business growth across
                  diverse African markets.
                </p>
                <Link
                  href="/insights/supply-chains"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                    Agriculture
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Jan 12, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Sustainable Agriculture: Innovations Transforming African Farming
                </h3>
                <p className="text-gray-600 mb-4">
                  How technology and sustainable practices are revolutionizing agriculture and creating new investment
                  opportunities.
                </p>
                <Link
                  href="/insights/sustainable-agriculture"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                    Leadership
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Dec 20, 2022</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Building Resilient Leadership Teams for African Businesses
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategies for developing strong leadership teams that can navigate the unique challenges of operating
                  in African markets.
                </p>
                <Link
                  href="/insights/leadership-teams"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center section-heading">Resources</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Research Reports</h3>
              <p className="text-gray-700 mb-6">
                In-depth analysis and insights on key sectors, markets, and trends across Africa.
              </p>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/resources/report-agritech" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    AgriTech in Africa: Market Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/resources/report-fintech" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Fintech Landscape Report 2023
                  </Link>
                </li>
                <li>
                  <Link href="/resources/report-renewable" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Renewable Energy Investment Guide
                  </Link>
                </li>
              </ul>
              <Button variant="outline" size="sm" asChild>
                <Link href="/resources/reports">View All Reports</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Webinars & Events</h3>
              <p className="text-gray-700 mb-6">
                Access recordings of our past webinars and information about upcoming events.
              </p>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/resources/webinar-investment" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Investment Strategies for African Markets
                  </Link>
                </li>
                <li>
                  <Link href="/resources/webinar-expansion" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Cross-Border Expansion Masterclass
                  </Link>
                </li>
                <li>
                  <Link href="/resources/webinar-funding" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Securing Funding for African Startups
                  </Link>
                </li>
              </ul>
              <Button variant="outline" size="sm" asChild>
                <Link href="/resources/webinars">View All Webinars</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Guides & Toolkits</h3>
              <p className="text-gray-700 mb-6">
                Practical resources to help businesses navigate various aspects of operating in Africa.
              </p>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/resources/guide-market-entry" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Market Entry Strategy Guide
                  </Link>
                </li>
                <li>
                  <Link href="/resources/guide-compliance" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Regulatory Compliance Toolkit
                  </Link>
                </li>
                <li>
                  <Link href="/resources/guide-pitch" className="text-amber-600 hover:underline flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Investor Pitch Deck Template
                  </Link>
                </li>
              </ul>
              <Button variant="outline" size="sm" asChild>
                <Link href="/resources/guides">View All Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-amber-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest insights, reports, and event invitations directly in your
            inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white border-white text-black"
            />
            <Button className="bg-black hover:bg-gray-800 text-white whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
