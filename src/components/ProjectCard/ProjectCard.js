import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ repo: project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="project-card-outer">
      <Fade bottom duration={2000} distance="40px">
        <div
          className="project-gallery-card"
          style={{
            "--project-color": project.color_code || "#fc1056",
            backgroundColor: theme.body,
          }}
          key={project.name}
          onClick={() => openRepoinNewTab(project.url)}
        >
          <div className="project-img-wrap">
            <img
              src={require(`../../assests/images/${project.image_path}`)}
              alt={project.name}
            />
            <div className="project-img-overlay">
              <span className="project-visit-text">Visit Live Site</span>
            </div>
          </div>
          <div className="project-caption">
            <p className="project-name" style={{ color: theme.text }}>
              {project.name}
            </p>
            <p
              className="project-description"
              style={{ color: theme.secondaryText }}
            >
              {project.description}
            </p>
            <div className="project-languages">
              <ProjectLanguages logos={project.languages} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
