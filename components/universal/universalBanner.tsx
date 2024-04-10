import Image from "next/image";
import { UniversalSection } from "../main/universalSection";
import { OnTitle } from "../main/textMain";
import { Button } from "../ui/button";
import Link from "next/link";
import Icon from "../main/icons";
import { useTranslations } from "next-intl";

export const UniversalBanner = () => {
  const t = useTranslations("UniversalBanner");
  return (
    <UniversalSection className="w-full h-fit rounded-2xl items-center justify-center flex flex-col gap-y-3 overflow-hidden relative pt-0 md:pt-0 lg:pt-0 xl:pt-0">
      <div className="w-full h-full items-center justify-start flex flex-col gap-y-5 z-10 relative p-20 rounded-2xl overflow-hidden border">
      <div className="w-full h-full top-0 left-0 absolute z-0 overflow-hidden">
        <Image
          src={"/blacksheet.png"}
          fill
          className="object-cover"
          alt="Banner"
        />
      </div>
        <OnTitle className="z-10 text-center">{t("text")}</OnTitle>
        <Button
          variant={"default"}
          size={"lg"}
          className=" items-center bg-foreground hover:bg-foreground/80 flex gap-x-2 group z-10 mt-5"
          asChild
        >
          <Link href={"/contact"}>
            {t("btn")}
            <Icon
              name={"Phone"}
              className="size-4 group-hover:animate-bounce"
            />
          </Link>
        </Button>
      </div>
    </UniversalSection>
  );
};
