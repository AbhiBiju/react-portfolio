import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const tabs = ["Home", "Resume", "About", "Projects", "Contact"];

  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.pathname;
  });

  return (
    <nav className="lg:flex grid grid-cols-3 sm:pr-2">
      {tabs.map((tab) => (
        <Link
          key={tab}
          to={tab === "Home" ? "/" : "/" + tab.toLowerCase()}
          onClick={() => setCurrentPage(tab)}
          className={
            (currentPage === tab
              ? "bg-blue-500 hover:text-white hover:bg-blue-600"
              : "hover:text-white hover:bg-green-600") +
            " px-2 lg:px-4 mx-1 py-1 transform transition duration-300 hover:scale-110 rounded-xl font-light flex flex-col items-center"
          }
        >
          {tab}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
