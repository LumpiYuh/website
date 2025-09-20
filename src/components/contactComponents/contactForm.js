// src/components/contactComponents/contactForm.js

import React from "react";
import '../../styles/Contact.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const { name, email, subject, message } = this.state;
    
    // Create mailto link with pre-filled content
    const mailtoLink = `mailto:trenducsd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
  }

  render() {
    return (
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="subject"
            value={this.state.subject}
            onChange={this.handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="message"
            value={this.state.message}
            onChange={this.handleChange}
            rows="8"
            required
          />
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
