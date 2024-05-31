import { HeroUniversal } from "@/components/universal/HeroUniversal";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Sec2 } from "../about/_components/sec2";
import { PanelIcon } from "@/components/vectors/logos/panel";
import { MapIcon, SunIcon, TrendingUp } from "lucide-react";
import { Sec2 as Logos } from "@/app/_components/sec2";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("sunpower"),
    description: t("sunpowerdes"),
  };
}

export default function SunPower() {
  const t = useTranslations("Sunpower");
  const u = useTranslations("Universal");

  const gridItems = [
    {
      title: t("Sec2.items.title1"),
      icon: <SunIcon className="size-14 text-primary" strokeWidth={1}/>,
    },
    {
      title: t("Sec2.items.title2"),
      icon: <PanelIcon className="size-14" />,
    },
    {
      title: t("Sec2.items.title3"),
      icon: <TrendingUp className="size-14 text-primary" strokeWidth={1}/>,
    },
    {
      title: t("Sec2.items.title4"),
      icon: <MapIcon className="size-14 text-white" strokeWidth={1}/>,
    },
  ];

  return (
    <main className="w-full flex flex-col">
      <HeroUniversal
        sunpower
        video="/maxeonvidpp.webm"
        cover="/portsunp.png"
        title={t("Hero.subtl")}
      />
      <Sec2
        refer="/"
        btn={u("btnCita")}
        title={t("Sec2.title")}
        text={t("Sec2.text")}
        subtitle={t("Sec2.subtl")}
        className="min-h-fit aspect-square"
        items={gridItems}
      />
      <Logos title={t("Sec3.title")}/>
    </main>
  );
}
