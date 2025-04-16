"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // For scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setScrollProgress((window.scrollY / scrollHeight) * 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Remove preload class after page load to enable animations
    document.body.classList.remove("preload")

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Add preload class to prevent animations on page load
  useEffect(() => {
    document.body.classList.add("preload")

    const timer = setTimeout(() => {
      document.body.classList.remove("preload")
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const navLinks = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
      dropdown: [
        { title: "Business Consulting", href: "/services/business-development" },
        { title: "Upanuzi Accelerator", href: "/upanuzi" },
        { title: "Nikela Fund", href: "/nikela-fund" },
        { title: "CSR Advisory", href: "/services/csr" },
      ],
    },
    {
      title: "Insights",
      href: "/insights",
    },
    {
      title: "Our Team",
      href: "/team",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white backdrop-blur-md bg-opacity-40 shadow-md py-3" : "bg-white backdrop-blur-md bg-opacity-100 shadow-md py-3",
      )}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src="/images/logobig.png"
            alt="Illuminate Africa"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center text-sm font-medium transition-colors ${
                        isScrolled ? "text-gray-800 hover:text-brand-red" : "text-gray-800 hover:text-brand-red"
                      }`}
                    >
                      {link.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {link.dropdown.map((item, idx) => (
                      <DropdownMenuItem key={idx} asChild>
                        <Link href={item.href} className="w-full cursor-pointer">
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? "text-gray-800 hover:text-brand-red" : "text-gray-800 hover:text-brand-red"
                  }`}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            className={isScrolled ? "bg-brand-red hover:bg-brand-red-dark" : "bg-brand-red hover:bg-brand-red-dark"}
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={`lg:hidden ${isScrolled ? "text-gray-800" : "text-gray-800"}`}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logobig.png"
                    alt="Illuminate Africa"
                    width={140}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                
              </div>
              <nav className="flex flex-col space-y-4 py-6">
                {navLinks.map((link, index) => (
                  <div key={index} className="space-y-2">
                    {link.dropdown ? (
                      <>
                        <div className="font-medium text-lg">{link.title}</div>
                        <div className="pl-4 space-y-2 border-l-2 border-red-200">
                          {link.dropdown.map((item, idx) => (
                            <SheetClose key={idx} asChild>
                              <Link href={item.href} className="block text-gray-600 hover:text-brand-red">
                                {item.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </>
                    ) : (
                      <SheetClose asChild>
                        <Link href={link.href} className="block font-medium text-lg hover:text-brand-red">
                          {link.title}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-auto pb-6">
                <SheetClose asChild>
                  <Button asChild className="w-full bg-brand-red hover:bg-brand-red-dark">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
