import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import Icon from "../main/icons";
import { useTranslations } from "next-intl";
import { FormDefault } from "./formdefault";

export const PopupForm = ({ btn }: { btn: string }) => {
  const t = useTranslations("Contact");
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
      <DialogContent className="max-h-[70vh] lg:max-h-none overflow-scroll">
        <FormDefault />
      </DialogContent>
    </Dialog>
  );
};
