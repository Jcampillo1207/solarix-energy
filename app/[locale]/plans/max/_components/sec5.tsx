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
import { PopupForm } from "@/components/ui/popupForm";

interface GridItem {
  title: string;
  text?: string;
  icon: string | React.ReactElement;
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
}

export const Sec5 = ({
  title,
  text,
  items,
  subtitle,
  refer,
  icon,
  btn,
  className,
}: GridSectionProps) => {
  const u = useTranslations("Universal");
  const renderIcon = (icon: string | React.ReactElement) => {
    if (typeof icon === "string") {
      return <Icon name={icon} className="size-12 group-hover:text-primary duration-300 ease-in-out" />;
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
      <div className="w-full h-fit items-start justify-start grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 lg:gap-y-7">
        {items.map((item, index) => (
          <span
            key={index}
            className={cn(
              "w-full min-h-[450px] items-start justify-start flex flex-col gap-y-5 hover:bg-muted-foreground/10 transition-colors cursor-default p-5 rounded-xl",
              className
            )}
          >
            <span className="w-full h-fit items-start justify-start flex flex-col gap-y-3 text-foreground">
              <div className="bg-background flex w-full aspect-video items-center justify-center h-auto rounded-lg mb-5 border border-muted-foreground/10 group">
                <CardSpotlight>{renderIcon(item.icon)}</CardSpotlight>
              </div>
              <div className="text-lg md:text-xl xl:text-3xl text-pretty antialiased text-foreground font-bold tracking-wide">
                {item.title}
              </div>
            </span>
            {text && (
              <div className="text-sm md:text-sm xl:text-base text-muted-foreground antialiased tracking-wider text-pretty">
                {item.text}
              </div>
            )}
          </span>
        ))}
      </div>
    </UniversalSection>
  );
};
