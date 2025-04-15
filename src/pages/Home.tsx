import { useRef, useState, useEffect } from "react";

export default function Home() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setIsUserInteracted(true);
      const video1 = video1Ref.current;
      if (video1) {
        video1.play().catch((err) => {
          console.error("Video 1 playback error:", err);
        });

        video1.addEventListener("ended", () => {
          setShowSecondVideo(true);
        });
      }

      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (showSecondVideo && video2Ref.current) {
      video2Ref.current.play().catch((err) => {
        console.error("Video 2 playback error:", err);
      });
    }
  }, [showSecondVideo]);

  return (
    <div className="w-screen h-screen overflow-hidden fixed top-0 left-0">
      <video
        ref={video1Ref}
        className={`w-full h-full object-cover ${
          showSecondVideo ? "hidden" : "block"
        }`}
        playsInline
        controls={false}
      >
        <source src="/videos/fableweb.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={video2Ref}
        className={`w-full h-full object-cover ${
          showSecondVideo ? "block" : "hidden"
        }`}
        controls={false}
        loop
        playsInline
      >
        <source src="/videos/webFelicia+WalkThrough.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {!isUserInteracted && (
        <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-xl"></div>
      )}
    </div>
  );
}
