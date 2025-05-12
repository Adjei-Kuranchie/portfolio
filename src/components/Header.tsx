"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ClickSpark from "./ui/clickspark";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-transparent/90 backdrop-blur-md shadow-sm border-b border-black/10 dark:border-white/10"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tighter relative group"
          >
            <span className="relative z-10 dark:text-white tracking-wider">
              ADJEI
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="text-sm uppercase tracking-wider font-medium dark:text-white">
                  {item.name}
                </span>
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 ease-out",
                    hoveredItem === item.name ? "w-full" : "w-0"
                  )}
                ></span>
              </Link>
            ))}
            <ClickSpark
              sparkColor="#000"
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              <Link
                href="/hire-me"
                className="ml-4 px-5 py-2 border border-black dark:border-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex items-center gap-1 group"
              >
                <span>Hire Me</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </Link>
            </ClickSpark>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-3xl font-light tracking-wide hover:font-normal transition-all duration-300 dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/hire-me"
            className="mt-8 px-8 py-3 border border-black dark:border-white rounded-full text-lg font-medium hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
