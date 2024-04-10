import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18nconfig";

export default createMiddleware({
  locales,
  defaultLocale,
  alternateLinks: true,
  localeDetection: true,
  localePrefix: "always"
});

export const config = {
  matcher: ["/((?!/api/|_next|.*\\..*).*)"],
};