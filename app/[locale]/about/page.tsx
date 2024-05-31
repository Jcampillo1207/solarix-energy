import { HeroUniversal } from "@/components/universal/HeroUniversal";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Sec2 } from "./_components/sec2";
import { Coparmex } from "@/components/vectors/logos/coparmex";
import { Imga } from "@/components/vectors/logos/imga";
import { Cluster } from "@/components/vectors/logos/cluster";
import { Unison } from "@/components/vectors/logos/unison";
import { Sec3 } from "./_components/sec3";
import { Sec4 } from "./_components/sec4";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about"),
    description: t("aboutdes"),
  };
}

export default function About() {
  const t = useTranslations("About");
  const u = useTranslations("Universal");

  const gridItems = [
    {
      title: t("Sec2.items.title1"),
      text: t("Sec2.items.text1"),
      icon: <Imga />,
    },
    {
      title: t("Sec2.items.title2"),
      text: t("Sec2.items.text2"),
      icon: <Coparmex />,
    },
    {
      title: t("Sec2.items.title3"),
      text: t("Sec2.items.text3"),
      icon: <Cluster />,
    },
    {
      title: t("Sec2.items.title4"),
      text: t("Sec2.items.text4"),
      icon: <Unison />,
    },
  ];

  const valItems = [
    {
      title: t("Sec3.items.title1"),
      icon: "HeartHandshake",
    },
    {
      title: t("Sec3.items.title2"),
      icon: "HeartHandshake",
    },
    {
      title: t("Sec3.items.title3"),
      icon: "HeartHandshake",
    },
    {
      title: t("Sec3.items.title4"),
      icon: "HeartHandshake",
    },
    {
      title: t("Sec3.items.title5"),
      icon: "HeartHandshake",
    },
  ];

  const historyItems = [
    {
      title: t("Sec4.items.title1"),
      text: t("Sec4.items.text1"),
      year: t("Sec4.items.year1"),
      icon: "Footprints",
    },
    {
      title: t("Sec4.items.title2"),
      text: t("Sec4.items.text2"),
      year: t("Sec4.items.year2"),
      icon: "Footprints",
    },
    {
      title: t("Sec4.items.title3"),
      text: t("Sec4.items.text3"),
      year: t("Sec4.items.year3"),
      icon: "Footprints",
    },
  ];

  return (
    <main className="w-full flex flex-col">
      <HeroUniversal
        video="/nos.webm"
        cover="/portabout.png"
        title={t("Hero.subtl")}
      />
      <Sec2
        btn={u("btnCita")}
        title={t("Sec2.title")}
        text={t("Sec2.text")}
        subtitle={t("Sec2.subtl")}
        items={gridItems}
      />
      <Sec3
        titleM={t("Sec3.titleM")}
        titleV={t("Sec3.titleV")}
        titleVal={t("Sec3.titleVal")}
        textM={t("Sec3.textM")}
        textV={t("Sec3.textV")}
        items={valItems}
      />
      <Sec4
        title={t("Sec2.title")}
        text={t("Sec2.text")}
        items={historyItems}
      />
    </main>
  );
}
