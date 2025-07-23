import "./Skills.css";

const skills = [
  { name: "HTML5", icon: "./src/assets/skills/html.png" },
  { name: "CSS3", icon: "./src/assets/skills/css.png" },
  { name: "JavaScript", icon: "/src/assets/skills/js.png" },
  { name: "React", icon: "./src/assets/skills/react.png" },
  { name: "Unity", icon: "./src/assets/skills/unity.png" },
  { name: "C++", icon: "./src/assets/skills/cplusplus.png" },
  { name: "Visual Studio", icon: "./src/assets/skills/visualStudio.png"},
  { name: "Krita", icon: "./src/assets/skills/krita.png"},
  { name: "Blender", icon: "/src/assets/skills/blender.png"},
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

