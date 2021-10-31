import React from "react";

function Modal({ onClose, currentProj }) {
  const { title, desc, repo, deployed } = currentProj;

  return (
    <div className="bg-gray-100 bg-opacity-50 fixed z-50 right-0 left-0 bottom-0 top-0">
      <div className="bg-cover bg-gradient-to-br from-blue-400 to-blue-600 relative p-4 w-2/3 bg-no-repeat my-10 h-2/3 rounded-xl shadow-xl mx-auto text-2xl text-white text-center flex flex-col justify-between">
        <button type="button" className="absolute mx-5 right-0 text-red-500 font-bold" onClick={onClose}>
          X
        </button>
        <div className="content">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-lg">{desc}</p>
        </div>
        <div className="flex justify-between transition-all duration-100 text-white font-bold">
          {deployed && (
            <a
              href={deployed}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg transition-all duration-100 bg-gray-500 py-1 px-2"
            >
              Deployed App
            </a>
          )}
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg transition-all duration-100 bg-gray-500 py-1 px-2"
          >
            Live Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
