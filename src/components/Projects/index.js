import React, { useState } from "react";
import ProjectTemplate from "./ProjectTemplate";
import projects from "./projectList.json";
import Modal from "./Modal";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProj, setCurrentProj] = useState();

  const toggleModal = (project, i) => {
    setCurrentProj({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h2 className="text-center text-3xl">Projects</h2>
      {isModalOpen && <Modal onClose={toggleModal} currentProj={currentProj} />}
      <div className="mt-12 lg:mt-18 mb-20 mx-5 md:mx-4 grid gap-4 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectTemplate key={project.id} toggleModal={toggleModal} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
