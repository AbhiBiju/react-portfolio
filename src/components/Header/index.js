import React from "react";
import { Link } from "react-router-dom";

import img from "../../imgs/code-logo-2.svg";

function Header() {
  return (
    <header className="w-1/2 flex items-center py-5 px-2">
      <Link to="/">
        <img
          src={img}
          className="w-14 transition duration-500 transform cursor-pointer hover:rotate-12 hover:scale-125"
          alt="logo"
        />
      </Link>
      <Link to="/">
        <h1 className="relative cursor-pointer flex font-black px-2 group">
          <span className="text-red-500 text-xl pr-1 lg:text-2xl">&#123; </span>
          <span className="flex group-hover:animate-pulse-fast">
            <span className="text-gray-800 text-xl lg:text-2xl">Abhi</span>
            <span className="text-xl hidden lg:block lg:text-2xl">
              :{" "}
              <span className="bg-gradient-to-tr from-blue-400 to-green-600 text-transparent bg-clip-text text-xl lg:text-2xl">
                Fullstack JavaScript Dev
              </span>
            </span>
          </span>
          <span className="text-red-500 text-xl pl-1 lg:text-2xl">&#125;</span>
        </h1>
      </Link>
    </header>
  );
}

export default Header;
