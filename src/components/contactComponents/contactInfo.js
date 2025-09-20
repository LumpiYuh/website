// src/components/contactComponents/contactInfo.js

import React from "react";
import '../../styles/Contact.scss';

class ContactInfo extends React.Component {
  render() {
    return (
      <div className="contact-info-container">
        <h1>Inquiries?</h1>
        <p>
          Feel free to reach out if you would like to learn more about us or if you would like to partner with us-- 
          whether you are a small business, student organization, or independent artist.
        </p>
      </div>
    );
  }
}

export default ContactInfo;
