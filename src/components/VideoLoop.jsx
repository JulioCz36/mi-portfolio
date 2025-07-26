import "./VideoLoop.css";
import { useEffect, useRef, useState } from "react";

const videoFiles = [
  "/videos/platformer_gameplay.mp4",
  "/videos/radioactive_train.mp4",
  "/videos/blocks_in_order.mp4",
];

const VideoLoop = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideo((prevIndex) => (prevIndex + 1) % videoFiles.length);
  };

  useEffect(() => {
    // Forzar reproducción al cambiar el video (por autoplay policies)
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Error al reproducir video:", error);
        });
      }
    }
  }, [currentVideo]);

  return (
    <section
      className={`video-section ${isAtTop ? "full-height" : "short-height"}`}
      id="videos"
    >
      <div className="video">
        <video
          ref={videoRef}
          className="video-bg"
          src={videoFiles[currentVideo]}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          playsInline
        />
      </div>
    </section>
  );
};

export default VideoLoop;

