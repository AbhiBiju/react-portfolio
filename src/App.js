import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, NavBar, Home, About, Projects, Contact, Footer } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="p-24 transition duration-300 shadow-lg rounded-blob absolute transform -translate-x-5 -translate-y-20 lg:-translate-x-10 lg:-translate-y-10 bg-gradient-to-b from-red-500 via-green-400 to-blue-900"></div>
        <div className="flex items-center lg:mb-20 justify-between">
          <Header />
          <NavBar />
        </div>
        <div className="content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
