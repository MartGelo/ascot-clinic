import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container scroll-animation">
      <h2>Contact Us</h2>
      <p>
        For any inquiries or to schedule an appointment, please fill out the
        form below.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <div className="form-group">
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
