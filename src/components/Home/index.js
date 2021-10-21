import React from "react";
import hero from "../../imgs/hero.jpeg";


function Home() {
  return (
    <section className="text-3xl">
      
      <svg
        className="hidden lg:block absolute right-1/2 z-50 inset-y-0 mx-auto mt-24 h-screen w-48 text-white transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <div className="lg:absolute lg:inset-y-0 z-10 lg:right-0 lg:w-1/2">
        <img className="h-screen w-full mt-24 object-cover lg:w-full" src={hero} alt="hero" />
      </div>
    </section>
  );
}

export default Home;
