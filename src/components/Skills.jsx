import "./Skills.css";
import { useRef, useState, useEffect } from "react";

import html from "../assets/skills/logo_html.png";
import css from "../assets/skills/logo_css.png";
import js from "../assets/skills/logo_js.png";
import react from "../assets/skills/logo_react.png";
import unity from "../assets/skills/logo_unity.png";
import cplusplus from "../assets/skills/logo_cplusplus.png";
import visualStudio from "../assets/skills/logo_visualStudio.png";
import krita from "../assets/skills/logo_krita.png";
import blender from "../assets/skills/logo_blender.png";

const skills = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Unity", icon: unity },
  { name: "C++", icon: cplusplus },
  { name: "Visual Studio", icon: visualStudio },
  { name: "Krita", icon: krita },
  { name: "Blender", icon: blender },
];


const Skills = () => {
  const scrollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
    scrollerRef.current.classList.add("dragging");
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    scrollerRef.current.classList.remove("dragging");
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollerRef.current.classList.remove("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    let animationFrame;
    const scroll = () => {
      if (scrollerRef.current && !isDragging) {
        const el = scrollerRef.current;
        el.scrollLeft += 1;

        const singleRowWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= singleRowWidth) {
          el.scrollLeft -= singleRowWidth;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  const renderRow = (rowIndex) => (
    <div className="skill-row" key={rowIndex}>
      {[...skills, ...skills].map((skill, index) => (
        <div className="skill-item" key={`${rowIndex}-${index}`}>
          <div className="skill-icon">
            <img src={skill.icon} alt={`Logo de ${skill.name}`} className="pixelate" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills-section block">
      <div className="skills-mask">
        <div
          className="skill-scroller"
          ref={scrollerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[0, 1, 2].map(renderRow)}
        </div>
      </div>
    </section>
  );
};


export default Skills;

