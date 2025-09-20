// src/pages/contact.js

import React from "react";
import ContactForm from "../components/contactComponents/contactForm";
import ContactInfo from "../components/contactComponents/contactInfo";
import SocialLinks from "../components/contactComponents/socialLinks";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <div className="contact-container">
          <ContactInfo />
          <ContactForm />
        </div>
        <SocialLinks />
      </div>
    );
  }
}

export default Contact;
