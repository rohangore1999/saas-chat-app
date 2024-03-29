import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "@/node_modules/next/image";

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name: string;
  image?: string;
  className?: string;
}) => {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {/* cn('', className) - we are combining our classes with tailwind classes*/}
      {image && (
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}

      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg"
      >
        {/* eg: name: Rohan Gore => RG */}
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
