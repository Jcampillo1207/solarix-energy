import Icon from "@/components/main/icons";
import { OnSubtitle, OnTitle, TextSection } from "@/components/main/textMain";
import { UniversalSection } from "@/components/main/universalSection";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { cn } from "@/lib/utils";
import CardSpotlight from "@/components/ui/hoverCard";
import VideoComponent from "@/components/main/videoComponent";
import Image from "next/image";
import { PopupForm } from "@/components/ui/popupForm";

interface GridSectionProps {
  title: string;
  text: string;
  subtitle: string;
  refer?: string;
  icon?: string;
  btn: string;
  className?: string;
  image: string;
  title1: string;
  title2: string;
}

export const Sec6 = ({
  title,
  text,
  subtitle,
  refer,
  icon,
  btn,
  image,
  title1,
  title2,
  className,
}: GridSectionProps) => {
  const u = useTranslations("Universal");
  const renderIcon = (icon: string | React.ReactElement) => {
    if (typeof icon === "string") {
      return (
        <Icon
          name={icon}
          className="size-12 group-hover:text-primary duration-300 ease-in-out"
        />
      );
    } else {
      return icon;
    }
  };

  return (
    <UniversalSection className="w-full h-fit items-start justify-start flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-24">
      <div className="w-full h-fit items-start justify-start flex gap-7 flex-col lg:flex-row">
        <span className="flex flex-col items-start justify-start flex-1 shrink-0 max-w-xl">
          <OnSubtitle>{subtitle}</OnSubtitle>
          <OnTitle>{title}</OnTitle>
          {(refer && icon && (
            <Button
              variant={"default"}
              size={"lg"}
              className="w-full items-center bg-foreground hover:bg-foreground/80 flex gap-x-2 group mt-5"
              asChild
            >
              <Link href={refer}>
                {btn}
                <Icon
                  name={icon}
                  className="size-4 group-hover:animate-bounce"
                />
              </Link>
            </Button>
          )) || <PopupForm btn={btn} />}
        </span>
        <TextSection className="flex-1">{text}</TextSection>
      </div>
      <div className="w-full h-auto aspect-video items-start overflow-hidden justify-start flex rounded-2xl relative">
        <Image src={image} fill className="object-cover" alt="Imagen" />
        <div className="w-fit h-fit items-center justify-center flex flex-col gap-y-2 absolute top-1/4 left-1/3  animate-pulse">
          <span className="flex flex-col items-center justify-center">
            <div className="h-10 w-[2px] bg-gradient-to-t from-white to-transparent rounded-t-full" />
            <div className="size-2 rounded-full bg-white -translate-y-px" />
          </span>
          <div className="text-base antialiased tracking-wider">{title1}</div>
        </div>
        <div className="w-fit h-fit items-center justify-center flex flex-col gap-y-2 absolute bottom-1/3 right-1/3 animate-pulse">
          <span className="flex flex-col items-center justify-center">
            <div className="h-10 w-[2px] bg-gradient-to-t from-white to-transparent rounded-t-full" />
            <div className="size-2 rounded-full bg-white -translate-y-px" />
          </span>
          <div className="text-base antialiased tracking-wider">{title2}</div>
        </div>
      </div>
    </UniversalSection>
  );
};
