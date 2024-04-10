import { useEffect } from "react";

export const useVideoVisibility = (
  videoRef: React.RefObject<HTMLVideoElement>
) => {
  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement?.play();
          } else {
            videoElement?.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [videoRef]);
};

export default useVideoVisibility;
