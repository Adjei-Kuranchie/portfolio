import Image from "next/image";
import StackIcon from "tech-stack-icons";
import { Button } from "@/components";
import Link from "next/link";

type TechStackCardProps = {
  image?: string;
  alt?: string;
  iconList?: string[];
  liveUrl?: string;
};

const TechStackCard = ({
  image,
  alt,
  iconList,
  liveUrl,
}: TechStackCardProps) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {image && <Image src={image} fill alt={alt ?? "Tech stack image"} />}
      {iconList && (
        <div className="absolute flex w-fit p-4 items-center justify-between bottom-2.5 left-2">
          <div className={"flex h-9 items-center justify-between gap-1.5"}>
            {iconList.map((icon, index) => (
              <StackIcon
                key={index}
                name={icon}
                className="h-8 w-8 bg-stone-700 rounded-full p-1.5 "
              />
            ))}
          </div>
        </div>
      )}
      {liveUrl && (
        <div
          className={
            "absolute flex w-full p-4 items-center justify-end bottom-2.5 right-2"
          }
        >
          <Button variant={"ghost"}>
            <Link href={liveUrl}>Live Demo</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
export default TechStackCard;
