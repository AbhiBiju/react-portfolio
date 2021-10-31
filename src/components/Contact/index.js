import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <div>
      <form className="flex flex-col w-1/3 mx-auto">
        <label htmlFor="name">Name</label>
        <input
          className="transition duration-200 shadow-sm hover:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-8 p-2 sm:text-sm border border-blue-300 rounded-md"
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          className="transition duration-200 shadow-sm hover:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-8 p-2 sm:text-sm border border-blue-300 rounded-md"
          id="email"
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="subject">Subject</label>
        <input
          className="transition duration-200 shadow-sm hover:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-8 p-2 sm:text-sm border border-blue-300 rounded-md"
          id="subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label>Message</label>
        <textarea
          className="transition duration-200 shadow-sm hover:border-blue-500 resize-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-20 p-2 sm:text-sm border border-blue-300 rounded-md"
          required
        ></textarea>
        <button className="w-20 h-10 my-3 transform scale-90 flex justify-center self-end items-center rounded-lg transition duration-200 border-t-0 border-b-2 active:border-b-0 active:bg-green-400 hover:bg-blue-400 hover:border-b-3 border-blue-700 bg-blue-500 shadow-glowBlue active:shadow-glowGreen">
          <i className="fas fa-stream mb-1 text-sm text-gray-700 transform -rotate-12 translate-y-1"></i>
          <i className="far fa-envelope mb-1 text-2xl text-gray-700 ml-1 transform -rotate-12"></i>
        </button>
      </form>
      <div className="flex mx-auto justify-between w-1/3 py-2">
        <a
          className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow-glowPurp focus:ring hover:bg-purple-800 transition duration-150 transform hover:scale-105 hover:shadow-lg"
          href="https://github.com/AbhiBiju/"
        >
          Github
        </a>
        <a
          className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow-glowPurp focus:ring hover:bg-purple-800 transition duration-150 transform hover:scale-105 hover:shadow-lg"
          href="https://www.linkedin.com/in/abhinavbiju/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
