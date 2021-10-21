import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  const tabs = ["Home", "Resume", "About", "Projects", "Contact"];
  return (
    <nav className="lg:flex grid grid-cols-3 sm:pr-2">
      {tabs.map((tab) => (
        <a
          key={tab}
          href={"#" + tab.toLowerCase()}
          onClick={() => handlePageChange(tab)}
          className={
            (currentPage === tab
              ? "bg-blue-500 hover:text-white hover:bg-blue-600"
              : "hover:text-white hover:bg-green-600") +
            " px-2 lg:px-4 mx-1 py-1 transform transition duration-300 hover:scale-110 rounded-xl font-light flex flex-col items-center"
          }
        >
          {tab}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
