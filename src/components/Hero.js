import React from "react";

const Hero = () => {
  return (
    <header id="home" className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Kenneth Myrond D. Uy</h1>
        <p className="lead">IT Graduate & Software Developer | Cum Laude</p>
        <a href="#contact" className="btn btn-light btn-lg mt-3">Get in Touch</a>
        <a href="/Uy,Kenneth_InformationTechnology_Resumé.pdf" className="btn btn-outline-light btn-lg mt-3" download>
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Hero;
