import Image from "next/image";
import { Header } from "./header";
import { title } from "process";
import VideoComponent from "../main/videoComponent";
import { LogoSolarix } from "../vectors/logoSolarix";
import { SunPower } from "../vectors/logos/sunpower";

interface HeroUniversalProps {
  video: string;
  cover?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  sunpower?: boolean | false;
}

export const HeroUniversal = ({
  video,
  title,
  subtitle,
  children,
  cover,
  sunpower,
}: HeroUniversalProps) => {
  return (
    <section className="w-full items-start justify-start flex flex-col relative min-h-dvh h-dvh">
      <Header />
      <div className="w-full h-full flex flex-col items-start justify-end px-5 md:px-7 lg:px-14 xl:px-36 relative z-20 py-10 md:py-14">
        {(children && children) || (
          <div className="w-full h-fit items-center justify-between flex gap-x-10">
            <div className="w-fit items-start justify-start flex flex-col ">
              <span className="text-lg md:text-xl lg:text-2xl antialiased text-white">
                {title}
              </span>
              {(subtitle && (
                <span className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl text-white font-bold antialiased">
                  {subtitle}
                </span>
              )) ||
                (sunpower && (
                  <SunPower className="h-auto w-full lg:h-24" />
                )) || <LogoSolarix className="h-auto w-full lg:h-24" />}
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-full min-h-dvh items-center justify-center flex absolute top-0 left-0 z-0">
        <div className="w-full h-full absolute bg-gradient-to-t from-black/60 via-transparent to-black/60 z-10" />
        <VideoComponent
          video={video}
          control={false}
          className="h-full min-h-dvh w-auto object-cover"
          muted
          loop
        />
        <Image
          src={cover as string}
          fill
          className="object-cover h-full w-auto md:w-full md:h-auto flex md:hidden"
          alt="Image"
        />
      </div>
    </section>
  );
};
