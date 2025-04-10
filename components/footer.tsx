import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Illuminate Africa"
                width={150}
                height={50}
                className="h-12 w-auto invert"
              />
            </Link>
            <p className="text-gray-300 mt-4">
              Delivering innovative, timely, and cost-effective business solutions to clients in Africa and beyond.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/upanuzi" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Upanuzi Accelerator
                </Link>
              </li>
              <li>
                <Link href="/nikela-fund" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Nikela Fund
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Insights & Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Spintex Road, Asanfena Crescent, Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+233551562590" className="text-gray-300 hover:text-amber-500 transition-colors">
                  +233 55 156 2590
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:info@illuminateafrica.com"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  info@illuminateafrica.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Illuminate Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
