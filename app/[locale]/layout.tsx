import { Footer } from "@/components/main/footer";
import { WhatsAppButton } from "@/components/main/whatsappButton";
import { Header } from "@/components/universal/header";
import { NextIntlClientProvider } from "next-intl";
import React from "react";

interface LocaleProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}



async function LocaleLayout({ children, params: { locale } }: LocaleProps) {
  let messages = (await import(`@/app/_translations/${locale}.json`)).default;
  return (
    <NextIntlClientProvider messages={messages}>
      <WhatsAppButton />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

export default LocaleLayout;
