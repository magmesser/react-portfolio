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
              <small>10+ Years Insurance + 4 Years PM and Data</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2 Web Development Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Development Projects</small>
            </article>
          </div>

          <p>
            Highly motivated and results-oriented professional with extensive experience in the insurance industry and a proven track record of success in data analysis, web development, project management, and operations management. Skilled in organizing data for system integrations and adept at innovative problem-solving. Possesses a Bachelor of Science degree from Florida State University and a Certificate in Full Stack Web Development from the University of Central Florida.
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
