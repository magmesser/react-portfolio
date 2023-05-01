import React from "react";
import "./Testimonials.css";
import T1 from "../../assets/reviews/T1.jpeg";
import T2 from "../../assets/reviews/T2.jpeg";
import T3 from "../../assets/reviews/T3.jpeg";
import T4 from "../../assets/reviews/T4.jpeg";
import T5 from "../../assets/reviews/T5.jpeg";
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    photo: T5,
    name: "Cherie Ella Viens",
    review:
      "I had the pleasure of working with Maggie during UCF’s Full Stack Web Development bootcamp.  Maggie is an extremely committed and hard worker, with a wonderful personality and attitude. She’s encouraging, positive, and a fantastic team player. Her communication is on point and she listens attentively at all times.   During the bootcamp we collaborated on an e-commerce website built using JavaScript, MongoDB, Vite, React, Apollo and graphQL. Maggie took the initiative to create a clear and detailed kanban, increasing our teams efficiency, as well as demonstrated thorough understanding of the MERN stack resulting in clean and effective code. She also created beautiful and user-friendly UI’s using her skill set in HTML, CSS, and TailwindCSS.  Every step of the way Maggie has showcased high level proficiency in JavaScript with her solid programming ability. She pays attention to the details and quickly gets to the bottom of a problem with independent research, effective de-bugging, and analytical mindset. I would absolutely recommend Maggie to any hiring manager for font or back end web development and/or software engineering roles. She is talented and passionate, and would be a valuable asset to the team.",
    link: "https://www.linkedin.com/in/maggie-messer/#recommendations",
  },
  {
    photo: T4,
    name: "Anna Kiepke",
    review:
      "I had the pleasure of working with Maggie in her role as a Property Claims Examiner at Lighthouse Property Insurance Corporation. She is an incredibly organized professional with a strong attention to detail, making her an asset to any team. Her ability to innovate and think outside of the box when it comes to problem-solving is unparalleled. She consistently exceeded expectations in her role, effectively managing complex claims with efficiency and accuracy.  In addition to her impressive technical skills, Maggie also possesses exceptional interpersonal skills. They always maintained clear and open communication with all parties involved in the claims process, ensuring that everyone was on the same page and that all questions were answered.  Overall, I highly recommend Maggie to any company or organization. Her combination of technical expertise, innovative thinking, and exceptional communication skills make her a true standout in any role she undertakes.",
    link: "https://www.linkedin.com/in/maggie-messer/#recommendations",
  },
  {
    photo: T3,
    name: "Lian Perez",
    review:
      "Maggie is stellar and for sure an up and coming dev you want to know and work with. You go girl!  #womenintechnology #webdevelopment #softwaredevelopment",
    link: "https://www.linkedin.com/posts/lian-perez-11832297_opentowork-codingbootcamp-careerchange-activity-7044757016610828288-hNXA?utm_source=share&utm_medium=member_desktop",
  },
  {
    photo: T2,
    name: "Joyce Jewell",
    review:
      "Maggie is diligent, patient, focused, flexible and always willing to collaborate. She is kind and considers the big picture when looking at an interruption or problem. She has as much success in a team environment as she does with individual contribution and anyone would be lucky to work with her!",
    link: "https://www.linkedin.com/in/maggie-messer/#recommendations",
  },
  {
    photo: T1,
    name: "Laura Crowell",
    review:
      "Please let me know if you need a reference for Maggie. She is an amazing person, professional and an extremely hard worker. Can perform exceptionally under pressure. Highly recommend!!!",
    link: "https://www.linkedin.com/posts/laura-crowell-cpsr-17600a122_opentowork-codingbootcamp-careerchange-activity-7044783505871880192-3xFR?utm_source=share&utm_medium=member_desktop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container mySwiper"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data.map(({ photo, name, review, link }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={photo} alt={name}></img>
              </div>
              <a href={link} target="_blank" rel="noreferrer">
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
