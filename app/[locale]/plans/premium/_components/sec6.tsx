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
import { PlansTable } from "@/components/main/table";

interface GridSectionProps {
  title: string;
  text: string;
  subtitle: string;
  refer?: string;
  icon?: string;
  btn: string;
  className?: string;
}

export const Sec6 = ({
  title,
  text,
  subtitle,
  refer,
  icon,
  btn,
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
      <PlansTable mode="premium"/>
    </UniversalSection>
  );
};
