import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qjmagad",
        "template_utd1ajn",
        form.current,
        "-0fBDvvdgcSeYE7uC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(alert("Your message has been sent"))
      .then(e.target.reset());
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>magmesser@gmail.com</h5>
            <a
              href="mailto:magmesser@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>(850) 226-9911</h5>
            <a
              href="https://api.whatsapp.com/send?phone=18502269911"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            className="form__input"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            className="form__text"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {/* END OF FORM */}
      </div>
    </section>
  );
};

export default Contact;
