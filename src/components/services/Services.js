import React from "react";
import "./Services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Web Development Services */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Custom Website Development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Website Design/Redesign</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Database Development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Responsive and Mobile-First Design</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>User Experience & Design</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>E-Commerce Web Development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Content Management System (CMS)</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Version Management, GitHub</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>MERN Stack: MongoDB, Express, ReactJS, and Node.js</p>
            </li>
            
          </ul>
        </article>

        {/* UX/UI Services */}
        <article className="service">
          <div className="service__head">
            <h3>Project Management</h3>
          </div>
          <ul className="service__list">
          <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Scope Management</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Project Scheduling</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Resource Planning</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Issue Tracking</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Project Reporting and Dashboards</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Stakeholder Communication</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Team Engagement</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Cost-Benefit Analysis</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Project Timeline Development and Management</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
