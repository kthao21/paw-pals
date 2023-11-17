import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; // 

// Replace with actual mutation
// import { SEND_CONTACT_MESSAGE } from '../utils/mutations';

const Contact = () => {
  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    message: ''
  });

  // This is a placeholder. Replace with actual mutation call
  // const [sendContactMessage, { error }] = useMutation(SEND_CONTACT_MESSAGE);

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
    // Example: await sendContactMessage({ variables: { ...contactState } });
    console.log('Contact message sent:', contactState);
  };

  return (
    <div className="container my-1">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Your Name"
            name="name"
            type="text"
            id="name"
            value={contactState.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={contactState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="Your message"
            name="message"
            id="message"
            rows="5"
            value={contactState.message}
            onChange={handleInputChange}
          />
        </div>
        {/* Uncomment if using Apollo mutation */}
        {/* {error && <p className="error-text">Error sending message</p>} */}
        <div className="flex-row flex-end">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
