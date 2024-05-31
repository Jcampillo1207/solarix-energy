import { HeroUniversal } from "@/components/universal/HeroUniversal";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { GridSection } from "@/components/main/gridSection";
import { UniversalBanner } from "@/components/universal/universalBanner";
import { UniversalSection } from "@/components/main/universalSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Mail, PhoneCall, PhoneForwarded } from "lucide-react";
import { PopupForm } from "@/components/ui/popupForm";
import Image from "next/image";
import WhatsApp from "@/components/vectors/wha";
import { AgentCard } from "./_components/agentCard";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/universal/header";
import { Header2 } from "@/components/main/header2";

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("agents"),
    description: t("agents"),
    openGraph: {
      type: "website",
      url: "solarix.mx",
      title: t("angents"),
      description: t("angentsdes"),
      siteName: t("angents"),
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
  const t = useTranslations("Agents");
  const u = useTranslations("Universal");

  const sonora = [
    {
      name: "Victor Meza",
      image: "/victor.PNG",
      phone: "+526621395149",
      mail: "victorm@solarix.mx",
    },
    {
      name: "Juan Carlos Cortés",
      image: "/jc.PNG",
      phone: "+526623648808",
      mail: "jcortes@solarix.mx",
    },
    {
      name: "Daniel Vargas",
      image: "/Daniel.PNG",
      phone: "+526621442840",
      mail: "dvargas@solarix.mx",
    },
    {
      name: "Alfredo Mendoza",
      image: "/alfredo.PNG",
      phone: "+526621669324",
      mail: "alfredomendoza@solarix.mx",
    },
    {
      name: "Hector Uriarte",
      image: "/hector.PNG",
      phone: "+526623473010",
      mail: "ventas@solarix.mx",
    },
  ];

  const cdmx = [
    {
      name: "Javier García",
      image: "/javier.PNG",
      phone: "+526623258720",
      mail: "jgarcia@solarix.mx",
    },
    {
      name: "Zorayda Espinosa",
      image: "/zorayda.PNG",
      phone: "+525564785326",
      mail: "zoraydaespinosa@solarix.mx",
    },
  ];

  const baja = [
    {
      name: "Miguel Gutierrez",
      image: "/miguel.png",
      phone: "+526642627232",
      mail: "miguelgutierrez@solarix.mx",
    },
  ];

  const chiapas = [
    {
      name: "Flavio Sánchez",
      image: "/flavio.png",
      phone: "+529612330083",
      mail: "flaviosanchez@solarix.mx",
    },
  ];

  const jalisco = [
    {
      name: "Raúl Mora",
      image: "/raul.png",
      phone: "+523313959400",
      mail: "raulmora@solarix.mx",
    },
  ];

  const agents = [{}];
  return (
    <main className="w-full flex flex-col">
      <UniversalSection className="w-full h-fit items-start justify-start lg:items-center flex flex-col gap-y-3 px-0 md:px-0 lg:px-0 xl:px-0 pt-0 md:pt-0 lg:pt-0 relative">
        <Header2 className="top-0 sticky" />
        <div className="mx-auto w-full max-w-3xl flex flex-col gap-y-3 items-start justify-start lg:items-center pt-20 md:pt-28 lg:pt-36 px-5 md:px-7">
          <h1 className="text-3xl antialiased text-foreground xl:text-5xl font-semibold text-start lg:text-center text-pretty">
            {t("title")}
          </h1>
          <p className="text-sm xl:text-base antialiased text-muted-foreground text-start lg:text-center">
            {t("text")}
          </p>
          <div className="w-full h-fit items-center justify-center flex flex-col lg:flex-row gap-3 mt-5">
            <Button
              variant={"outline"}
              size={"default"}
              asChild
              className="flex gap-x-2 items-center w-full lg:w-fit"
            >
              <Link href={"/plans"}>
                {t("btn1")}
                <ChevronRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant={"default"}
              size={"default"}
              asChild
              className="flex gap-x-2 items-center w-full lg:w-fit"
            >
              <Link href={"/contact"}>
                {t("btn2")}
                <PhoneForwarded className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </UniversalSection>
      <UniversalSection className="h-fit flex flex-col gap-y-14 lg:gap-y-20 xl:gap-y-24 items-start justify-start pt-0 md:pt-0 lg:pt-0 xl:pt-0">
        <div className="w-full h-fit items-center justify-start flex gap-x-5 lg:gap-10 xl:gap-14">
          <p className="text-lg md:text-xl lg:text-2xl antialiased font-semibold text-nowrap">
            Sonora
          </p>
          <Separator />
        </div>
        <div className="w-full h-fit items-start justify-start grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-14 xl:gap-y-24 max-w-7xl mx-auto">
          {sonora.map((item, i) => {
            return (
              <AgentCard
                key={i}
                name={item.name}
                phone={item.phone}
                image={item.image}
                mail={item.mail}
              />
            );
          })}
        </div>
      </UniversalSection>
      <UniversalSection className="h-fit flex flex-col gap-y-14 lg:gap-y-20 xl:gap-y-24 items-start justify-start pt-0 md:pt-0 lg:pt-0 xl:pt-0">
        <div className="w-full h-fit items-center justify-start flex gap-x-5 lg:gap-10 xl:gap-14">
          <p className="text-lg md:text-xl lg:text-2xl antialiased font-semibold text-nowrap">
            CDMX
          </p>
          <Separator />
        </div>
        <div className="w-full h-fit items-start justify-start grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-14 xl:gap-y-24 max-w-7xl mx-auto">
          {cdmx.map((item, i) => {
            return (
              <AgentCard
                key={i}
                name={item.name}
                phone={item.phone}
                image={item.image}
                mail={item.mail}
              />
            );
          })}
        </div>
      </UniversalSection>
      <UniversalSection className="h-fit flex flex-col gap-y-14 lg:gap-y-20 xl:gap-y-24 items-start justify-start pt-0 md:pt-0 lg:pt-0 xl:pt-0">
        <div className="w-full h-fit items-center justify-start flex gap-x-5 lg:gap-10 xl:gap-14">
          <p className="text-lg md:text-xl lg:text-2xl antialiased font-semibold text-nowrap">
            Baja California
          </p>
          <Separator />
        </div>
        <div className="w-full h-fit items-start justify-start grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-14 xl:gap-y-24 max-w-7xl mx-auto">
          {baja.map((item, i) => {
            return (
              <AgentCard
                key={i}
                name={item.name}
                phone={item.phone}
                image={item.image}
                mail={item.mail}
              />
            );
          })}
        </div>
      </UniversalSection>
      <UniversalSection className="h-fit flex flex-col gap-y-14 lg:gap-y-20 xl:gap-y-24 items-start justify-start pt-0 md:pt-0 lg:pt-0 xl:pt-0">
        <div className="w-full h-fit items-center justify-start flex gap-x-5 lg:gap-10 xl:gap-14">
          <p className="text-lg md:text-xl lg:text-2xl antialiased font-semibold text-nowrap">
            Chiapas
          </p>
          <Separator />
        </div>
        <div className="w-full h-fit items-start justify-start grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-14 xl:gap-y-24 max-w-7xl mx-auto">
          {chiapas.map((item, i) => {
            return (
              <AgentCard
                key={i}
                name={item.name}
                phone={item.phone}
                image={item.image}
                mail={item.mail}
              />
            );
          })}
        </div>
      </UniversalSection>
      <UniversalSection className="h-fit flex flex-col gap-y-14 lg:gap-y-20 xl:gap-y-24 items-start justify-start pt-0 md:pt-0 lg:pt-0 xl:pt-0">
        <div className="w-full h-fit items-center justify-start flex gap-x-5 lg:gap-10 xl:gap-14">
          <p className="text-lg md:text-xl lg:text-2xl antialiased font-semibold text-nowrap">
            Jalisco
          </p>
          <Separator />
        </div>
        <div className="w-full h-fit items-start justify-start grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-14 xl:gap-y-24 max-w-7xl mx-auto">
          {jalisco.map((item, i) => {
            return (
              <AgentCard
                key={i}
                name={item.name}
                phone={item.phone}
                image={item.image}
                mail={item.mail}
              />
            );
          })}
        </div>
      </UniversalSection>
      <UniversalBanner />
    </main>
  );
}
