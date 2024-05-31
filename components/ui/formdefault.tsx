"use client";

import { useLocale, useTranslations } from "next-intl";
import { OnTitle } from "../main/textMain";
import { Label } from "./label";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Button } from "./button";
import { useState } from "react";
import { toast } from "sonner";
import { send, sendForm } from "@/lib/route";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const FormDefault = ({ aa = false }: { aa?: boolean }) => {
  const t = useTranslations("Contact");
  const f = useTranslations("Toast");

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

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [pay, setPay] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [serv, setServ] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handlePayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPay(event.target.value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleServChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServ(event.target.value);
  };

  const locale = useLocale();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Esto previene que el formulario se envíe automáticamente

    const data = {
      name: name,
      mail: email,
      phone: phone,
      type: type,
      pay: pay,
      state: state,
      city: city,
      time: time,
      serv: serv,
    };

    if (
      !data.city ||
      !data.mail ||
      !data.name ||
      !data.pay ||
      !data.phone ||
      !data.serv ||
      !data.state ||
      !data.time ||
      !data.type
    ) {
      toast.warning(f("warn"));
    } else {
      toast(f("load"), {
        icon: <Loader2 className="size-4 animate-spin" />,
      });
      try {
        const datos = await sendForm(
          data.name,
          data.mail,
          data.phone,
          data.type,
          data.pay,
          data.state,
          data.city,
          data.time,
          data.serv,
          locale
        );
        if (datos) {
          console.log(datos);
          console.log(locale);
          const datu = await send(
            data.name,
            data.mail,
            data.phone,
            data.type,
            data.pay,
            data.state,
            data.city,
            data.time,
            data.serv,
            locale
          );
          if (datu) {
            console.log(datu);
            toast.success(f("suc"));
          } else {
            console.log(datu);
            toast.error(f("err"));
          }
        } else {
          console.log(datos);
          toast.error(f("err"));
        }
      } catch (error) {
        console.error(error);
        toast.error(f("err"));
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full h-fit items-start justify-start grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7 max-w-5xl",
        aa && "bg-muted/50 rounded-xl border p-5 md:p-10"
      )}
    >
      {!aa && (
        <div className="w-full h-fit items-start justify-start col-span-1 lg:col-span-2 mb-10">
          <OnTitle className="text-xl md:text-2xl lg:text-3xl text-start tracking-normal">
            {t("title")}
          </OnTitle>
        </div>
      )}
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
        <Label className="">{t("form.namel")}:</Label>
        <Input
          type="text"
          required
          placeholder={t("form.namep")}
          name="nombre"
          className="border border-muted-foreground/20"
          onChange={handleNameChange}
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
          onChange={handleEmailChange}
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
          onChange={handlePhoneChange}
        />
      </div>
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
        <Label className="">{t("form.tipol")}:</Label>
        <Select onValueChange={setType}>
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
        <Label className="">{t("form.pagol")}:</Label>
        <Input
          type="text"
          required
          placeholder={t("form.pagop")}
          name="money"
          className="border border-muted-foreground/20"
          onChange={handlePayChange}
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
          onChange={handleStateChange}
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
          onChange={handleCityChange}
        />
      </div>
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
        <Label className="">{t("form.planl")}:</Label>
        <Select onValueChange={setTime}>
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
        <Label className="">{t("form.servl")}</Label>
        <Input
          type="text"
          required
          placeholder={t("form.servp")}
          name="rpu"
          className="border border-muted-foreground/20"
          onChange={handleServChange}
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
  );
};
