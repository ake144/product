"use client";

import { ArrowRight, Diamond, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Diamond className="h-6 w-6 text-purple-500" />
          <span className="font-bold text-white">ProductFrontiers</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-800">
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            About
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-gray-400 p-2 focus:outline-none"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-400 ">
            <Sun className="h-5 w-5" />
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Start Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md border-t border-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
