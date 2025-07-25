import { useParams } from "react-router-dom";
import { useEffect } from "react";
import projects from '../data/projectsData.json';
import './ProjectDetail.css'; 

import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <>
      <Header />
      <div className="project-detail-page" id="projects-detail">
        <div className="video-preview">
            <video src={project.video} autoPlay muted loop/>
        </div>
        <div className="project-detail">
          <h1 className="title-proyect">{project.title}</h1>

          <ul className="project-labels">
            {project.labels.map((label) => (
            <li key={label} className="project-label">{label}</li>
                 ))}
        </ul>

          <p className="description">{project.description}</p>

          <h3 className="points-title">Mi Rol / Aportes</h3>
          <ul className="project-points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ul className="project-links">
            {project.link_git && (
              <li>
                <p>Codigo</p>
                <a href={project.link_git} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
              </li>
            )}
            {project.link_download && (
              <li>
                <p>Descargar</p>
                <a href={project.link_download} target="_blank" rel="noopener noreferrer">
                    Itch.io
                </a>
              </li>
            )}
          </ul>
          <p className="project-year">{project.year}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
