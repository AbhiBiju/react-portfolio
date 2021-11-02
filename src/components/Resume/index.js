import React from "react";
import ProgressCard from "./ProgressCard";

import pdf from '../../files/Resume.pdf';

function Resume() {
  return (
    <div className="w-full mt-5 pb-20">
      <a href={pdf} target="_blank" rel="noreferrer">
        <div className="mx-auto text-center font-bold bg-gradient-to-bl from-green-400 to-blue-400 hover:shadow-xl transition duration-300 transform hover:scale-105 py-2 rounded-lg w-40">
          Download My{" "}
          <span className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Resume
          </span>
        </div>
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ProgressCard
          label={"jQuery"}
          percent={80}
          projects={["Code Quiz", "Weather Dashboard", "Cuckoo's Library", "Password Generator", "Readme Generator"]}
          color={"blue"}
        />
        <ProgressCard
          label={"SQL"}
          percent={80}
          projects={[
            "Employee Tracker",
            "Note Taker App",
            "Tech Blog MVC",
            "ORM E-Commerce Backend",
            "BookMe Social App",
          ]}
          color={"purple"}
        />
        <ProgressCard
          label={"MongoDB"}
          percent={70}
          projects={["Social Network Backend API", "Budget Tracker PWA"]}
          color={"green"}
        />
        <ProgressCard label={"React"} percent={60} projects={["Hulu Clone"]} color={"lightblue"} />
      </div>
    </div>
  );
}

export default Resume;
