import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LocaleSwitcher from "../main/lang-switcher";
import { Button } from "../ui/button";
import {
  ChevronRight,
  Home,
  MenuIcon,
  SunMedium,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./theme";

export const NavMenu = () => {
  const t = useTranslations("Header");
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-foreground"
          >
            <MenuIcon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-scroll pt-0">
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3 relative max-h-[calc(100dvh_-_24px)]">
            <div className="w-full h-fit pb-10 sticky top-0 z-[9999] bg-background pt-6">
              <SheetClose asChild>
                <Button
                  variant={"outline"}
                  size={"default"}
                  className="w-full items-center justify-between"
                >
                  {t("close")}
                  <X className="size-4" />
                </Button>
              </SheetClose>
            </div>
            <p className="text-base">{t("navigation")}</p>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/"}>
                  {t("home")} <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/about"}>
                  {t("about")}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/sunpower"}>
                  {t("sunpower")}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/max"}>
                  {t("max")}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/premium"}>
                  {t("premium")}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/traditional"}>
                  {t("traditional")}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/offgrid"}>
                  {t("offgrid")}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/contact"}>
                  {t("support")}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                asChild
                className="text-sm font-medium w-full flex items-center justify-between text-muted-foreground"
              >
                <Link href={"/agents"}>
                  {t("agents")}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </SheetClose>
            <div className="w-full h-fit py-5">
              <Separator className="w-full rounded-full" />
            </div>
            <p className="text-base">{t("preferences")}</p>
            <span className="w-full h-fit items-center justify-between flex px-4">
              <p className="tex-sm text-muted-foreground">{t("idiom")}</p>
              <LocaleSwitcher className="border flex"/>
            </span>
            <span className="w-full h-fit items-center justify-between flex px-4">
              <p className="tex-sm text-muted-foreground">{t("theme")}</p>
              <ModeToggle className="text-foreground"/>
            </span>
          </div>
        </SheetContent>
      </Sheet>
      <LocaleSwitcher />
      <ModeToggle className="text-foreground"/>
    </>
  );
};
