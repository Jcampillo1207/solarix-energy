import Link from "next/link";
import { LogoSolarix } from "../vectors/logoSolarix";
import { NavMenu } from "./navmenu";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="w-full h-16 items-center py-3 justify-between flex px-5 md:px-7 lg:px-14 xl:px-36 sticky top-0 z-[99999] bg-transparent backdrop-blur-[2px]">
      <Link
        href={"/"}
        className="w-auto h-full flex items-center justify-start"
      >
        <LogoSolarix />
      </Link>
      <div className="w-fit h-full flex items-center justify-end gap-x-2 flex-row-reverse">
        <NavMenu />
      </div>
      <div className="w-fit h-fit items-center justify-center gap-x-2 absolute left-1/2 -translate-x-1/2 hidden xl:flex">
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-white"
        >
          <Link href={"/"}>{t("home")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-white"
        >
          <Link href={"/about"}>{t("about")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-white"
        >
          <Link href={"/sunpower"}>{t("sunpower")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-white"
        >
          <Link href={"/plans/max"}>{t("max")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-white"
        >
          <Link href={"/plans/premium"}>{t("premium")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-white"
        >
          <Link href={"/plans/traditional"}>{t("traditional")}</Link>
        </Button>
      </div>
    </header>
  );
};
