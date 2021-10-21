import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import projects from "./projectList.json";

function Projects() {
  return (
    <div className="mt-12 lg:mt-24">
      {projects.map((project) => (
        <ProjectTemplate key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
