"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Settings, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { Placa } from "../vectors/placa";
import { useTranslations } from "next-intl";
import { LogoSolarix } from "../vectors/logoSolarix";
import LocaleSwitcher from "./lang-switcher";

export const Footer = () => {
  const t = useTranslations("Footer");
  const p = useTranslations("Header");
  return (
    <footer className="w-full h-fit flex flex-col items-center justify-start gap-y-14 bg-input py-14 px-5 md:px-7 lg:px-14">
      <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-12 items-stretch justify-center gap-y-16">
        <span className="w-full h-fit col-span-2 lg:col-span-4 flex flex-row lg:flex-col gap-y-4 justify-between">
          <div className="h-14 aspect-video py-3">
            <Link href={"/"} className="h-full">
              <LogoSolarix />
            </Link>
          </div>
          <div className="flex gap-x-3 items-center justify-start w-fit">
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
          </div>
        </span>
        <span className="w-full h-fit flex flex-col col-span-1 lg:col-span-2 gap-y-4 text-muted-foreground text-sm">
          <h2 className="text-foreground text-base font-semibold">
            {t("plan")}
          </h2>
          <Link
            href={"/plans/max"}
            className="hover:underline hover:text-foreground flex gap-x-2 items-center"
          >
            {t("Planes.max")}
          </Link>
          <Link
            href={"/plans/premium"}
            className="hover:underline hover:text-foreground flex gap-x-1 items-center"
          >
            {t("Planes.premium")}
          </Link>
          <Link
            href={"/plans/traditional"}
            className="hover:underline hover:text-foreground flex gap-x-2 items-center"
          >
            {t("Planes.tradicional")}
          </Link>
          <Link
            href={"/plans/offgrid"}
            className="hover:underline hover:text-foreground flex gap-x-2 items-center"
          >
            {t("Planes.offgrid")}
          </Link>
        </span>
        <span className="w-full h-fit flex flex-col col-span-1 lg:col-span-2 gap-y-4 text-muted-foreground text-sm">
          <h2 className="text-foreground text-base font-semibold">
            {t("acerca")}
          </h2>
          <Link
            href={"/about"}
            className="hover:underline hover:text-foreground"
          >
            {t("Acerca.about")}
          </Link>
          <Link
            href={"/agents"}
            className="hover:underline hover:text-foreground"
          >
            {t("Acerca.agentes")}
          </Link>
          <Link
            href={"/sunpower"}
            className="hover:underline hover:text-foreground"
          >
            {t("Acerca.sunpower")}
          </Link>
        </span>
        <span className="w-full h-fit flex flex-col col-span-1 lg:col-span-2 gap-y-4 text-muted-foreground text-sm">
          <h2 className="text-foreground text-base font-semibold">
            {t("contacto")}
          </h2>
          <Link
            href={"mailto:ventas@solarix.mx"}
            className="hover:underline hover:text-foreground"
          >
            {t("Contacto.mail")}
          </Link>
          <Link
            href={"tel:6622606761"}
            className="hover:underline hover:text-foreground"
          >
            {t("Contacto.phone")}
          </Link>
          <Link
            href={"/contact"}
            className="hover:underline hover:text-foreground"
          >
            {t("Contacto.support")}
          </Link>
        </span>
        <span className="w-full h-fit flex flex-col col-span-1 lg:col-span-2 gap-y-4 text-muted-foreground text-sm">
          <h2 className="text-foreground text-base font-semibold">
            {p("preferences")}
          </h2>
          <span className="w-full h-fit items-center justify-between flex px-0">
            <p className="tex-sm text-muted-foreground">{p("idiom")}</p>
            <LocaleSwitcher className="border bg-background flex" />
          </span>
        </span>
      </div>
      <div className="w-full h-fit pt-7 border-t border-muted-foreground/40 flex flex-col items-center justify-center text-muted-foreground/60 text-sm">
        <p>&copy; Solarix Energy, 2024. {t("Derechos")}</p>
        <Link
          href={"https://www.intelloai.com"}
          target="_blank"
          className="pt-5 pb-3 group"
        >
          <Placa />
        </Link>
      </div>
    </footer>
  );
};
