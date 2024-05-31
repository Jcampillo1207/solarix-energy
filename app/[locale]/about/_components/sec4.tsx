import Icon from "@/components/main/icons";
import { OnSubtitle, OnTitle, TextSection } from "@/components/main/textMain";
import { UniversalSection } from "@/components/main/universalSection";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import { PopupForm } from "@/components/ui/popupForm";

interface GridItem {
  title: string;
  text: string;
  year?: string;
  icon: string | React.ReactElement;
}

interface GridSectionProps {
  title: string;
  text: string;
  items: GridItem[];
}

export const Sec4 = ({ title, text, items }: GridSectionProps) => {
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
          <OnTitle>{title}</OnTitle>
          <PopupForm btn={u("btnCita")}/>
        </span>
        <TextSection className="flex-1">{text}</TextSection>
      </div>
      <div className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10 relative">
        <div className="w-full aspect-video items-center justify-center overflow-hidden rounded-2xl relative top-auto lg:sticky lg:top-10">
          <Image
            src={"/portada.png"}
            fill
            alt="Imagen"
            className="object-cover"
          />
        </div>
        <div className="w-full h-fit lg:h-full items-start justify-start flex flex-col">
          {items.map((item, index) => (
            <span
              key={index}
              className="w-full h-fit min-h-[250px] items-start justify-start flex gap-x-5 relative pb-14"
            >
              <span className="w-10 h-full items-center justify-start flex flex-col text-foreground absolute left-0 top-0">
                <div className="bg-primary flex w-full aspect-square items-center justify-center h-auto p-2 rounded-full z-10 text-background">
                  {renderIcon(item.icon)}
                </div>
                <div className="w-[2px] absolute h-full bg-primary rounded-none"></div>
              </span>
              <div className="text-sm md:text-sm xl:text-base text-muted-foreground tracking-wider text-pretty pl-16 flex flex-col gap-y-3">
                <div className="flex flex-col items-start justify-start gap-y-0">
                  <div className="text-lg md:text-xl xl:text-xl text-foreground font-bold tracking-wide">
                    {item.title}
                  </div>
                  <div className="text-base md:text-lg xl:text-lg text-muted-foreground font-bold tracking-wide">
                    {item.year}
                  </div>
                </div>
                {item.text}
              </div>
            </span>
          ))}
        </div>
      </div>
    </UniversalSection>
  );
};
