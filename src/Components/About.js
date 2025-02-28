import React from 'react';
import "./About.css";

function About() {
  return (
    <>
      <div className='about-head'>About</div>
      <div className='about'>
        Hi! I'm Srinivasan, a Full Stack Developer based in Chennai. I created this React Instant Resume Generator as part of my journey to learn React, Redux, and related technologies. During this process, I realized that many people—including my friends—often struggle with building a professional resume, especially when it comes to choosing an attractive template that catches the eye of recruiters.
        
        <div className="mt-3">
          With this in mind, I decided to build an easy-to-use web application where users can create a polished, developer-style resume within minutes. By simply entering your details and selecting a template, you can instantly download a sleek resume ready for job applications. The goal was to create something simple, yet impactful, that allows developers to present their skills professionally without spending hours formatting or worrying about design.
        </div>
        
        <div className="mt-3">
          This project was built using React.js along with popular libraries and tools such as react-redux, redux-persist, react-hook-form, react-router-dom, and react-icons.
        </div>
        
        <div className="mt-3">
          A special thanks to the amazing open-source community who contributed to these valuable libraries and packages.
        </div>
        
        <div className="mt-3">
          <strong>Why is this Instant Resume Generator different from others?</strong>
          <p>While many Instant Resume Generators are available, this one stands out because it's completely free of cost and helps you save valuable time. Most other Instant Resume Generators are paid and may charge you a significant amount for features that are available here for free. I built this to make it easier for people, especially developers, to create professional resumes quickly without spending money.</p>
        </div>
      </div>
    </>
  );
}

export default About;
