import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/solarix-light.svg",
      href: "/solarix-light.svg",
      sizes: "32x32",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/solarix-dark.svg",
      href: "/solarix-dark.svg",
      sizes: "32x32",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
