import { HeroUniversal } from "@/components/universal/HeroUniversal";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Sec2 } from "./_components/sec2";
import { Sec3 } from "./_components/sec3";
import { Sec4 } from "./_components/sec4";
import { Sec5 } from "./_components/sec5";
import { Sec6 } from "./_components/sec6";
import { Sec7 } from "./_components/sec7";
import { GridSection } from "@/components/main/gridSection";
import { UniversalBanner } from "@/components/universal/universalBanner";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("max"),
    description: t("maxdes"),
    openGraph: {
      type: "website",
      url: "solarix.mx",
      title: t("max"),
      description: t("maxdes"),
      siteName: t("max"),
      images: [
        {
          url: `https://flsqnnbcmtmltxmnygwe.supabase.co/storage/v1/object/sign/Grupo%20Expertix/ll.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHcnVwbyBFeHBlcnRpeC9sbC5wbmciLCJpYXQiOjE3MTcxMzM1MzIsImV4cCI6NDg3MDczMzUzMn0.83tSL_iBhWb24jTKzyWADE4JWoEoZQ-ymRnf9aRqjAw&t=2024-05-31T05%3A32%3A12.147Z`,
          height: 600,
          width: 800,
        },
      ],
    },
  };
}

export default function PlanMax() {
  const t = useTranslations("Max");
  const u = useTranslations("Universal");

  const gridItems = [
    {
      title: t("Sec2.items.title1"),
      text: t("Sec2.items.text1"),
      icon: "Sun",
    },
    {
      title: t("Sec2.items.title2"),
      text: t("Sec2.items.text2"),
      icon: "Sun",
    },
  ];

  const gridSec = [
    {
      title: t("Sec8.items.title1"),
      text: t("Sec8.items.text1"),
      icon: "CreditCard",
    },
    {
      title: t("Sec8.items.title2"),
      text: t("Sec8.items.text2"),
      icon: "CreditCard",
    },
    {
      title: t("Sec8.items.title3"),
      text: t("Sec8.items.text3"),
      icon: "CreditCard",
    },
    {
      title: t("Sec8.items.title4"),
      text: t("Sec8.items.text4"),
      icon: "CreditCard",
    },
    {
      title: t("Sec8.items.title5"),
      text: t("Sec8.items.text5"),
      icon: "CreditCard",
    },
    {
      title: t("Sec8.items.title6"),
      text: t("Sec8.items.text6"),
      icon: "CreditCard",
    },
    {
      title: t("Sec8.items.title7"),
      text: t("Sec8.items.text7"),
      icon: "CreditCard",
    },
    {
      title: t("Sec8.items.title8"),
      text: t("Sec8.items.text8"),
      icon: "CreditCard",
    },
    {
      title: t("Sec8.items.title9"),
      text: t("Sec8.items.text9"),
      icon: "CreditCard",
    },
  ];

  const panelItems = [
    {
      title: t("Sec3.items.title1"),
      text: t("Sec3.items.text1"),
    },
    {
      title: t("Sec3.items.title2"),
      text: t("Sec3.items.text2"),
    },
    {
      title: t("Sec3.items.title3"),
      text: t("Sec3.items.text3"),
    },
  ];

  const specsItems = [
    {
      title: t("Sec5.items.title1"),
      text: t("Sec5.items.text1"),
      icon: "Box",
    },
    {
      title: t("Sec5.items.title2"),
      text: t("Sec5.items.text2"),
      icon: "Cog",
    },
    {
      title: t("Sec5.items.title3"),
      text: t("Sec5.items.text3"),
      icon: "Wrench",
    },
  ];

  return (
    <main className="w-full flex flex-col">
      <HeroUniversal
        video="/solareon.webm"
        cover="/portmax.png"
        title={t("Hero.subtl")}
        subtitle={t("Hero.title")}
      />
      <Sec2
        btn={u("btnAgentes")}
        icon="Users"
        title={t("Sec2.title")}
        text={t("Sec2.text")}
        subtitle={t("Sec2.subtl")}
        refer="/agents"
        items={gridItems}
      />
      <Sec3
        btn={u("btnCita")}
        title={t("Sec3.title")}
        text={t("Sec3.text")}
        subtitle={t("Sec3.subtl")}
        video="/gridmax.mp4"
        items={panelItems}
      />
      <Sec4
        btn={u("btnCita")}
        btn2={t("Sec4.btn")}
        title={t("Sec3.title")}
        text={t("Sec3.text")}
        subtitle={t("Sec3.subtl")}
        refer="/contact"
        title2={t("Sec4.items.title1")}
        text1={t("Sec4.items.text1")}
        text2={t("Sec4.items.text2")}
        text3={t("Sec4.items.text3")}
      />
      <Sec5
        btn={u("btnCita")}
        title={t("Sec2.title")}
        text={t("Sec2.text")}
        subtitle={t("Sec2.subtl")}
        items={specsItems}
      />
      <Sec6
        btn={t("Sec6.btn")}
        icon="ArrowRight"
        title={t("Sec6.title")}
        text={t("Sec6.text")}
        subtitle={t("Sec6.subtl")}
        refer="https://sunpower.maxeon.com/mx/sites/default/files/2022-05/sp_max3_104c_blk_375-355_dc_ds_es_a4_544453.pdf"
        image={"/blacksheet.png"}
        title1={t("Sec6.title1")}
        title2={t("Sec6.title2")}
      />
      <Sec7
        btn={u("btnCita")}
        title={t("Sec7.title")}
        text={t("Sec7.text")}
        subtitle={t("Sec7.subtl")}
      />
      <GridSection
        title={t("Sec8.title")}
        text={t("Sec8.text")}
        items={gridSec}
      />
      <UniversalBanner />
    </main>
  );
}
