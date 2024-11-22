

import Image from "next/image"
import { Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (

    <footer className="relative z-10 bg-[#0a0a14] py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/image3.png"
            alt="ProductFrontiers Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-bold text-white text-lg">ProductFrontiers</span>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          {/* Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-sm">
            <Link
              href="https://docs.google.com/document/d/1qImLAJvYldz_z4IVGx--yEoiHoVTeaaC62ztYG-a8uM/edit?usp=sharing"
              className="text-gray-400 font-bold hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://docs.google.com/document/d/1qImLAJvYldz_z4IVGx--yEoiHoVTeaaC62ztYG-a8uM/edit?usp=sharing"
              className="text-gray-400 font-bold hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 font-bold hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="text-gray-400 font-bold hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Need Help Section */}
          <div className="flex flex-row space-x-3 items-center md:items-end space-y-1">
            <span className="text-gray-400 text-sm font-bold">Need Help?</span>
            <Link
              href="mailto:support@hirearmada.com"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              support@productfrontiers.com
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://twitter.com"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 font-bold" />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-gray-400  hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 font-bold" />
          </Link>
        </div>
      </div>
    </footer>
  )

}


export default Footer