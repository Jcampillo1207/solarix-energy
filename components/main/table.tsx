import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const PlansTable = ({
  mode,
}: {
  mode: "max" | "premium" | "tradicional";
}) => {
  const t = useTranslations("Table");

  return (
    <div className="w-full h-fit items-start justify-start">
      <Table className="border border-muted-foreground/10">
        <TableHeader className="bg-background">
          <TableRow>
            <TableHead className="flex-1 min-w-[200px] py-10 border-l border-muted-foreground/10 text-lg text-white">
              {t("Head.title1")}
            </TableHead>
            <TableHead className="flex-1 min-w-[200px] py-10 border-l border-muted-foreground/10 text-lg text-white">
              {t("Head.title2")}
            </TableHead>
            <TableHead className="flex-1 min-w-[200px] py-10 border-l border-muted-foreground/10 text-lg text-white">
              {t("Head.title3")}
            </TableHead>
            <TableHead className="flex-1 min-w-[200px] py-10 border-l border-muted-foreground/10 text-lg text-white">
              {t("Head.title4")}
            </TableHead>
            <TableHead className="flex-1 min-w-[200px] py-10 border-l border-muted-foreground/10 text-lg text-white">
              {t("Head.title5")}
            </TableHead>
            <TableHead className="flex-1 min-w-[200px] py-10 border-l border-muted-foreground/10 text-lg text-white">
              {t("Head.title6")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            className={cn(
              mode === "max" ? "bg-muted-foreground/10" : "bg-background"
            )}
          >
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "max" ? "text-primary" : ""
              )}
            >
              {t("max.text1")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "max" ? "text-primary" : ""
              )}
            >
              {t("max.text2")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "max" ? "text-primary" : ""
              )}
            >
              {t("max.text3")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "max" ? "text-primary" : ""
              )}
            >
              {t("max.text4")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "max" ? "text-primary" : ""
              )}
            >
              {t("max.text5")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "max" ? "text-primary" : ""
              )}
            >
              {t("max.text6")}
            </TableCell>
          </TableRow>
          <TableRow
            className={cn(
              mode === "premium" ? "bg-muted-foreground/10" : "bg-background"
            )}
          >
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "premium" ? "text-primary" : ""
              )}
            >
              {t("premium.text1")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "premium" ? "text-primary" : ""
              )}
            >
              {t("premium.text2")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "premium" ? "text-primary" : ""
              )}
            >
              {t("premium.text3")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "premium" ? "text-primary" : ""
              )}
            >
              {t("premium.text4")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "premium" ? "text-primary" : ""
              )}
            >
              {t("premium.text5")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "premium" ? "text-primary" : ""
              )}
            >
              {t("premium.text6")}
            </TableCell>
          </TableRow>
          <TableRow
            className={cn(
              mode === "tradicional"
                ? "bg-muted-foreground/10"
                : "bg-background"
            )}
          >
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "tradicional" ? "text-primary" : ""
              )}
            >
              {t("tradicional.text1")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "tradicional" ? "text-primary" : ""
              )}
            >
              {t("tradicional.text2")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "tradicional" ? "text-primary" : ""
              )}
            >
              {t("tradicional.text3")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "tradicional" ? "text-primary" : ""
              )}
            >
              {t("tradicional.text4")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "tradicional" ? "text-primary" : ""
              )}
            >
              {t("tradicional.text5")}
            </TableCell>
            <TableCell
              className={cn(
                "min-w-[200px] py-10 border-l text-muted-foreground",
                mode === "tradicional" ? "text-primary" : ""
              )}
            >
              {t("tradicional.text6")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
