"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import { localeNames, locales } from "../../i18nconfig";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Locale = keyof typeof localeNames;

const flagIcons = {
  "en-US": <ReactCountryFlag countryCode="US" svg />,
  "es-MX": <ReactCountryFlag countryCode="MX" svg />,
};

export default function LocaleSwitcher({className}: {className?: string}) {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      // Remove the current locale from the pathname
      const newPath = pathName!.replace(
        /^\/[a-z]{2}-[A-Z]{2}/,
        `/${newLocale}`
      );
      router.push(newPath);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className={cn("hidden md:flex text", className)}
        >
          {flagIcons[locale as Locale]}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-fit space-y-1">
        {locales.map((loc) => (
          <Button
            key={loc}
            variant={"ghost"}
            size={"icon"}
            onClick={() => switchLocale(loc as Locale)}
          >
            {flagIcons[loc]}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}