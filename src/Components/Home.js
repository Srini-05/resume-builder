import React, { useRef } from "react";
import "./Home.css";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./Header";
import creative from "../assets/creative.png";
import minimalist from "../assets/minimalist.png";
import professional from "../assets/professional.png";

function Home() {
  const scrollToRef = useRef();
  const scrollFunc = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header handleclick={scrollFunc} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Resume in Minutes</h1>
          <p>Create a professional resume effortlessly with our easy-to-use builder.</p>
          <Link to="/resumebuild" className="link">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Choose Your Style</h2>
        <div className="feature-images">
          <img src={creative} alt="Creative Resume" />
          <img src={minimalist} alt="Minimalist Resume" />
          <img src={professional} alt="Professional Resume" />
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps">
        <h2>How It Works</h2>
        <div className="step">
          <h3>Step 1</h3>
          <p>Enter your details and choose a template.</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>Customize your resume with our easy editor.</p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Download your resume instantly.</p>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="contact" ref={scrollToRef}>
        <h2>Get in Touch</h2>
        <a
          href="https://www.linkedin.com/in/srinivasanpalanivel/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <IoLogoLinkedin className="social-icon" />
        </a>
      </footer>
    </>
  );
}

export default Home;
