import { useRef, useState, useEffect } from "react";

export default function Home() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [showSecondVideo, setShowSecondVideo] = useState(false);

  useEffect(() => {
    const video1 = video1Ref.current;
    if (video1) {
      video1.play();
      video1.addEventListener("ended", () => {
        setShowSecondVideo(true);
      });
    }
  }, []);

  useEffect(() => {
    if (showSecondVideo && video2Ref.current) {
      video2Ref.current.play();
    }
  }, [showSecondVideo]);

  return (
    <div className="w-screen h-screen overflow-hidden fixed top-0 left-0">
      <video
        ref={video1Ref}
        className={`w-full h-full object-cover ${
          showSecondVideo ? "hidden" : "block"
        }`}
        muted
        playsInline
      >
        <source src="/videos/fableweb.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={video2Ref}
        className={`w-full h-full object-cover ${
          showSecondVideo ? "block" : "hidden"
        }`}
        muted
        loop
        playsInline
      >
        <source src="/videos/webFelicia+WalkThrough.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
