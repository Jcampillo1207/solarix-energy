import { Button } from "@/components/ui/button";
import { HeroUniversal } from "@/components/universal/HeroUniversal";
import { PartnerPremier } from "@/components/vectors/premiere";
import { CalendarDays, Hourglass, MapPinned, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Sec2 } from "../_components/sec2";
import {
  RareSection,
  RareSection2,
  RareSection3Vertical,
} from "@/components/main/universalSection";
import { GridSection } from "@/components/main/gridSection";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { PopupForm } from "@/components/ui/popupForm";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("home"),
    description: t("homedes"),
  };
}

export default function Home() {
  const t = useTranslations("Home");
  const u = useTranslations("Universal");
  const gridItems = [
    {
      title: t("Sec6.grid.title1"),
      text: t("Sec6.grid.text1"),
      icon: t("Sec6.grid.icon1"),
    },
    {
      title: t("Sec6.grid.title2"),
      text: t("Sec6.grid.text2"),
      icon: t("Sec6.grid.icon2"),
    },
    {
      title: t("Sec6.grid.title3"),
      text: t("Sec6.grid.text3"),
      icon: t("Sec6.grid.icon3"),
    },
    {
      title: t("Sec6.grid.title4"),
      text: t("Sec6.grid.text4"),
      icon: t("Sec6.grid.icon4"),
    },
    {
      title: t("Sec6.grid.title5"),
      text: t("Sec6.grid.text5"),
      icon: t("Sec6.grid.icon5"),
    },
    {
      title: t("Sec6.grid.title6"),
      text: t("Sec6.grid.text6"),
      icon: t("Sec6.grid.icon6"),
    },
    {
      title: t("Sec6.grid.title7"),
      text: t("Sec6.grid.text7"),
      icon: t("Sec6.grid.icon7"),
    },
    {
      title: t("Sec6.grid.title8"),
      text: t("Sec6.grid.text8"),
      icon: t("Sec6.grid.icon8"),
    },
    {
      title: t("Sec6.grid.title9"),
      text: t("Sec6.grid.text9"),
      icon: t("Sec6.grid.icon9"),
    },
  ];
  return (
    <main className="w-full flex flex-col">
      <HeroUniversal video="/portada.webm" cover="/portada.png">
        <div className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-12 gap-x-7 lg:gap-x-14 gap-y-5">
          <div className="w-full h-fit items-center justify-center col-span-1 lg:col-span-4 hidden lg:flex">
            <PartnerPremier className="w-64" />
          </div>
          <div className="w-full h-fit items-center justify-center grid grid-cols-3 gap-x-5 col-span-1 lg:col-span-4 text-white">
            <span className="w-full h-fit items-center justify-center flex flex-col gap-y-3">
              <ShieldCheck className="size-6" />
              <p className="text-center text-sm">{t("Hero.kpi1")}</p>
            </span>
            <span className="w-full h-fit items-center justify-center flex flex-col gap-y-3">
              <Hourglass className="size-6" />
              <p className="text-center text-sm">{t("Hero.kpi2")}</p>
            </span>
            <span className="w-full h-fit items-center justify-center flex flex-col gap-y-3">
              <MapPinned className="size-6" />
              <p className="text-center text-sm">{t("Hero.kpi3")}</p>
            </span>
          </div>
          <div className="w-full h-fit items-center justify-center col-span-1 lg:col-span-4">
            <PopupForm btn={u("btnCita")}/>
          </div>
        </div>
      </HeroUniversal>
      <Sec2 title={t("Sec2.title")} />
      <RareSection
        btn={u("btnCita")}
        title={t("Sec3.title")}
        subtl={t("Sec3.subtl")}
        text={t("Sec3.text")}
        video="/sec1.mp4"
      />
      <RareSection2
        btn={u("btnCita")}
        title={t("Sec5.title")}
        subtl={t("Sec5.subtl")}
        text={t("Sec5.text")}
        image="/maxin.JPG"
      />
      <GridSection
        title={t("Sec6.title")}
        text={t("Sec6.text")}
        items={gridItems}
      />
      <RareSection
        btn={u("btnAgentes")}
        title={t("Sec7.title")}
        subtl={t("Sec7.subtl")}
        text={t("Sec7.text")}
        refer="/agents"
        icon="Users"
      >
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1okQiUdWi8fs1GqJIz6_qxPC_MhyAMjs&amp;ehbc=2E312F&amp;noprof=1"
          width="100%"
          height="100%"
          title="Mapa Solarix"
          draggable="true"
        ></iframe>
      </RareSection>
      <RareSection3Vertical
        btn={u("btnCita")}
        title={t("Sec8.title")}
        subtl={t("Sec8.subtl")}
        text={t("Sec8.text")}
        video="/anim.mp4"
      />
    </main>
  );
}
