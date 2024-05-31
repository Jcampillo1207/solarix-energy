import { cn } from "@/lib/utils";
import Image from "next/image";
import VideoComponent from "./videoComponent";
import { OnSubtitle, OnTitle, TextSection } from "./textMain";
import { Button } from "../ui/button";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import Icon from "./icons";
import { PopupForm } from "../ui/popupForm";

export const UniversalSection = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        "w-full h-[100dvh] px-5 md:px-7 lg:px-14 xl:px-36 py-14 md:py-20 lg:py-28",
        className
      )}
    >
      {children}
    </section>
  );
};

export const AdjustableSection = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        "w-full h-fit px-5 md:px-7 lg:px-14 xl:px-36 py-14 md:py-20 lg:py-28",
        className
      )}
    >
      {children}
    </section>
  );
};

interface RareSectionProps {
  image?: string;
  video?: string;
  className?: string;
  title: string;
  subtl: string;
  text: string;
  btn: string;
  children?: React.ReactNode;
  refer?: string;
  icon?: string;
}

export const RareSection = ({
  image,
  video,
  className,
  title,
  subtl,
  text,
  btn,
  children,
  refer,
  icon,
}: RareSectionProps) => {
  return (
    <section
      className={cn(
        "w-full h-fit lg:h-[100dvh] items-start justify-start grid grid-cols-1 lg:grid-cols-12",
        className
      )}
    >
      <div className="w-full h-fit lg:h-full bg-primary relative overflow-hidden flex items-center justify-center col-span-1 lg:col-span-8">
        {(video && (
          <VideoComponent
            video={video}
            className="h-full w-auto object-cover"
          />
        )) ||
          (image && (
            <Image
              src={image as string}
              fill
              className="object-cover h-full"
              alt="Image"
            />
          )) ||
          children}
      </div>
      <div className="col-span-1 lg:col-span-4 w-full h-fit lg:h-full items-start flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 lg:pl-7 xl:pl-7 py-10 lg:py-14 xl:py-20 justify-between">
        <div className="flex flex-col items-start justify-between gap-y-5 w-full h-fit lg:h-full">
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-7">
            <span className="flex flex-col items-start justify-start">
              <OnSubtitle>{subtl}</OnSubtitle>
              <OnTitle className="font-bold">{title}</OnTitle>
            </span>
            <TextSection>{text}</TextSection>
          </div>
          <div className="w-full h-fit">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export const RareSection2 = ({
  image,
  video,
  className,
  title,
  subtl,
  btn,
  text,
  children,
  refer,
  icon,
}: RareSectionProps) => {
  return (
    <section
      className={cn(
        "w-full h-fit lg:h-[100dvh] items-start justify-start grid grid-cols-1 lg:grid-cols-12",
        className
      )}
    >
      <div className="col-span-1 lg:col-span-4 w-full h-fit lg:h-full items-start flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 lg:pr-7 xl:pr-7 py-10 lg:py-14 xl:py-20 justify-between">
        <div className="flex flex-col items-start justify-between gap-y-5 w-full h-fit lg:h-full">
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-7">
            <span className="flex flex-col items-start justify-start">
              <OnSubtitle>{subtl}</OnSubtitle>
              <OnTitle className="font-bold">{title}</OnTitle>
            </span>
            <TextSection>{text}</TextSection>
          </div>
          <div className="w-full h-fit">
            {(refer && icon && (
              <Button
                variant={"default"}
                size={"lg"}
                className="w-full items-center bg-foreground hover:bg-foreground/80 flex gap-x-2 group lg:mt-5"
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
          </div>
        </div>
      </div>
      <div className="w-full h-fit min-h-[400px] lg:min-h-0 bg-primary relative overflow-hidden flex items-center justify-center col-span-1 lg:col-span-8">
        {(video && (
          <VideoComponent
            video={video}
            className="h-full w-auto object-cover"
          />
        )) ||
          (image && (
            <Image
              src={image as string}
              fill
              className="object-cover h-full"
              alt="Image"
            />
          )) ||
          children}
      </div>
    </section>
  );
};

export const RareSection3Vertical = ({
  image,
  video,
  className,
  title,
  subtl,
  btn,
  text,
  children,
  refer,
  icon,
}: RareSectionProps) => {
  return (
    <section
      className={cn(
        "w-full h-fit lg:h-[100dvh] items-start justify-start flex flex-col-reverse",
        className
      )}
    >
      <div className="w-full h-fit lg:h-full items-start grid grid-cols-1 lg:grid-cols-2 px-5 md:px-7 lg:px-14 xl:px-36 lg:pl-7 xl:pl-7 py-10 lg:py-14 xl:py-20 justify-between">
        <div className="flex flex-col items-start justify-between gap-y-5 w-full h-fit">
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-7">
            <span className="flex flex-col items-start justify-start">
              <OnSubtitle>{subtl}</OnSubtitle>
              <OnTitle className="font-bold">{title}</OnTitle>
            </span>
            <TextSection>{text}</TextSection>
          </div>
          <div className="w-full h-fit">
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
          </div>
        </div>
      </div>
        <div className="w-full h-full bg-primary relative overflow-hidden flex items-center justify-center">
          {(video && (
            <VideoComponent
              video={video}
              className="h-auto w-full object-cover"
            />
          )) ||
            (image && (
              <Image
                src={image as string}
                fill
                className="object-cover"
                alt="Image"
              />
            )) ||
            children}
        </div>
    </section>
  );
};
