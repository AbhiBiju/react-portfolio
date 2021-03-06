import React from "react";
import { Link } from "react-router-dom";
import hero from "../../imgs/hero.jpeg";

function Home() {
  return (
    <section className="text-3xl h-full">
      <section className="my-24 absolute transition-all duration-1000 bg-size-200 bg-gradient-to-b bg-pos-0 hover:bg-pos-100 from-blue-400 via-red-400 to-green-400 text-transparent bg-clip-text lg:w-1/2 w-full font-black text-center">
        Hello, I'm Abhi.
        <br /> A JavaScript Developer.
        <br /> Here's More{" "}
        <Link
          className="cursor-pointer filter brightness-100 transition-all duration-500 bg-size-200 bg-gradient-to-t bg-pos-0 hover:bg-pos-100 bg-clip-text from-pink-500 via-red-500 to-yellow-400 text-transparent"
          to="/about"
        >
          About Me
        </Link>
      </section>
      <section>
        <svg
          className="hidden lg:block absolute right-1/2 z-50 inset-y-0 mx-auto mt-24 h-screen w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <div className="lg:absolute mt-12 lg:mt-24 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-screen w-full object-cover lg:w-full" src={hero} alt="hero" />
        </div>
      </section>
    </section>
  );
}

export default Home;
