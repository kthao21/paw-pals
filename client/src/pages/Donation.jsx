import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { PROCESS_DONATION } from '../utils/mutations'; // Replace with actual mutation

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [shelterId, setShelterId] = useState('');
  const [shelters, setShelters] = useState([]);

  const [processDonation, { error }] = useMutation(PROCESS_DONATION); //  replace with actual mutation

  const handleInputChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleShelterChange = (event) => {
    setShelterId(event.target.value);
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process the donation here, e.g., call mutation or another function
 await processDonation({ variables: { amount: donationAmount, shelterId } });
    console.log('Donation submitted:', donationAmount);
  };

  return (
    <div className="container my-1">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="donation-amount">Donation Amount ($):</label>
          <input
            placeholder="Amount in USD"
            name="donation-amount"
            type="number"
            id="donation-amount"
            value={donationAmount}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
         <label htmlFor="shelter">Select a Shelter:</label>
         <select id="shelter" value={shelterId} onChange={handleShelterChange}>
           {shelters.map((shelter) => (
             <option key={shelter.id} value={shelter.id}>
               {shelter.name}
             </option>
           ))}
         </select>
       </div>
        {/* error */}
        {error && <p className="error-text">Error processing donation</p>}
        <div className="flex-row flex-end">
          <button type="submit">Donate</button>
        </div>
      </form>
    </div>
  );
};

export default Donation;
