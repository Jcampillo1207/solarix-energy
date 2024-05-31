"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className: string }) {
  const { setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("text-white", className)}
        >
          <Sun className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-center justify-start gap-y-1 w-fit">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setTheme("light")}
        >
          <Sun className="size-4" />
        </Button>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setTheme("dark")}
        >
          <Moon className="size-4" />
        </Button>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setTheme("system")}
        >
          <Monitor className="size-4" />
        </Button>
      </PopoverContent>
    </Popover>
  );
}
