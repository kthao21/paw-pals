import { useEffect,useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client'; 
// import { PROCESS_DONATION } from '../utils/mutations'; // Replace with actual mutation
const stripePromise = loadStripe(
  
  "pk_test_51OHHd6HwQxiU7xTHVUdQJ5Cy8dpfPRpB6G4frsvTbDGbZdMwNGvjZF7V9Uz0zNfFIlkwqrmkCqqNwGDz1rf3kQog00kwWLcdLe"
);

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [shelterId, setShelterId] = useState('');
  const [shelters, setShelters] = useState([
    { id: '1', name: 'Berkeley Humane' },
    { id: '2', name: 'Central California SPCA' },
    { id: '3', name: 'Friends of the Alameda Aniaml Shelter' },
    { id: '4', name: 'Front Street Animal Shelter' },
    { id: '5', name: 'Happy Tails Pet Sanctuary' },
    { id: '6', name: 'Humane Society Silicon Valley' },
    { id: '7', name: 'Humane Soceity of Truckee-Tahoe South' },
    { id: '8', name: 'Placer County SPCA' },
    { id: '9', name: 'Sacramento SPCA' },
    { id: '10', name: 'San Francisco SPCA Adoption Center' },
   ]);

  const [getCheckout, { error, data }] = useLazyQuery(QUERY_CHECKOUT);
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        console.log ("got checkout")
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const handleInputChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleShelterChange = (event) => {
    setShelterId(event.target.value);
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process the donation here, e.g., call mutation or another function
    getCheckout({
      variables: {amount: parseFloat(donationAmount), shelterId: shelterId},
    });
    console.log('Donation submitted:', donationAmount);
  };

  return (
    <div className="container my-1">
      <h2>Make a Donation</h2>
      <p>
   Help us by making a donation to support our shelters. Your donation will go directly to the shelter of your choice.
 </p>
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
        {error && <p className="error-text">Error processing donation: {console.log(error)}</p>}
        <div className="flex-row flex-end">
          <button type="submit">Donate</button>
        </div>
      </form>
 
 <h2><a href="https://www.berkeleyhumane.org">Berkeley Humane</a></h2>
 <p>
  Location - 2700 Ninth St, Berkeley, CA 94710 <br />
  Phone Number - 510.845.7735
 </p>
 <h2><a href="https://www.ccspca.com">Central California SPCA</a></h2>
 <p>
  Location - 103 S Hughes Ave, Fresno, CA 93706 <br />
  Phone Number - 559.233.7722
 </p>
 <h2><a href="https://www.alamedaanimalshelter.org"> Friends of Alameda Animal Shelter</a></h2>
 <p>
  Location - 1590 Frontmann Way, Alameda, CA 94501 <br />
  Phone Number - 510.337.8565
 </p>
 <h2> <a href="https://www.cityofsacramento.org/Community-Development/Animal-Care">Front Street Animal Shelter</a></h2>
 <p>
  Location - 2127 Front St, Sacramento, CA 95818 <br />
  Phone Number - 916.808.7387
 </p>
 <h2><a href="https://www.happytails.org">Happy Tails Pet Sanctuary</a></h2>
 <p>
  Location - 6001 Folsom Blvd, Sacrament, CA 95819 <br />
  Phone Number - 916.556.1155
 </p>
 <h2><a href="https://www.hssv.org">Humane Society Silicon Valley</a></h2>
 <p>
  Location - 901 Ames Ave, Milpitas, CA 95035<br />
  Phone Number - 408.262.2133
 </p>
 <h2><a href="https://hstt.org/">Humane Society Truckee Tahoe South</a> </h2>
 <p>
  Location - 3438 Lake Tahoe Blvd, South Lake Tahoe, CA 96150 <br />
  Phone Number - 530.542.2857
 </p>
 <h2><a href="https://placerspca.org">Placer County SPCA</a></h2>
 <p>
  Location - 200 Tahoe Ave, Roseville, CA 95678 <br />
  Phone Number - 916.782.7722
 </p>
 <h2><a href="https://www.sspca.org">Sacramento SPCA</a></h2>
 <p>
  Location - 6201 Florin Perkins Rd, Sacramento, CA 95828<br />
  Phone Number - 916.383.7387
 </p>
 <h2><a href="https://www.sfspca.org/adoptions/">San Francisco SPCA Adoption Center</a></h2>
 <p>
  Location - 250 Florida St, San Francisco, CA 94103 <br />
  Phone Number - 415.522.3500
 </p>
    </div>
  );
};


export default Donation;
