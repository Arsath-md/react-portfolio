// Home Page Component
// Handles hero section, typed animation, navbar, and renders all sections.

import './index.css';
import React, { useEffect } from "react";

import About from './about';
import Skill from './skill';
import Project from './project';
import Contact from './contact';

export default function Home() {

  // Typed.js animation effect
  useEffect(() => {
    if (window.Typed) {
      const typed = new window.Typed("#typed-element", {
        strings: ["Frontend Developer", "Backend Developer", "Full-Stack Developer"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <>

      {/* NAVBAR */}
      <nav className="navigations d-flex">
        
        {/* Logo */}
        <div className="d-inline-block" style={{ height: "40px", width: "40px" }}>     
       <img src="./imgs/logo.png" className="img-fluid rounded-circle h-100 w-100 object-fit-cover" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex d-md-flex div2" id="navs">
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>

        {/* Connect Button */}
        <div className="div3 m-1 text-center">
          <button
            className="mx-auto"
            type="button"
            onClick={() => {
              document.getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Connect
          </button>
        </div>

      </nav>

      {/* HERO SECTION */}
      <div className="container pb-0 mb-0" id="home">
        <div className="row d-flex justify-content-center align-items-center">

          {/* Left Social Icons */}
          <div className="d-none d-md-flex flex-column justify-content-center col-1 text-start" id="hero-icon">
          <a href="https://github.com/Arsath-md">  <i className="bi-github"></i></a>
            <i className="bi-linkedin"><a href="https://www.linkedin.com/in/mohamed-arsath-0a45b6347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"></a></i>
            <i className="bi-facebook"><a href=""></a></i>
          </div>

          {/* Main Hero Content */}
          <div className="col-10 d-flex flex-column text-center mx-auto">
            <img  src="./imgs/logo-1.png" className="img-fluid rounded-3 mx-auto d-block" style={{ maxWidth: "150px" }}alt="profile"/>      
                  <h1>I am Arsath and</h1>
            <h2>I am a</h2>

            {/* Typed.js text */}
            <h4><span id="typed-element"></span></h4>

            {/* Hero Buttons */}
            <div className="d-block" id="hero-btn">
              <button>Explore</button>
              <button>Download CV</button>
            </div>
          </div>

          {/* Right Side Navigation Icons */}
          <div className="d-none d-md-flex flex-column justify-content-center col-1 text-center bg-primary" id="hero-icons">
            <a href="#home"><i className="bi-house-door-fill"></i></a>
            <a href="#About"><i className="bi-person-fill"></i></a>
            <a href="#Skills"><i className="bi-gear-fill"></i></a>
            <a href="#Project"><i className="bi-folder-fill"></i></a>
            <a href="#contact"><i className="bi-telephone-fill"></i></a>
          </div>

        </div>
      </div>

      {/* PAGE SECTIONS */}
      <About />
      <Skill />
      <Project />
      <Contact />

    </>
  );
}
