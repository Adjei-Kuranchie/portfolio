import { TechStackCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";

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
      <TechStackCard
        iconList={["reactjs", "vitejs", "tailwindcss"]}
        alt="Unitrack"
      />
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src=""
          width={300}
          fill
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
