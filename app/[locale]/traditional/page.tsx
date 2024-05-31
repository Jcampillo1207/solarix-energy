import { HeroUniversal } from "@/components/universal/HeroUniversal";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { GridSection } from "@/components/main/gridSection";
import { UniversalBanner } from "@/components/universal/universalBanner";
import { RareSection } from "@/components/main/universalSection";
import { Sec6 } from "./_components/sec6";
import { Sec2 } from "./_components/sec2";
import { Sec3 } from "./_components/sec3";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("tradicional"),
    description: t("tradicionaldes"),
    openGraph: {
      type: "website",
      url: "solarix.mx",
      title: t("traditional"),
      description: t("traditionaldes"),
      siteName: t("traditional"),
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
  const t = useTranslations("Traditional");
  const u = useTranslations("Universal");

  const panelItems = [
    {
      title: t("Sec3.items.title1"),
      text: t("Sec3.items.text1"),
      icon: "TrendingDown",
    },
    {
      title: t("Sec3.items.title2"),
      text: t("Sec3.items.text2"),
      icon: "ThermometerSun",
    },
  ];

  const gridItems = [
    {
      title: t("Sec2.items.title1"),
    },
    {
      title: t("Sec2.items.title2"),
    },
    {
      title: t("Sec2.items.title3"),
    },
  ];

  const sec5Items = [
    {
      title: t("Sec5.items.title1"),
      text: t("Sec5.items.text1"),
      icon: "Sun",
    },
  ];

  const gridSec = [
    {
      title: t("Sec7.items.title1"),
      text: t("Sec7.items.text1"),
      icon: "CreditCard",
    },
    {
      title: t("Sec7.items.title2"),
      text: t("Sec7.items.text2"),
      icon: "CreditCard",
    },
    {
      title: t("Sec7.items.title3"),
      text: t("Sec7.items.text3"),
      icon: "CreditCard",
    },
    {
      title: t("Sec7.items.title4"),
      text: t("Sec7.items.text4"),
      icon: "CreditCard",
    },
    {
      title: t("Sec7.items.title5"),
      text: t("Sec7.items.text5"),
      icon: "CreditCard",
    },
    {
      title: t("Sec7.items.title6"),
      text: t("Sec7.items.text6"),
      icon: "CreditCard",
    },
    {
      title: t("Sec7.items.title7"),
      text: t("Sec7.items.text7"),
      icon: "CreditCard",
    },
    {
      title: t("Sec7.items.title8"),
      text: t("Sec7.items.text8"),
      icon: "CreditCard",
    },
    {
      title: t("Sec7.items.title9"),
      text: t("Sec7.items.text9"),
      icon: "CreditCard",
    },
  ];

  return (
    <main className="w-full flex flex-col">
      <HeroUniversal
        video="/tradicional.webm"
        cover="/porttrad.png"
        title={t("Hero.subtl")}
        subtitle={t("Hero.title")}
      />
      <Sec2
        btn2={u("btnMore")}
        btn={u("btnCita")}
        title1={t("Sec2.title1")}
        title={t("Sec2.title")}
        text={t("Sec2.text")}
        subtitle={t("Sec2.subtl")}
        items={gridItems}
      />
      <Sec3
        btn={u("btnAgentes")}
        icon="Users"
        title={t("Sec3.title")}
        text={t("Sec3.text")}
        subtitle={t("Sec3.subtl")}
        refer="/agents"
        items={panelItems}
      />
      <Sec6
        btn={u("btnCita")}
        title={t("Sec6.title")}
        text={t("Sec6.text")}
        subtitle={t("Sec6.subtl")}
      />
      <GridSection
        title={t("Sec7.title")}
        text={t("Sec7.text")}
        items={gridSec}
      />
      <UniversalBanner />
    </main>
  );
}
