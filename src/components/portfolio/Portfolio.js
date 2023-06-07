import React from "react";
import "./Portfolio.css";
import P1 from "../../assets/portfolio/P1.jpg";
import P2 from "../../assets/portfolio/P2.jpg";
import P3 from "../../assets/portfolio/P3.jpg";
import P4 from "../../assets/portfolio/P4.jpg";
import P5 from "../../assets/portfolio/P5.jpg";
import P6 from "../../assets/portfolio/P6.jpg";
import P7 from "../../assets/portfolio/P7.jpg";
import P8 from "../../assets/portfolio/P8.jpg";
import P9 from "../../assets/portfolio/P9.png";
import MouseOverPopover from "./Pop";

const data = [
  {
    id: 1,
    image: P8,
    title: "Georgia Evergreens",
    github: "https://github.com/magmesser/georgia-evergreens",
    demo: "https://georgia-evergreens.herokuapp.com/",
    details:
      "A collaborative MERN-stack single-page application using a real world Customer to create an updated mobile-forward site. Application uses MongoDB back end, a GraphQL API, and an Express.js and Node.js server with a React front end, implementing user authentication with JWT.",
  },
  {
    id: 2,
    image: P2,
    title: "Paws and Whiskers",
    github: "https://github.com/magmesser/pawsandwhiskers",
    demo: "https://pawsandwhiskers.herokuapp.com/",
    details:
      "This application allows pet shelter owners to upload pets in need of homes and delete adopted pets, as well as allows prospective pet owners to view available pets in various filtered views. Application uses a Node.js and Express.js back end, uses Handlebars.js as the template engine and is backed by a MySQL database with Sequelize and user auth.",
  },
  {
    id: 3,
    image: P1,
    title: "A Night In",
    github: "https://github.com/magmesser/a-night-in",
    demo: "https://magmesser.github.io/a-night-in/",
    details:
      "Interactive and responsive application that assists users by providing movie and dinner options to have a fun night in. Driven by 3rd-party APIs.",
  },
  {
    id: 9,
    image: P9,
    title: "Sara Juengst, PhD Portfolio",
    github: "https://github.com/magmesser/sara-juengst",
    demo: "https://magmesser.github.io/sara-juengst/",
    details:
      "Academic portfolio of Dr. Sara Juengst containing research, publications, news articles, and field work photos using React + Tailwind.",
  },
  {
    id: 4,
    image: P3,
    title: "The Tech Blog",
    github: "https://github.com/magmesser/tech-blog",
    demo: "https://messer-tech-blog.herokuapp.com/",
    details:
      "CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. Application follows the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
  },
  {
    id: 5,
    image: P4,
    title: "Just Another Text Editor",
    github: "https://github.com/magmesser/text-editor",
    demo: "https://messer-text-editor.herokuapp.com/",
    details:
      "J.A.T.E. is a Progressive Web Application (PWA) which will allow the user to create notes or code snippets with or without an internet connection and can be installed as an application on the user's local machine.",
  },
  // {
  //   id: 6,
  //   image: P5,
  //   title: "Lord of The Employees",
  //   github: "https://github.com/magmesser/employee-tracker",
  //   demo: "https://drive.google.com/file/d/1y76_hulzSaqx4xzvBzC-JCHqLmHkWm3F/view",
  //   details:
  //     "Command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL. Video tutorial provided as this is a command-line application and not a live site.",
  // },
  {
    id: 7,
    image: P6,
    title: "Work Day Scheduler",
    github: "https://github.com/magmesser/hourly-scheduler",
    demo: "https://magmesser.github.io/hourly-scheduler/",
    details:
      "Simple calendar application that allows a user to save events for each hour of the day. This app features dynamically updated HTML and CSS powered by jQuery. Application uses third-party APIs such as Bootstrap, Moment.js and FontAwesome and Google Fonts.",
  },
  {
    id: 8,
    image: P7,
    title: "ReadMe Generator",
    github: "https://github.com/magmesser/readme-generator",
    demo: "https://drive.google.com/file/d/1P2kbY9kYwl8JAaYMBOzR4uj419HAYY5c/view",
    details:
      "Command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. Video tutorial provided as this is a command-line application and not a live site.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, details }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <MouseOverPopover details={details} />

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
                  View
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
