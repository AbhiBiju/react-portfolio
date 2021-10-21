import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  const tabs = ["Home", "About", "Project", "Contact"];
  return (
    <nav className="flex">
      {tabs.map((tab) => (
        <a
          key={tab}
          href={"#" + tab.toLowerCase()}
          onClick={() => handlePageChange(tab)}
          className={
            (currentPage === tab
              ? "bg-blue-500 hover:text-white hover:bg-blue-600"
              : "hover:text-white hover:bg-green-600") +
            " px-4 mx-1 py-1 transform transition duration-300 hover:scale-110 rounded-xl font-light flex flex-col items-center"
          }
        >
          {tab}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
