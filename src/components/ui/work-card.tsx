import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

type WorkCard = {
  image?: string;
  alt?: string;
  iconList?: React.ElementType[];
  liveUrl?: string;
};

const WorkCard = ({ image, alt, iconList, liveUrl }: WorkCard) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {image && <Image src={image} fill alt={alt ?? "Tech stack image"} />}
      {iconList && (
        <div className="absolute flex w-fit p-4 items-center justify-between bottom-2.5 left-2">
          <div className={"flex h-9 items-center justify-between gap-1.5"}>
            {iconList.map((Icon, index: number) => (
              <Icon
                key={index}
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
          <Button variant={"secondary"}>
            <Link href={liveUrl}>Live Demo</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
export default WorkCard;
