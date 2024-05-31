import { Button } from "@/components/ui/button";
import WhatsApp from "@/components/vectors/wha";
import { Mail, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const AgentCard = ({
  image,
  name,
  phone,
  mail,
}: {
  image: string;
  name: string;
  phone: string;
  mail: string;
}) => {
  const t = useTranslations("Agents");

  return (
    <div className="w-full h-fit items-start justify-start flex flex-col gap-y-5">
      <span className="w-[80%] mx-auto h-auto aspect-square relative overflow-hidden">
        <Image
          fill
          className="object-contain"
          src={image}
          alt={"Avatar" + name}
        />
      </span>
      <div className="w-full items-start justify-start flex flex-col gap-y-1 mt-10">
        <p className="text-base lg:text-lg xl:text-xl text-foreground antialiased font-semibold">
          {name}
        </p>
        <p className="text-sm text-muted-foreground">{t("ases")}</p>
      </div>
      <div className="w-full h-fit items-center justify-start flex flex-col lg:flex-row gap-2">
        <Button
          variant={"default"}
          size={"default"}
          className="flex-grow w-full lg:w-auto bg-foreground text-background hover:text-background hover:bg-foreground"
          asChild
        >
          <Link href={`tel:${phone}`}>
            <PhoneCall className="size-4" />
          </Link>
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="shrink-0 aspect-square w-full lg:w-auto"
          asChild
        >
          <Link href={`https://wa.me/${phone}`} target="_blank">
            <WhatsApp className="size-4" />
          </Link>
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="shrink-0 aspect-square w-full lg:w-auto"
          asChild
        >
          <a href={`mailto:${mail}`} target="_top">
            <Mail className="size-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};
