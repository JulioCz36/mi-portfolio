
import "./VideoLoop.css";
import { useEffect, useState } from "react";

const VideoLoop = () => {
  const videoId = "468tXj5txqs";
  const playlistIds = ["_0x_5dNNGG8", "hfRFodu96G0", "smJ-HRKNhSI", videoId];

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${playlistIds.join(",")}&controls=0&disablekb=1&modestbranding=1&rel=0`;
  
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50); // si scrollea más de 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <section
      className={`video-section ${isAtTop ? "full-height" : "short-height"}`}
      id="videos"
    >
      <div className="video-wrapper">
        <iframe
          src={videoSrc}
          title="Video de fondo"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen={false}
        ></iframe>
      </div>
    </section>
  );
};

export default VideoLoop;
