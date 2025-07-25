import './Projects.css'; 
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


const projects = [
  {
    titleKey: 'project1-title',
    descriptionKey: 'project1-desc',
    image: 'https://img.itch.zone/aW1nLzIyMDUxMDEyLnBuZw==/315x250%23c/5s4w7V.png',
    alt: 'Proyecto 1',
  },
  {
    id: "platformer-stacks-queues",
    titleKey: 'project2-title',
    descriptionKey: 'project2-desc',
    image: 'https://img.itch.zone/aW1nLzIyMDA1ODgxLnBuZw==/315x250%23c/oJdEQk.png',
    alt: 'Proyecto 2',
  },
  {
    titleKey: 'project3-title',
    descriptionKey: 'project3-desc',
    image: 'https://img.itch.zone/aW1nLzIyMDEwMTA2LnBuZw==/315x250%23c/U6YwXF.png',
    alt: 'Proyecto 3',
  },
  {
    titleKey: 'project4-title',
    descriptionKey: 'project4-desc',
    image: 'https://img.itch.zone/aW1hZ2UvMzcwNjIwNS8yMjA1NTUwMC5wbmc=/original/WNUzjn.png',
    alt: 'Proyecto 4',
  },
];


const Projects = () => {
  const { t} = useTranslation();

  return (
    <section id="projects">
      <div className="container block">
        <h2 className="section-title">{t("title-projects")}</h2>
        <div className="projects-grid">
  {projects.map((project, index) => (
    <Link to={`/proyect/${project.id ?? index}`} key={index} className="project-item">
      <img src={project.image} alt={project.alt} className="project-img pixelate" />
      <div className="project-info">
        <h3 className="project-title">{t(project.titleKey)}</h3>
        <p className="project-desc">{t(project.descriptionKey)}</p>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
};

export default Projects;
