import React from "react";
import "./About.css";
import Me from "../../assets/mm-sq.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Maggie Square"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2 Academic Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>

          <p>
            Full Stack Web Developer with background in project management and
            anthropology and a thirst for knowledge. Earned a certificate in
            Full Stack Web Development from the University of Central Florida
            Coding Boot Camp. Innovative problem-solver who is passionate about
            developing apps with a focus on mobile-first design and development.
            Strengths in timeline and scope management, teamwork, and building
            projects from ideation to execution.
          </p>

          <a href="#contact" className="btn btn-primary" style={{marginTop: "1rem"}}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
