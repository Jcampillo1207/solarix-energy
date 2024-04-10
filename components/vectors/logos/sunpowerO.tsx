import { cn } from "@/lib/utils";

export const SunpowerO = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("w-24 h-24", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="url(#paint0_linear_1_398)"
        stroke-width="2"
      ></circle>
      <defs>
        <linearGradient
          id="paint0_linear_1_398"
          x1="2.55"
          y1="21"
          x2="24.7807"
          y2="9.99308"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F79320"></stop>
          <stop offset="1" stop-color="#F79320"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
