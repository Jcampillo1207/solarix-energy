import { HeroUniversal } from "@/components/universal/HeroUniversal";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { GridSection } from "@/components/main/gridSection";
import { UniversalBanner } from "@/components/universal/universalBanner";
import { Sec2 } from "./_components/section2";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("offgrid"),
    description: t("offgriddes"),
    openGraph: {
      type: "website",
      url: "solarix.mx",
      title: t("offgrid"),
      description: t("offgriddes"),
      siteName: t("offgrid"),
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
  const t = useTranslations("Offgrid");
  const u = useTranslations("Universal");

  const specsItems = [
    {
      title: t("Sec2.items.title1"),
      text: t("Sec2.items.text1"),
      icon: "Power",
    },
    {
      title: t("Sec2.items.title2"),
      text: t("Sec2.items.text2"),
      icon: "BatteryCharging",
    },
    {
      title: t("Sec2.items.title3"),
      text: t("Sec2.items.text3"),
      icon: "ServerCrash",
    },
    {
      title: t("Sec2.items.title4"),
      text: t("Sec2.items.text4"),
      icon: "Blend",
      className: "xl:col-span-2"
    },
    {
      title: t("Sec2.items.title5"),
      text: t("Sec2.items.text5"),
      icon: "TrendingUp",
      className: "md:col-span-2 xl:col-span-1"
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
        video="/aislado.webm"
        cover="/portoff.png"
        title={t("Hero.subtl")}
        subtitle={t("Hero.title")}
      />
      <Sec2
        btn={u("btnCita")}
        title={t("Sec2.title")}
        text={t("Sec2.text")}
        subtitle={t("Sec2.subtl")}
        items={specsItems}
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
