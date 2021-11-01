import React from "react";

function Footer() {
  return (
    <div className="w-full py-3 px-4 z-50 fixed bottom-0 bg-gradient-to-b from-gray-700 to-gray-500 text-white flex justify-between items-center text-center">
      <div className="font-semibold mx-2">
        © 2021 Abhinav Biju.{" "}
        <span className="hidden sm:inline-block">
          See more on{" "}
          <a className="text-blue-500" rel="noreferrer" target="_blank" href="https://github.com/AbhiBiju">
            Github
          </a>
        </span>
      </div>
      <div className="text-4xl mx-2">
        <a rel="noreferrer" target="_blank" href="https://github.com/AbhiBiju/">
          <i className="fab fa-github mx-1 transition duration-200 transform hover:scale-110 hover:text-blue-500 cursor-pointer"></i>
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/abhinavbiju/">
          <i className="fab fa-linkedin mx-1 transition duration-200 transform hover:scale-110 hover:text-blue-500 cursor-pointer"></i>
        </a>
        <a rel="noreferrer" target="_blank" href="https://stackoverflow.com/users/story/15823870">
          <i className="fab fa-stack-overflow mx-1 transition duration-200 transform hover:scale-110 hover:text-blue-500 cursor-pointer"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
