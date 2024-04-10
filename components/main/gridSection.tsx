import React from "react";
import Icon from "./icons";
import { OnSubtitle, OnTitle, TextSection } from "./textMain";
import { UniversalSection } from "./universalSection";

interface GridItem {
  title: string;
  text: string;
  icon: string | React.ReactElement;
}

interface GridSectionProps {
  title: string;
  text: string;
  items: GridItem[];
}

export const GridSection = ({
  title,
  text,
  items,
}: GridSectionProps) => {
  const renderIcon = (icon: string | React.ReactElement) => {
    if (typeof icon === "string") {
      // Si icon es una cadena, renderiza el componente Icon.
      return <Icon name={icon} className="size-5"/>;
    } else {
      // Si icon es un elemento de React, lo renderiza directamente.
      return icon;
    }
  };

  return (
    <UniversalSection className="w-full h-fit items-start justify-start flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-24">
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-7  max-w-5xl">
        <span className="flex flex-col items-start justify-start">
          <OnTitle>{title}</OnTitle>
        </span>
        <TextSection>{text}</TextSection>
      </div>
      <div className="w-full h-fit items-start justify-start grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 lg:gap-y-7">
        {items.map((item, index) => (
          <span
            key={index}
            className="w-full aspect-video items-start justify-start flex flex-col gap-y-5 hover:bg-muted-foreground/10 transition-colors cursor-default p-5 rounded-xl"
          >
            <span className="w-full h-fit items-start justify-start flex flex-col gap-y-4 text-foreground">
              <div className="bg-background flex items-center justify-center size-fit p-2 aspect-square rounded-lg">
                {renderIcon(item.icon)}
              </div>
              <div className="text-lg md:text-xl xl:text-xl text-foreground font-bold tracking-wide">
                {item.title}
              </div>
            </span>
            <div className="text-sm md:text-sm xl:text-base text-muted-foreground tracking-wider">
              {item.text}
            </div>
          </span>
        ))}
      </div>
    </UniversalSection>
  );
};
