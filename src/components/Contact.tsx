import { ScrollFloat } from "@/components/index";
import Link from "next/link";

function Contact() {
  return (
    <section className="bg-white dark:bg-zinc-950 flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-stone-800 dark:text-white">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Contact Me &amp; Let&apos;s Connect
          </ScrollFloat>
        </div>
        <div
          className={`grid grid-cols-2 font-bold text-lg text-stone-800 dark:text-white `}
        >
          <div className={`flex flex-col gap-2`}>
            <Link
              href="https://www.instagram.com/kuranchie.a/"
              className="font-bold gap-1 items-center inline-flex"
              target="_blank"
            >
              Instagram
            </Link>

            <Link
              href="https://www.linkedin.com/in/kuranchie/"
              className="font-bold gap-1 items-center inline-flex"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="tel:+233598386200"
              className="font-bold gap-1 items-center inline-flex"
              target="_blank"
            >
              Phone
            </Link>
            <Link
              href="mailto:kaynkuranchie@gmail.com"
              className="font-bold gap-1 items-center inline-flex"
              target="_blank"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
