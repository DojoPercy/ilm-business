"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
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
        { title: "Business Development", href: "/services/business-development" },
        { title: "Logistics Management", href: "/services/logistics" },
        { title: "Trade Facilitation", href: "/services/trade-facilitation" },
        { title: "Research & Development", href: "/services/research" },
        { title: "CSR Advisory", href: "/services/csr" },
      ],
    },
    {
      title: "Upanuzi Accelerator",
      href: "/upanuzi",
    },
    {
      title: "Nikela Fund",
      href: "/nikela-fund",
    },
    {
      title: "Insights",
      href: "/insights",
    },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src="/images/logo.png"
            alt="Illuminate Africa"
            width={120}
            height={40}
            className="h-auto w-10 scale-[2.5]"
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
                    <button className={`flex items-center text-sm font-medium ${isScrolled ? "text-gray-800" : "text-white"} hover:text-amber-600 transition-colors`}>
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
                  className={` items-center text-sm font-medium ${isScrolled ? "text-gray-800" : "text-white"} hover:text-amber-600 transition-colors`}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Illuminate Africa"
                    width={100}
                    height={30}
                    className="h-8 w-auto"
                  />
                </Link>
                
              </div>
              <nav className="flex flex-col space-y-4 py-6">
                {navLinks.map((link, index) => (
                  <div key={index} className="space-y-2">
                    {link.dropdown ? (
                      <>
                        <div className="font-medium text-lg">{link.title}</div>
                        <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                          {link.dropdown.map((item, idx) => (
                            <SheetClose key={idx} asChild>
                              <Link href={item.href} className="block text-gray-600 hover:text-amber-600">
                                {item.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </>
                    ) : (
                      <SheetClose asChild>
                        <Link href={link.href} className="block font-medium text-lg hover:text-amber-600">
                          {link.title}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-auto pb-6">
                <SheetClose asChild>
                  <Button asChild className="w-full">
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
