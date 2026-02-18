"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Gamepad2, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              LAST <span className="text-cyan-400">PROMPT</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/colony"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-green-400/10 rounded-lg transition-all"
            >
              <Gamepad2 className="w-4 h-4" />
              Colony
            </Link>
            <Link
              href="/corporate-crisis"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-400/10 rounded-lg transition-all"
            >
              <Building2 className="w-4 h-4" />
              Corporate Crisis
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <nav className="px-4 py-4 space-y-2">
              <Link
                href="/colony"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-400/10 rounded-lg transition-all"
              >
                <Gamepad2 className="w-5 h-5" />
                Colony
              </Link>
              <Link
                href="/corporate-crisis"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-orange-400/10 rounded-lg transition-all"
              >
                <Building2 className="w-5 h-5" />
                Corporate Crisis
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}