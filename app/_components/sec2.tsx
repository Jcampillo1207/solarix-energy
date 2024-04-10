import { SectionTitle } from "@/components/main/textMain";
import { AdjustableSection } from "@/components/main/universalSection";
import { AyuntamientoHmoLogo } from "@/components/vectors/logos/ayuntamiento";
import { CfeLogo } from "@/components/vectors/logos/cfe";
import { FordLogo } from "@/components/vectors/logos/ford";
import { GrupoMexicoLogo } from "@/components/vectors/logos/gpoMex";
import { LincolnLogo } from "@/components/vectors/logos/lincoln";
import { MazdaLogo } from "@/components/vectors/logos/mazda";
import { cn } from "@/lib/utils";

const Logos = {
  file1: <FordLogo />,
  file2: <MazdaLogo />,
  file3: <GrupoMexicoLogo />,
  file4: <LincolnLogo />,
  file5: <CfeLogo />,
  file6: <AyuntamientoHmoLogo />,
};

export const Sec2 = ({ title }: { title: string }) => {
  return (
    <AdjustableSection className="bg-background">
      <div className="w-full h-fit flex flex-col gap-y-14 lg:gap-y-10 xl:gap-y-20 items-center justify-center">
        <SectionTitle className="text-center">{title}</SectionTitle>
        <div className="w-full h-fit items-center justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-20 px-10 md:px-10 lg:px-14 xl:px-20">
          {Object.values(Logos).map((logo, index) => (
            <span className="" key={index}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </AdjustableSection>
  );
};
