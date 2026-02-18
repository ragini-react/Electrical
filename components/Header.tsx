"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Company } from "@/types/site";

interface HeaderProps {
  company: Company;
}

export default function Header({ company }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-[#1a1a1a] shadow-lg py-3"
          : "bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-xl">⚡</span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-blue-900 dark:text-blue-400">
                  {company.name}
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
                  {company.tagline}
                </p>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 dark:bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4"
          >
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 font-medium py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-all border border-gray-300 dark:border-gray-800"
                >
                  Contact
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
