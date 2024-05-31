import Link from "next/link";
import { LogoSolarix, LogoSolarix2 } from "../vectors/logoSolarix";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { NavMenu } from "../universal/navmenu";

export const Header2 = ({ className }: { className?: string }) => {
  const t = useTranslations("Header");
  return (
    <header
      className={cn(
        "w-full h-16 items-center py-3 justify-between flex px-5 md:px-7 lg:px-14 xl:px-36 sticky top-0 z-[99999] bg-transparent backdrop-blur-[2px] border-b",
        className
      )}
    >
      <Link
        href={"/"}
        className="w-auto h-full flex items-center justify-start"
      >
        <LogoSolarix2 />
      </Link>
      <div className="w-fit h-full flex items-center justify-end gap-x-2 flex-row-reverse">
        <NavMenu />
      </div>
      <div className="w-fit h-fit items-center justify-center gap-x-2 absolute left-1/2 -translate-x-1/2 hidden xl:flex">
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-foreground"
        >
          <Link href={"/"}>{t("home")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-foreground"
        >
          <Link href={"/about"}>{t("about")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-foreground"
        >
          <Link href={"/sunpower"}>{t("sunpower")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-foreground"
        >
          <Link href={"/plans/max"}>{t("max")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-foreground"
        >
          <Link href={"/plans/premium"}>{t("premium")}</Link>
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          asChild
          className="text-sm font-medium text-foreground"
        >
          <Link href={"/plans/traditional"}>{t("traditional")}</Link>
        </Button>
      </div>
    </header>
  );
};
