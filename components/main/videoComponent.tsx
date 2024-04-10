"use client";

import React, { useRef } from "react";
import useVideoVisibility from "@/lib/customHooks";
import { cn } from "@/lib/utils";

const VideoComponent = ({
  video,
  control,
  muted,
  className,
  loop,
}: {
  video: string;
  control?: boolean;
  muted?: boolean;
  className?: string;
  loop?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoVisibility(videoRef);

  return (
    <video
      ref={videoRef}
      className={cn("w-full h-full aspect-video object-contain", className)}
      controls={(control && true) || false}
      muted={(muted && true) || false}
      loop={(loop && true) || false}
    >
      <source src={video} type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>
  );
};

export default VideoComponent;
