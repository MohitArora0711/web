"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((avatar, index) => (
        <a
          key={index}
          href={avatar.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative h-15 w-15">
            <Image
              className="rounded-full border-2 border-white dark:border-gray-800"
              src={avatar.imageUrl}
              fill
              alt={`Avatar ${index + 1}`}
            />
          </div>
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <div className="relative h-15 w-15">
          <a
            className="flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
            href="#"
          >
            +{numPeople}
          </a>
        </div>
      )}
    </div>
  );
};
