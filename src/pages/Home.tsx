import { useEffect, useRef } from "react";

export default function Home() {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (video1 && video2) {
      video2.style.display = "none";

      video1.onended = () => {
        video1.style.display = "none";
        video2.style.display = "block";
        video2.play().catch((err) => console.error("Video 2 play error:", err));
      };

      video1.play().catch((err) => console.error("Video 1 play error:", err));
    }
  }, []);

  return (
    <div className="w-screen h-screen flex items-center overflow-hidden justify-center relative top-0 left-0">
      {/* <div className="w-screen h-screen overflow-hidden fixed top-0 left-0"> */}

      <video
        ref={video1Ref}
        className="w-full h-full object-cover absolute top-0 left-0"
        muted
        playsInline
      >
        <source src="/videos/webFelicia+WalkThrough.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={video2Ref}
        className="w-full h-full object-cover absolute top-0 left-0"
        muted
        playsInline
      >
        <source src="/videos/fableweb.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
