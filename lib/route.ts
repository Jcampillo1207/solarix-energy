"use server";

import EmailReceiver from "@/components/main/emailReceiver";
import EmailUser from "@/components/main/emailUser";
import { Resend } from "resend";

export async function send(
  name: string,
  email: string,
  phone: string,
  type: string,
  pay: string,
  state: string,
  city: string,
  time: string,
  serv: string,
  locale: string
) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const subject =
    (locale == "es-MX" &&
      "Gracias por enviar tu información, en breve te contactaremos") ||
    "Thank you for submitting your information, we will contact you shortly.";

  const { data } = await resend.emails.send({
    from: "Solarix Energy <ventas@solarix.mx>",
    to: [email],
    subject: { subject },
    react: EmailUser({
      name,
      email,
      phone,
      type,
      pay,
      state,
      city,
      time,
      serv,
      locale,
    }),
  });
  if (data) {
    return true;
  } else {
    console.log("error");
  }
}

export async function sendForm(
  name: string,
  email: string,
  phone: string,
  type: string,
  pay: string,
  state: string,
  city: string,
  time: string,
  serv: string,
  locale: string
) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "Solarix Form <ventas@solarix.mx>",
    to: ["ventas@solarix.mx"],
    subject: "Nueva respuesta de formulario",
    react: EmailReceiver({
      name,
      email,
      phone,
      type,
      pay,
      state,
      city,
      time,
      serv,
      locale,
    }),
  });
  if (data) {
    return true;
  } else {
    console.log("error");
  }
}
