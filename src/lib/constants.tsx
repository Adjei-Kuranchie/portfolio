import { WorkCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";
import React from "react";

export const techStack = [
  { icon: <StackIcon name={"reactjs"} />, label: "React js" },
  { icon: <StackIcon name={"nodejs"} />, label: "Node js" },
  { icon: <StackIcon name={"mongodb"} />, label: "Mongo DB" },
  { icon: <StackIcon name={"supabase"} />, label: "Supabase" },
  { icon: <StackIcon name={"python"} />, label: "Python" },
  { icon: <StackIcon name={"linux"} />, label: "Linux" },
  {
    icon: <StackIcon name={"nextjs2"} className="dark:invert" />,
    label: "Next js",
  },
  {
    icon: <StackIcon name={"tailwindcss"} />,
    label: "Tailwind",
  },
  {
    icon: <StackIcon name={"bootstrap5"} />,
    label: "Bootstrap",
  },
  {
    icon: <StackIcon name={"shadcnui"} className="dark:invert" />,
    label: "Shadcn UI",
  },
  {
    icon: <StackIcon name={"threejs"} className="dark:invert" />,
    label: "Three js",
  },

  {
    icon: <StackIcon name={"typescript"} />,
    label: "Typescript",
  },
  {
    icon: <StackIcon name={"postgresql"} />,
    label: "Postgresql",
  },
  {
    icon: <StackIcon name={"framer"} className="dark:invert" />,
    label: "Framer",
  },
  {
    icon: <StackIcon name={"git"} />,
    label: "Git",
  },
  {
    icon: <StackIcon name={"netlify2"} />,
    label: "Netlify",
  },
];

export const workContent = [
  {
    title: "Attendance System",
    description:
      "Effortlessly track attendance using geolocation. Our system allows users to check in with a single tap, automatically verifying their presence at the correct location. Say goodbye to manual roll calls and streamline attendance management with real-time, location-based accuracy.",
    icon: (
      <Link
        href={"https://github.com/Adjei-Kuranchie/Unitrack"}
        target="_blank"
      >
        <StackIcon name={"github"} className="w-4 h-4 dark:invert" />
      </Link>
    ),
    content: (
      <WorkCard
        iconList={["typescript", "reactjs", "tailwindcss"]}
        alt="Unitrack"
      />
    ),
  },
  {
    title: "Fitness App",
    description:
      "A fitness app with real fitness exercises from ExerciseDB to help train a specificarea or part of the body and also provides related youtube videos on how that part of the body is trained",
    icon: (
      <Link
        href={"https://github.com/Adjei-Kuranchie/fitness-app"}
        target="_blank"
      >
        <StackIcon name={"github"} className="w-4 h-4 dark:invert" />
      </Link>
    ),

    content: (
      <WorkCard
        iconList={["reactjs", "vitejs", "tailwindcss"]}
        alt="Unitrack"
        liveUrl="https://adjei-fitness-app-with-rapidapi.netlify.app"
      />
    ),
  },
  {
    title: "2D Portfolio",
    description:
      "2D portfolio made with HTML5, CSS3,Javascript using Kaboom.js",
    icon: (
      <Link
        href={"https://github.com/Adjei-Kuranchie/2D-Porfolio-With-Kaboom.js"}
        target="_blank"
      >
        <StackIcon name={"github"} className="w-4 h-4 dark:invert" />
      </Link>
    ),
    content: (
      <WorkCard
        iconList={["html5", "css3", "js"]}
        alt="Unitrack"
        liveUrl="https://adjei-portfolio-with-kaboomjs.netlify.app/"
      />
    ),
  },
];

export const calenderData = [
  {
    title: "2019 - University Beginnings",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I began my academic journey at the University of Cape Coast, Ghana,
          enrolling in a BSc. program in Computer Science. It marked the
          beginning of my formal training in problem-solving, programming, and
          systems thinking.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          This was a transformative year that sparked my curiosity about
          cybersecurity, networks, and software development.
        </p>
      </div>
    ),
  },
  {
    title: "2023 - CyberTeq CTF Competition",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I secured 4th place in the Capture The Flag (CTF) cybersecurity
          competition organized by CyberTeq, facing competitors from
          universities across Ghana.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          The competition tested skills in digital forensics, web exploitation,
          cryptography, and network security. It solidified my passion for
          ethical hacking and cyber defense.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={""}
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src={""}
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src={""}
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src={""}
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2025 - Graduation from UCC",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I graduated from the University of Cape Coast with a Bachelor&apos;s
          degree in Computer Science. The years of hands-on experience, group
          projects, and individual challenges shaped my technical and teamwork
          capabilities.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I emerged with a deep interest in cybersecurity, web technologies, and
          systems engineering—ready to take on the tech world with a strong
          foundation.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={""}
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src={""}
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src={""}
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src={""}
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];
