import React, { useState } from "react";
import { Header, NavBar, Home, About, Projects, Contact, Footer } from "./components";

function App() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="p-24 transition duration-300 shadow-lg rounded-blob absolute transform -translate-x-10 -translate-y-20 lg:-translate-y-10 bg-gradient-to-t from-red-500 via-green-400 to-blue-900"></div>
      <div className="flex items-center mb-16 justify-between">
        <Header />
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>{renderPage()}</div>
      <Footer />
    </div>
  );
}

export default App;
