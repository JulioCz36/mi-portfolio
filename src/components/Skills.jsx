import "./Skills.css";

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

