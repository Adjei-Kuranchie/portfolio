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
      <TechStackCard
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
      <TechStackCard
        iconList={["html5", "css3", "js"]}
        alt="Unitrack"
        liveUrl="https://adjei-portfolio-with-kaboomjs.netlify.app/"
      />
    ),
  },
];
