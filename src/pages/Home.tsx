// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden fixed top-0 left-0">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/fableweb.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

