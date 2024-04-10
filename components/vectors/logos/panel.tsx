import { cn } from "@/lib/utils";

export const PanelIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 199 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.1687 70.6703L0 101.813H46.753L77.9217 70.6703H31.1687Z"
        fill="black"
        className="fill-white"
      ></path>
      <path
        d="M65.2145 35.9341L33.5663 67.0769H81.0386L112.687 35.9341H65.2145Z"
        fill="black"
        className="fill-white"
      ></path>
      <path
        d="M101.178 0L69.5301 31.1429H117.002L148.651 0H101.178Z"
        fill="black"
        className="fill-white"
      ></path>
      <path
        d="M81.5181 70.6703L50.3494 101.813H97.1024L128.271 70.6703H81.5181Z"
        fill="black"
        className="fill-white"
      ></path>
      <path
        d="M115.564 35.9341L83.9157 67.0769H131.388L163.036 35.9341H115.564Z"
        fill="black"
        className="fill-white"
      ></path>
      <path
        d="M151.528 0L119.88 31.1429H167.352L199 0H151.528Z"
        fill="black"
        className="fill-white"
      ></path>
      <path
        d="M0 109V104.209H97.1024V109H0Z"
        fill="black"
        className="fill-white"
      ></path>
      <path
        d="M100.699 107.802V103.011L199 3.59341V9.58242L100.699 107.802Z"
        fill="black"
        className="fill-white"
      ></path>
    </svg>
  );
};
