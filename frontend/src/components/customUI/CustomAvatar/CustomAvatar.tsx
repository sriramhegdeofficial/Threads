"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  src: string;
  alt: string;
}

export default function CustomAvatar({ src, alt }: IProps) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>
        <img src="/images/profileImg.png" alt="default Image of profile" />
      </AvatarFallback>
    </Avatar>
  );
}
