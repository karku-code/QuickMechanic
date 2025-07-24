import React, { useState } from 'react';
import axios from 'axios';




const TrackRequest = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [request, setRequest] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/track-request/${phoneNumber}`);
      setRequest(res.data);
      setError('');
    } catch (err) {
      setRequest(null);
      setError('No request found for this number');
    }
  };

  const goToDashboard = () => {
    window.location.href = '/dashboard';
  };

  return (
    <>
     
      <div className="container mt-4">
        <h2>Track Your Request</h2>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="form-control my-3"
        />
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
{request && (
  <div className="mt-4">
    <h4>Request Details:</h4>
    <p><strong>Bike Number:</strong> {request.bikeNumber}</p>
    <p><strong>Issue:</strong> {request.issue}</p>
   <p><strong>Status:</strong> {request.status === 'completed' ? '✅ Completed' : '⏳ Pending'}</p>

  <button onClick={goToDashboard} className="btn btn-success mt-3">Next</button>

  </div>
)}



        {error && <p className="text-danger mt-3">{error}</p>}
        
       
      </div> 
      
    </>
  );
};

export default TrackRequest;
