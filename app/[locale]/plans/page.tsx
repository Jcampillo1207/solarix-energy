import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("plans"),
    description: t("plansdes"),
  };
}

export default function Planes() {
  const t = useTranslations("Plans");
  const u = useTranslations("Universal");

  return (
    <main className="w-full flex flex-col">
      
    </main>
  );
}
