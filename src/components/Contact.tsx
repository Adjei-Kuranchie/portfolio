import { LinkPreview, ScrollFloat } from "@/components/index";
import { Facebook, Instagram, Twitter } from "lucide-react";

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
            Contact Me
          </ScrollFloat>
        </div>
        <div
          className={`grid grid-cols-2 font-bold text-lg text-stone-800 dark:text-white `}
        >
          <div className={`flex flex-col gap-2`}>
            <LinkPreview
              url="https://www.instagram.com/kuranchie.a/"
              className="font-bold gap-1 items-center inline-flex"
            >
              <Instagram className={`w-4 h-4`} />
              Instagram
            </LinkPreview>
            <LinkPreview
              url="https://facebook.com"
              className="font-bold gap-1 items-center inline-flex"
            >
              <Facebook className={`w-4 h-4`} />
              Facebook
            </LinkPreview>
            <LinkPreview
              url="https://twitter.com"
              className="font-bold gap-1 items-center inline-flex"
            >
              <Twitter className={`w-4 h-4`} />
              Twitter
            </LinkPreview>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
