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
import { PopupForm } from "@/components/ui/popupForm";

interface GridItem {
  title: string;
  text?: string;
}

interface GridSectionProps {
  title: string;
  text: string;
  subtitle: string;
  refer?: string;
  items: GridItem[];
  icon?: string;
  btn: string;
  className?: string;
  video?: string;
}

export const Sec3 = ({
  title,
  text,
  items,
  subtitle,
  refer,
  icon,
  btn,
  className,
  video,
}: GridSectionProps) => {
  const u = useTranslations("Universal");
  const renderIcon = (icon: string | React.ReactElement) => {
    if (typeof icon === "string") {
      return <Icon name={icon} className="size-5" />;
    } else {
      return icon;
    }
  };

  return (
    <UniversalSection className="w-full h-fit items-start justify-start flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-24 relative overflow-hidden group">
      {video && (
        <VideoComponent
          video={video}
          className="absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full w-auto object-cover"
          muted
        />
      )}
      <div className="w-full h-fit items-start justify-start flex gap-7 flex-col lg:flex-row z-10 opacity-0 duration-1000 ease-in-out group-hover:opacity-100">
        <span className="flex flex-col items-start justify-start flex-1 shrink-0 w-full">
          <OnSubtitle className="max-w-xl text-white">{subtitle}</OnSubtitle>
          <OnTitle className="max-w-xl text-white">{title}</OnTitle>
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
      </div>
      <div className="w-full h-fit items-start justify-start grid grid-cols-1 gap-14 md:gap-10 lg:gap-y-20 z-10 opacity-0 delay-300 duration-1000 ease-in-out group-hover:opacity-100">
        {items.map((item, index) => (
          <span
            key={index}
            className={cn(
              "w-full max-w-xl items-start justify-start flex flex-col gap-y-2 cursor-default relative pt-5",
              className
            )}
          >
            <hr className="absolute top-0 left-0 w-1/3 border-white rounded-full" />
            <span className="w-full h-fit items-start justify-start flex flex-col gap-y-3 text-foreground">
              <div className="text-lg md:text-xl xl:text-xl text-pretty antialiased text-foreground font-bold tracking-wide max-w-2xl text-white">
                {item.title}
              </div>
            </span>
            {text && (
              <div className="text-sm md:text-sm xl:text-base max-w-2xl text-muted-foreground antialiased tracking-wider text-pretty">
                {item.text}
              </div>
            )}
          </span>
        ))}
      </div>
    </UniversalSection>
  );
};
