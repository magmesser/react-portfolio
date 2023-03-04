import React from "react";
import "./Portfolio.css";
import P1 from "../../assets/portfolio/P1.jpg";
import P2 from "../../assets/portfolio/P2.jpg";
import P3 from "../../assets/portfolio/P3.jpg";
import P4 from "../../assets/portfolio/P4.jpg";
import P5 from "../../assets/portfolio/P5.jpg";
import P6 from "../../assets/portfolio/P6.jpg";
import P7 from "../../assets/portfolio/P7.jpg";

const data = [
  {
    id: 1,
    image: P1,
    title: "A Night In",
    github: "https://github.com/magmesser/a-night-in",
    demo: "https://magmesser.github.io/a-night-in/",
  },
  {
    id: 2,
    image: P2,
    title: "Paws and Whiskers",
    github: "https://github.com/magmesser/pawsandwhiskers",
    demo: "https://pawsandwhiskers.herokuapp.com/",
  },
  {
    id: 3,
    image: P3,
    title: "The Tech Blog",
    github: "https://github.com/magmesser/tech-blog",
    demo: "https://messer-tech-blog.herokuapp.com/",
  },
  {
    id: 4,
    image: P4,
    title: "Just Another Text Editor",
    github: "https://github.com/magmesser/text-editor",
    demo: "https://messer-text-editor.herokuapp.com/",
  },
  {
    id: 5,
    image: P5,
    title: "Lord of The Employees",
    github: "https://github.com/magmesser/employee-tracker",
    demo: "https://drive.google.com/file/d/1y76_hulzSaqx4xzvBzC-JCHqLmHkWm3F/view",
  },
  {
    id: 6,
    image: P6,
    title: "Work Day Scheduler",
    github: "https://github.com/magmesser/hourly-scheduler",
    demo: "https://magmesser.github.io/hourly-scheduler/",
  },
  {
    id: 7,
    image: P7,
    title: "ReadMe Generator",
    github: "https://github.com/magmesser/readme-generator",
    demo: "https://drive.google.com/file/d/1P2kbY9kYwl8JAaYMBOzR4uj419HAYY5c/view",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check It Out
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
