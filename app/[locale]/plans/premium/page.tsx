import { HeroUniversal } from "@/components/universal/HeroUniversal";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { GridSection } from "@/components/main/gridSection";
import { UniversalBanner } from "@/components/universal/universalBanner";
import { Sec2 } from "./_components/sec2";
import { RareSection } from "@/components/main/universalSection";
import { Sec4 } from "./_components/sec4";
import { Sec5 } from "./_components/sec5";
import { Sec6 } from "./_components/sec6";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("premium"),
    description: t("premiumdes"),
  };
}

export default function PlanMax() {
  const t = useTranslations("Premium");
  const u = useTranslations("Universal");

  const panelItems = [
    {
      title: t("Sec4.items.title1"),
      text: t("Sec4.items.text1"),
    },
    {
      title: t("Sec4.items.title2"),
      text: t("Sec4.items.text2"),
    },
    {
      title: t("Sec4.items.title3"),
      text: t("Sec4.items.text3"),
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
    {
      title: t("Sec2.items.title4"),
    },
    {
      title: t("Sec2.items.title5"),
    },
    {
      title: t("Sec2.items.title6"),
    },
  ];

  const sec5Items = [
    {
      title: t("Sec5.items.title1"),
      text: t("Sec5.items.text1"),
      icon: "Sun",
    }
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
        video="/premiummm.webm"
        cover="/portada.png"
        title={t("Hero.subtl")}
        subtitle={t("Hero.title")}
      />
      <Sec2
        btn={u("btnAgentes")}
        title1={t("Sec2.title1")}
        icon="Users"
        title={t("Sec2.title")}
        text={t("Sec2.text")}
        subtitle={t("Sec2.subtl")}
        refer="/agents"
        items={gridItems}
      />
      <RareSection
        btn={u("btnCita")}
        title={t("Sec3.title")}
        subtl={t("Sec3.subtl")}
        text={t("Sec3.text")}
        video="/performance.webm"
      />
      <Sec4
        btn={u("btnCita")}
        title={t("Sec4.title")}
        text={t("Sec4.text")}
        subtitle={t("Sec4.subtl")}
        image="/perfpan.png"
        items={panelItems}
      />
      <Sec5
        btn={u("btnCita")}
        title={t("Sec5.title")}
        text={t("Sec5.text")}
        subtitle={t("Sec5.subtl")}
        items={sec5Items}
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
