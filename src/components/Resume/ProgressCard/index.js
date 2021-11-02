import React, { useState, useEffect } from "react";

function ProgressCard({ percent, projects, label, color }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent);
  }, [percent]);

  console.log(projects)

  return (
    <div className="w-80 my-5 p-5 bg-gradient-to-b from-green-100 to-green-500 hover:from-green-300 hover:to-green-600 rounded-lg transition-all duration-300 transform hover:scale-105 mx-auto">
      <div className="mx-4">{label}</div>
      <div className="relative w-full h-6 border border-green-200 rounded-xl flex justify-center items-center overflow-hidden">
        <div
          style={{ width: `${value}%`, transition: "1s ease", transitionDelay: "0.1s" }}
          className={
            (color === "red"
              ? "bg-red-400"
              : color === "lightblue"
              ? "bg-blue-400"
              : color === "blue"
              ? "bg-blue-700"
              : color === "green"
              ? "bg-green-500"
              : color === "purple"
              ? "bg-purple-600"
              : "bg-yellow-500") + " absolute left-0 top-0 h-full rounded-lg z-10 animate-vibe transition-all"
          }
        >
          <div
            style={{ borderRadius: "40%" }}
            className={
              (color === "red"
                ? "bg-red-400"
                : color === "lightblue"
                ? "bg-blue-400"
                : color === "blue"
                ? "bg-blue-700"
                : color === "green"
                ? "bg-green-500"
                : color === "purple"
                ? "bg-purple-600"
                : "bg-yellow-500") + " z-10 w-20 h-20 absolute -right-2 -top-6 transform animate-liquid transition-all"
            }
          ></div>
        </div>
        <span className="z-20 text-gray-700 font-medium">{percent}%</span>
      </div>
      <div className="mx-4 my-2 list-square">Relevant Projects:{projects.map((project, idx)=><li key={idx}>{project}</li>)}</div>
    </div>
  );
}

export default ProgressCard;
