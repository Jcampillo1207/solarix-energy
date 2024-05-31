import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import Icon from "../main/icons";
import { Label } from "./label";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { OnTitle } from "../main/textMain";
import { useTranslations } from "next-intl";

export const PopupForm = ({ btn }: { btn: string }) => {
  const t = useTranslations("Contact");
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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"default"}
          size={"lg"}
          className="w-full items-center bg-foreground hover:bg-foreground/80 flex gap-x-2 group mt-5 max-w-3xl cursor-pointer"
          asChild
        >
          <div className="flex items-center gap-x-2">
            {btn}
            <Icon
              name={"CalendarDays"}
              className="size-4 group-hover:animate-bounce"
            />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[70vh] overflow-scroll">
        <form
          action=""
          className="w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7 max-w-5xl"
        >
          <div className="w-full h-fit items-start justify-start col-span-1 lg:col-span-2 mb-10">
            <OnTitle className="text-xl md:text-2xl lg:text-3xl text-start tracking-normal">
              {t("title")}
            </OnTitle>
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="">{t("form.namel")}:</Label>
            <Input
              type="text"
              required
              placeholder={t("form.namep")}
              name="nombre"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="">{t("form.maill")}:</Label>
            <Input
              type="mail"
              required
              placeholder={t("form.mailp")}
              name="mail"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="">{t("form.phonel")}:</Label>
            <Input
              type="tel"
              required
              placeholder={t("form.phonep")}
              name="tel"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="">{t("form.tipol")}:</Label>
            <Select>
              <SelectTrigger className="w-full border border-muted-foreground/20">
                <SelectValue placeholder={t("form.tipop")} />
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
            <Label className="">
            {t("form.pagol")}:
            </Label>
            <Input
              type="text"
              required
              placeholder={t("form.pagop")}
              name="money"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="">{t("form.estadol")}:</Label>
            <Input
              type="text"
              required
              placeholder={t("form.estadop")}
              name="state"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="">{t("form.ciudadl")}:</Label>
            <Input
              type="text"
              required
              placeholder={t("form.ciudadp")}
              name="city"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
            <Label className="">
            {t("form.planl")}:
            </Label>
            <Select>
              <SelectTrigger className="w-full border border-muted-foreground/20">
                <SelectValue placeholder={t("form.planp")} />
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
            <Label className="">
            {t("form.servl")}
            </Label>
            <Input
              type="text"
              required
              placeholder={t("form.servp")}
              name="rpu"
              className="border border-muted-foreground/20"
            />
          </div>
          <div className="w-full h-fit col-span-1 lg:col-span-2 items-end justify-end flex mt-10">
            <Button
              variant={"default"}
              size={"lg"}
              type="submit"
              className="bg-foreground hover:bg-foreground/80"
            >
              {t("form.btn")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
