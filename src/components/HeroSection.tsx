"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ClickSpark from "./ui/clickspark";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center dark:bg-gradient-to-b dark:from-zinc-800 dark:to-slate-900">
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-20 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-start space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-stone-800 dark:text-white animate-slide-up pr-3 select-none">
              <span className="block">Hello,</span>
              <span className="block mt-2">I am Adjei</span>
            </h1>

            <p className="text-xl md:text-2xl max-w-2xl text-gray-700 dark:text-gray-300 animate-fade-in">
              Crafting digital experiences that blend innovation with purpose
            </p>

            <div className="pt-4 animate-fade-in-delay">
              <ClickSpark
                sparkColor="#000"
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
              >
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2 text-lg font-medium px-6 py-3 border-2  border-stone-950 dark:border-white text-stone-900 dark:text-white hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900 transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </ClickSpark>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-black dark:border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-black dark:bg-white rounded-full mt-2 animate-scroll-down" />
        </div>
      </div> */}
    </section>
  );
}
