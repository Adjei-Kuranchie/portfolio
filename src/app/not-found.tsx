"use client";

import { ClickSpark } from "@/components";
import { gsap } from "gsap";
import { AlertCircle, ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([numberRef.current, contentRef.current], {
        opacity: 0,
        y: 50,
      });

      // Main animation timeline
      const tl = gsap.timeline();

      tl.to(numberRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }).to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Subtle pulse effect for 404
      gsap.to(numberRef.current, {
        scale: 1.02,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Floating animation for icons
      gsap.to(".floating-icon", {
        y: -8,
        duration: 2.5,
        ease: "power2.inOut",
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-stone-400 dark:border-white rounded-full"></div>
        <div className="absolute top-60 right-32 w-24 h-24 border border-stone-400 dark:border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-16 h-16 border border-stone-400 dark:border-white rounded-full"></div>
        <div className="absolute bottom-60 right-20 w-12 h-12 border border-stone-400 dark:border-white rounded-lg rotate-12"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* 404 Number */}
        <div
          ref={numberRef}
          className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-stone-800 dark:text-white mb-8 select-none animate-slide-up"
        >
          404
        </div>

        {/* Content */}
        <div ref={contentRef} className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-stone-800 dark:text-white">
              Page Not Found
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
              Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-delay">
            <ClickSpark
              sparkColor="currentColor"
              sparkSize={8}
              sparkRadius={12}
              sparkCount={6}
              duration={300}
            >
              <Link
                href="/"
                className="group/link inline-flex items-center gap-2 text-lg font-medium px-6 py-3 border-2 border-stone-950 dark:border-white text-stone-900 dark:text-white hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900 transition-all duration-300"
              >
                <Home className="w-5 h-5 transition-transform duration-300 group-hover/link:-translate-y-0.5" />
                Go Home
              </Link>
            </ClickSpark>

            <ClickSpark
              sparkColor="currentColor"
              sparkSize={8}
              sparkRadius={12}
              sparkCount={6}
              duration={300}
            >
              <button
                onClick={() => window.history.back()}
                className="group/link inline-flex items-center gap-2 text-lg font-medium px-6 py-3 border-2 border-stone-300 dark:border-gray-600 text-stone-700 dark:text-gray-300 hover:border-stone-950 dark:hover:border-white hover:text-stone-900 dark:hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover/link:-translate-x-1" />
                Go Back
              </button>
            </ClickSpark>
          </div>

          {/* Floating Icons */}
          <div className="flex justify-center gap-8 mt-16">
            <div className="floating-icon p-4 border border-stone-200 dark:border-gray-800 rounded-full hover:border-stone-400 dark:hover:border-gray-600 transition-colors duration-300">
              <Search className="w-6 h-6 text-stone-600 dark:text-gray-400" />
            </div>
            <div className="floating-icon p-4 border border-stone-200 dark:border-gray-800 rounded-full hover:border-stone-400 dark:hover:border-gray-600 transition-colors duration-300">
              <AlertCircle className="w-6 h-6 text-stone-600 dark:text-gray-400" />
            </div>
            <div className="floating-icon p-4 border border-stone-200 dark:border-gray-800 rounded-full hover:border-stone-400 dark:hover:border-gray-600 transition-colors duration-300">
              <Home className="w-6 h-6 text-stone-600 dark:text-gray-400" />
            </div>
          </div>

          {/* Help text */}
          <div className="mt-12 text-gray-600 dark:text-gray-400 text-sm">
            <p>Need help? Let&apos;s get you back on track.</p>
          </div>
        </div>
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-stone-400 dark:bg-gray-600 rounded-full animate-pulse opacity-30"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
