import Icon from "@/components/main/icons";
import { OnTitle, TextSection } from "@/components/main/textMain";
import { UniversalSection } from "@/components/main/universalSection";

interface GridItem {
  title: string;
  icon: string | React.ReactElement;
}

interface Sec3Props {
  titleM: string;
  textM: string;
  titleV: string;
  textV: string;
  titleVal: string;
  items: GridItem[];
}

export const Sec3 = ({
  titleM,
  textM,
  titleV,
  textV,
  titleVal,
  items,
}: Sec3Props) => {
  return (
    <UniversalSection className="w-full h-fit items-center justify-start grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-14">
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-4">
          <span className="flex gap-x-4 items-baseline justify-start w-full">
            <OnTitle>{titleM}</OnTitle>
          </span>
          <TextSection className="text-balance">{textM}</TextSection>
        </div>
        <div className="w-full h-fit items-start justify-start flex flex-col gap-y-4">
          <span className="flex gap-x-4 items-baseline justify-start w-full">
            <OnTitle>{titleV}</OnTitle>
          </span>
          <TextSection className="text-balance">{textV}</TextSection>
        </div>
      </div>
      <div className="w-full items-start justify-start flex flex-col gap-y-7 p-14 border-[1px] h-fit rounded-xl border-muted-foreground/50">
        <OnTitle>{titleVal}</OnTitle>
        <div className="w-full h-fit items-start justify-start flex flex-wrap gap-5">
          {items.map((item, index) => {
            return (
              <div
                className="w-fit h-fit flex gap-x-2 items-center justify-start px-3 py-2 bg-muted-foreground/10 rounded-xl"
                key={index}
              >
                <div className="size-fit items-center justify-center flex ">
                  <Icon name={item.icon as string} className="size-5" />
                </div>
                <TextSection className="text-muted-foreground">{item.title}</TextSection>
              </div>
            );
          })}
        </div>
      </div>
    </UniversalSection>
  );
};
