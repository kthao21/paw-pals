import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import logo from '../assets/images/pawpals.png';
// 

// Replace with actual mutation
import { SEND_CONTACT_MESSAGE } from '../utils/mutations';

const Contact = () => {
  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Placeholder. Replace with actual mutation call
  const [sendContactMessage, { error }] = useMutation(SEND_CONTACT_MESSAGE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactState({
      ...contactState,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // call the mutation or send the message to backend/email service
    // Replace with actual mutation call
    console.log('Contact message sent:', contactState);
  };

  return (
    <div className="contact-form">
      <div className='contact-card'>
      <img src={logo} alt="logo" className='contact-logo' />
      <h2 className='contact-title'>Contact Us!</h2>
      <form onSubmit={handleSubmit} className='form-submit'>
        <div className="name-section">
          <label htmlFor="name">Name:</label>
          <input
            className='input-name'
            placeholder="Your Name:"
            name="name"
            type="text"
            id="name"
            value={contactState.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="email-section">
          <label htmlFor="email">Email address:</label>
          <input
            className='input-email'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={contactState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="message-section">
          <label htmlFor="message">Message:</label>
          <textarea
            className='input-message'
            placeholder="Your message here..."
            name="message"
            id="message"
            rows="5"
            cols="30"
            value={contactState.message}
            onChange={handleInputChange}
          />
        </div>
        {/* error */}
        {error && <p className="error-text">Error sending message</p>}
        <div className="center-button">
          <button type="submit" className='button-submit'>Send Message</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
