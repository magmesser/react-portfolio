import React from "react";
import "./Testimonials.css";
import T1 from "../../assets/reviews/T1.jpeg"
import T2 from "../../assets/reviews/T2.jpeg"
import T3 from "../../assets/reviews/T3.jpeg"
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    photo: T1,
    name: "Laura Crowell",
    review:
      "Please let me know if you need a reference for Maggie. She is an amazing person, professional and an extremely hard worker. Can perform exceptionally under pressure. Highly recommend!!!",
  },
  {
    photo: T2,
    name: "Joyce Jewell",
    review:
      "Recommend Maggie Messer 1000% - give her a shout if you're looking for someone amazing.",
  },
  {
    photo: T3,
    name: "Lian Perez",
    review:
      "Maggie is stellar and for sure an up and coming dev you want to know and work with. You go girl!  #womenintechnology #webdevelopment #softwaredevelopment",
  }  
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
        {data.map(({ photo, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={photo} alt={name}></img>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
