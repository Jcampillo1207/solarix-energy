import Icon from "@/components/main/icons";
import { OnSubtitle, OnTitle, TextSection } from "@/components/main/textMain";
import { UniversalSection } from "@/components/main/universalSection";
import { Button } from "@/components/ui/button";
import { CalendarDays, Circle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { cn } from "@/lib/utils";
import CardSpotlight from "@/components/ui/hoverCard";
import VideoComponent from "@/components/main/videoComponent";
import Image from "next/image";

interface GridItem {
  title: string;
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
  title1: string;
}

export const Sec2 = ({
  title,
  text,
  items,
  subtitle,
  refer,
  icon,
  btn,
  title1,
  className,
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
    <UniversalSection className="w-full h-fit items-start justify-start flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-24">
      <div className="w-full h-fit items-start justify-start flex gap-7 flex-col lg:flex-row">
        <span className="flex flex-col items-start justify-start flex-1 shrink-0 max-w-xl">
          <OnSubtitle>{subtitle}</OnSubtitle>
          <OnTitle>{title}</OnTitle>
          <Button
            variant={"default"}
            size={"lg"}
            className="w-full items-center bg-foreground hover:bg-foreground/80 flex gap-x-2 group mt-5"
            asChild
          >
            <Link href={(refer && refer) || "/contact"}>
              {btn}
              <Icon
                name={(icon && icon) || "CalendarDays"}
                className="size-4 group-hover:animate-bounce"
              />
            </Link>
          </Button>
        </span>
        <TextSection className="flex-1">{text}</TextSection>
      </div>
      <div className="w-full h-fit items-start justify-start grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-3 md:gap-5 lg:gap-y-7">
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-7">
          <OnTitle>{title1}</OnTitle>
          <div className="w-full h-fit items-center flex flex-col gap-y-3">
            {items.map((item, index) => (
              <span
                key={index}
                className={cn(
                  "w-full h-fit items-center justify-start flex flex-col gap-y-3",
                  className
                )}
              >
                <span className="w-full h-fit items-center justify-start flex gap-x-3">
                  <Circle className="size-2 text-white" />
                  <div className="text-sm text-start md:text-base xl:text-base text-pretty antialiased text-muted-foreground tracking-wide">
                    {item.title}
                  </div>
                </span>
              </span>
            ))}
          </div>
          <Button
            variant={"default"}
            size={"lg"}
            className=" items-center bg-foreground hover:bg-foreground/80 flex gap-x-2 group mt-5"
            asChild
          >
            <Link href={(refer && refer) || "/contact"}>
              {btn}
              <Icon
                name={(icon && icon) || "CalendarDays"}
                className="size-4 group-hover:animate-bounce"
              />
            </Link>
          </Button>
        </div>
        <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl relative">
          <Image
            src={"/performance.png"}
            fill
            className="object-contain"
            alt="Image"
          />
        </div>
      </div>
    </UniversalSection>
  );
};
