import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { SUBMIT_APPLICATION } from '../utils/mutations'; // Replace actual mutation

const Application = () => {
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    reason: '' // Could be reason for adoption, volunteering, etc.
  });

  const [submitApplication, { error }] = useMutation(SUBMIT_APPLICATION); //replace with actual mutation

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setApplicationData({
      ...applicationData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process application here
    // Example: await submitApplication({ variables: { ...applicationData } });
    console.log('Application submitted:', applicationData);
  };

  return (
    <div className="container my-1">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="full-name">Full Name:</label>
          <input
            placeholder="Your Full Name"
            name="fullName"
            type="text"
            id="full-name"
            value={applicationData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email Address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={applicationData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="reason">Reason:</label>
          <textarea
            placeholder="Explain your reason"
            name="reason"
            id="reason"
            rows="5"
            value={applicationData.reason}
            onChange={handleInputChange}
          />
        </div>
        {/* error */}
        {error && <p className="error-text">Error submitting application</p>}
        <div className="flex-row flex-end">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default Application;
