import { OnTitle, TextSection } from "@/components/main/textMain";
import { UniversalSection } from "@/components/main/universalSection";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/universal/header";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { FormDefault } from "@/components/ui/formdefault";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contact"),
    description: t("contactdes"),
    openGraph: {
      type: "website",
      url: "solarix.mx",
      title: t("contact"),
      description: t("contactdes"),
      siteName: t("contact"),
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
  const t = useTranslations("Contact");
  const u = useTranslations("Universal");

  const Tipo = [
    {
      title: t("form.tipos.title1"),
    },
    {
      title: t("form.tipos.title2"),
    },
    {
      title: t("form.tipos.title3"),
    },
    {
      title: t("form.tipos.title4"),
    },
    {
      title: t("form.tipos.title5"),
    },
    {
      title: t("form.tipos.title6"),
    },
  ];

  const Plan = [
    {
      title: t("form.plan.title1"),
    },
    {
      title: t("form.plan.title2"),
    },
    {
      title: t("form.plan.title3"),
    },
    {
      title: t("form.plan.title4"),
    },
    {
      title: t("form.plan.title5"),
    },
  ];

  return (
    <main className="w-full flex flex-col relative bg-white dark:bg-background">
      <Header />
      <UniversalSection className="w-full h-fit items-center justify-center flex flex-col gap-y-10 relative">
        <OnTitle className="text-4xl md:text-5xl lg:text-6xl text-center tracking-normal">
          {t("title")}
        </OnTitle>
        <TextSection className="max-w-3xl mx-auto text-center">
          {t("text")}
        </TextSection>
        <div className="w-full flex items-center justify-center gap-x-2 h-fit">
          <Button variant={"outline"} size={"icon"} asChild>
            <Link
              href={"https://www.facebook.com/SolarixEnergy/?locale=es_LA"}
              target="_blank"
              className="hover:bg-primary group"
            >
              <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-white" />
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"} asChild>
            <Link
              href={"https://www.instagram.com/solarixenergymx/"}
              target="_blank"
              className="hover:bg-primary group"
            >
              <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-white" />
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"} asChild>
            <Link
              href={"https://twitter.com/SolarixEnergy"}
              target="_blank"
              className="hover:bg-primary group"
            >
              <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-white" />
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"} asChild>
            <Link
              href={"https://www.linkedin.com/company/solarix-energy/"}
              target="_blank"
              className="hover:bg-primary group"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-white" />
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"} asChild>
            <Link
              href={"https://www.linkedin.com/company/solarix-energy/"}
              target="_blank"
              className="hover:bg-primary group"
            >
              <Phone className="w-4 h-4 text-muted-foreground group-hover:text-white" />
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"} asChild>
            <Link
              href={"https://www.linkedin.com/company/solarix-energy/"}
              target="_blank"
              className="hover:bg-primary group"
            >
              <Mail className="w-4 h-4 text-muted-foreground group-hover:text-white" />
            </Link>
          </Button>
        </div>
        <FormDefault aa/>
      </UniversalSection>
    </main>
  );
}
