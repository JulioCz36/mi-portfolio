
import "./VideoLoop.css";
import { useEffect, useState } from "react";

import videoFile from "../assets/video.mp4";

const VideoLoop = () => {
  
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`video-section ${isAtTop ? "full-height" : "short-height"}`} id="videos">
      <div className="video">
        <video
          className="video-bg"
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default VideoLoop;
