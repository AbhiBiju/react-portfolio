import React from "react";

function ProjectTemplate({ project, toggleModal }) {
  return (
    <div
      style={{ backgroundImage: `url(${project.img})`, backgroundPosition: "center" }}
      className="rounded-2xl cursor-pointer flex flex-col justify-between transition duration-500 transform hover:scale-105 group group-hover: bg-local bg-cover bg-no-repeat relative bg-gradient-to-br from-green-400 to-blue-400 w-full h-96 p-8 text-center"
      onClick={() => {
        toggleModal(project, project.id);
      }}
    >
      <h2 className="text-transparent text-3xl transition-all duration-100 group-hover:text-red-500 font-bold">
        {project.title}
      </h2>
      <div className="flex justify-around text-transparent transition-all duration-100 group-hover:text-white font-bold">
        {project.deployed && (
          <a
            href={project.deployed}
            className="rounded-lg transition-all duration-100 group-hover:bg-blue-500 py-1 px-2"
          >
            Deployed App
          </a>
        )}
        <a href={project.repo} className="rounded-lg transition-all duration-100 group-hover:bg-blue-500 py-1 px-2">
          Live Code
        </a>
      </div>
    </div>
  );
}

export default ProjectTemplate;
