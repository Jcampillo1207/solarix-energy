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
  image?: string;
}

export const Sec4 = ({
  title,
  text,
  items,
  subtitle,
  refer,
  icon,
  btn,
  className,
  image,
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
      {image && (
        <div className="absolute right-0 top-14 w-[800px] aspect-video hidden xl:flex">
          <Image src={image} alt="Imagen" className="object-cover" fill />
        </div>
      )}
      <div className="w-full h-fit items-start justify-start flex gap-7 flex-col lg:flex-row z-10">
        <span className="flex flex-col items-start justify-start flex-1 shrink-0 md:max-w-xl w-full min-w-full lg:min-w-0">
          <OnSubtitle className="max-w-xl">{subtitle}</OnSubtitle>
          <OnTitle className="max-w-xl">{title}</OnTitle>
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
      <div className="w-full h-fit items-start justify-start grid grid-cols-1 gap-14 md:gap-10 z-10">
        {items.map((item, index) => (
          <span
            key={index}
            className={cn(
              "w-full max-w-3xl items-start justify-start flex flex-col gap-y-2 cursor-default relative pt-5",
              className
            )}
          >
            <hr className="absolute top-0 left-0 w-1/3 border-white rounded-full" />
            <span className="w-full h-fit items-start justify-start flex flex-col gap-y-3 text-foreground">
              <div className="text-lg md:text-xl xl:text-xl text-pretty antialiased text-foreground font-bold tracking-wide max-w-3xl">
                {item.title}
              </div>
            </span>
            {text && (
              <div className="text-sm md:text-sm xl:text-base max-w-3xl text-muted-foreground antialiased tracking-wider text-pretty">
                {item.text}
              </div>
            )}
          </span>
        ))}
      </div>
    </UniversalSection>
  );
};
