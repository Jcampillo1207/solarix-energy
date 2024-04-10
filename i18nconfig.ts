// Define the type for Locale as a union of string literals
export type Locale = "en-US" | "es-MX" ;

// Use the defined Locale type for defaultLocale
export const defaultLocale: Locale = "es-MX";

// Use the defined Locale type for the array of locales
export const locales: Locale[] = ["es-MX", "en-US"];

// Define the type for the localeNames object
export const localeNames: Record<Locale, string> = {
  "en-US": "English",
  "es-MX": "Spanish",
};
