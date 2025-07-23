import "./Skills.css";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import unity from "../assets/skills/unity.png";
import cplusplus from "../assets/skills/cplusplus.png";
import visualStudio from "../assets/skills/visualStudio.png";
import krita from "../assets/skills/krita.png";
import blender from "../assets/skills/blender.png";

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
  return (
    <section className="skills-section">
  <div className="skills-mask">
    <div className="skill-scroller">
      {[...skills, ...skills].map((skill, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-icon">
            <img src={skill.icon} alt={skill.name} className="pixelate" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Skills;

