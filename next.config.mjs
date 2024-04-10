// Importa el plugin de next-intl
import createNextIntlPlugin from "next-intl/plugin";

// Crea la configuración del plugin de next-intl
const withNextIntl = createNextIntlPlugin("./i18n.ts");

// Define tu configuración de Next.js, incluyendo la configuración de las imágenes
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
};

// Exporta la configuración aplicando el plugin de next-intl
export default withNextIntl(nextConfig);
