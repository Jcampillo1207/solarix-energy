import { OnTitle, TextSection } from "@/components/main/textMain";
import { UniversalSection } from "@/components/main/universalSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/universal/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export async function generateMetadata({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contact"),
    description: t("contactdes"),
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
        <form
          action=""
          className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7 max-w-5xl border border-muted-foreground/20 rounded-2xl p-5 lg:px-10 xl:p-14 bg-muted-foreground/10"
        >
          <div className="w-full h-fit items-start justify-start col-span-1 lg:col-span-2 mb-10">
            <OnTitle className="text-xl md:text-2xl lg:text-3xl text-start tracking-normal">
              Ponte en contacto con nosotros
            </OnTitle>
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="text-muted-foreground">Nombre:</Label>
            <Input
              type="text"
              required
              name="nombre"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="text-muted-foreground">Correo electrónico:</Label>
            <Input
              type="mail"
              required
              name="mail"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="text-muted-foreground">Núm. de teléfono:</Label>
            <Input
              type="tel"
              required
              name="tel"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="text-muted-foreground">Tipo de proyecto:</Label>
            <Select>
              <SelectTrigger className="w-full border border-muted-foreground/20">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                {Tipo.map((tip, index) => {
                  return (
                    <SelectItem key={index} value={tip.title}>
                      {tip.title}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="text-muted-foreground">
              Pago estimado a CFE:
            </Label>
            <Input
              type="text"
              required
              name="money"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="text-muted-foreground">Estado:</Label>
            <Input
              type="text"
              required
              name="state"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="text-muted-foreground">Ciudad:</Label>
            <Input
              type="text"
              required
              name="city"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="text-muted-foreground">
              Tiempo de planeación:
            </Label>
            <Select>
              <SelectTrigger className="w-full border border-muted-foreground/20">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                {Plan.map((tip, index) => {
                  return (
                    <SelectItem key={index} value={tip.title}>
                      {tip.title}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3 col-span-1 lg:col-span-2">
            <Label className="text-muted-foreground">
              Numero de servicio CFE:
            </Label>
            <Input
              type="text"
              required
              name="rpu"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit col-span-1 lg:col-span-2 items-end justify-end flex mt-10">
            <Button variant={"default"} size={"lg"} type="submit" className="bg-white hover:bg-white/80">
              Enviar formulario
            </Button>
          </div>
        </form>
      </UniversalSection>
    </main>
  );
}
