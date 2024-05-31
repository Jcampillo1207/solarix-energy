"use client";

import React, { useRef, useEffect } from "react";
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [video]);

  return (
    <video
      ref={videoRef}
      className={cn(
        "w-full aspect-video object-contain min-h-dvh h-dvh",
        className
      )}
      controls={control ?? false}
      muted={muted ?? false}
      loop={loop ?? false}
      playsInline // Adds the playsInline attribute for better compatibility with iOS
    >
      <source src={video} type="video/mp4" />
      <source src={video} type="video/webm" />
      Tu navegador no soporta videos HTML5.
    </video>
  );
};

export default VideoComponent;
