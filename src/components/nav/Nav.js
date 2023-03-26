import React from "react";
import "./Nav.css";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { BsFillPersonFill, BsStars, BsPencilSquare, BsCodeSquare, BsBagCheck } from "react-icons/bs";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#top");
  return (
    <nav>
      {/* Home */}
      <a
        href="#top"
        onClick={() => setActiveNav("#top")}
        className={activeNav === "#top" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      {/* About */}
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BsFillPersonFill />
      </a>
      {/* Experience */}
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsPencilSquare />
      </a>
      {/* Services */}
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <BsBagCheck />
      </a>
      {/* Portfolio */}
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsCodeSquare />
      </a>
      {/* Testimonials */}
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <BsStars />
      </a>
      {/* Contact */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
