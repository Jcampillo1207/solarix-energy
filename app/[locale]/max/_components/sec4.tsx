import Icon from "@/components/main/icons";
import { OnSubtitle, OnTitle, TextSection } from "@/components/main/textMain";
import { UniversalSection } from "@/components/main/universalSection";
import { Button } from "@/components/ui/button";
import { CalendarDays, PlaneTakeoff } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { cn } from "@/lib/utils";
import CardSpotlight from "@/components/ui/hoverCard";
import { SunpowerO } from "@/components/vectors/logos/sunpowerO";
import VideoComponent from "@/components/main/videoComponent";
import { PopupForm } from "@/components/ui/popupForm";

interface GridSectionProps {
  title: string;
  text: string;
  subtitle: string;
  refer?: string;
  icon?: string;
  btn: string;
  btn2: string;
  className?: string;
  title2: string;
  text1: string;
  text2: string;
  text3: string;
}

export const Sec4 = ({
  title,
  text,
  subtitle,
  refer,
  icon,
  btn,
  className,
  text1,
  btn2,
  text2,
  text3,
  title2,
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
        <span className="flex flex-col items-start justify-start flex-1 shrink-0 md:max-w-xl w-full min-w-full lg:min-w-0">
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
      <div className="w-full h-fit items-start justify-start grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-3 md:gap-5 lg:gap-y-7">
        <div className="w-full h-full items-start justify-between flex flex-col gap-y-0 bg-muted-foreground/10 rounded-xl p-5">
          <div className="w-full h-fit flex gap-x-5 items-center justify-start">
            <div className="h-fit w-fit items-center justify-center flex">
              <SunpowerO />
            </div>
            <OnTitle className="text-lg md:text-xl lg:text-xl">
              {title2}
            </OnTitle>
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <TextSection className="text-sm md:text-base">{text1}</TextSection>
            <TextSection className="text-sm md:text-base">{text2}</TextSection>
            <TextSection className="text-sm md:text-base">{text3}</TextSection>
          </div>
          <Button
            variant={"default"}
            size={"lg"}
            className="w-full items-center bg-foreground hover:bg-foreground/80 flex gap-x-2 group mt-5"
            asChild
          >
            <Link href={"https://www.solarstratos.com/en/"} target="_blank">
              {btn2}
              <PlaneTakeoff className="size-4 group-hover:animate-bounce" />
            </Link>
          </Button>
        </div>
        <div className="w-full h-auto aspect-video items-center justify-center relative rounded-xl overflow-hidden col-span-1 lg:col-span-2">
          <VideoComponent
            video="/solarstrat.webm"
            muted
            loop
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </UniversalSection>
  );
};
