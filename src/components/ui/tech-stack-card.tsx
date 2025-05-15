import Image from "next/image";
import StackIcon from "tech-stack-icons";

type TechStackCardProps = {
  image?: string;
  alt?: string;
  iconList?: string[];
};

const TechStackCard = ({ image, alt, iconList }: TechStackCardProps) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {image && <Image src={image} fill alt={alt ?? "Tech stack image"} />}
      {iconList && (
        <div className="absolute flex h-9 w-fit p-4 items-center gap-2 bottom-2.5 left-2">
          {iconList.map((icon, index) => (
            <StackIcon
              key={index}
              name={icon}
              className="h-8 w-8 bg-stone-700 rounded-full p-1.5 "
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default TechStackCard;
