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
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
          </ul>
        </article>

      {/* UX/UI Services */}
        <article className="service">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  );
};

export default Services;
