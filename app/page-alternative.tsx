// Alternative approach using Image component for hero section
// You can replace the current hero section with this if the background image approach doesn't work well

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <>
      {/* Hero Section - Alternative with Image component */}
      <section className="relative min-h-[90vh] flex items-center bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="/images/africa-map.png" alt="Africa Map" fill className="object-contain object-center" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-1"></div>
        <div className="container mx-auto px-4 py-24 pt-32 relative z-10">
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
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* Rest of the page content... */}
    </>
  )
}
