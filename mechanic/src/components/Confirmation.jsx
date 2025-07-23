import React, { useEffect, useState } from 'react';
import { Modal, Button, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Confirmation = ({ show, onHide, details, onConfirm }) => {
  const [status, setStatus] = useState("waiting");
  const navigate = useNavigate()

  useEffect(() => {
    if (show && details) {
      const timer = setTimeout(() => {
        setStatus("arrived");
        
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, details]);

 
  if (!details) return null;

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Confirm Your Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Issue:</strong> {details.issue}</p>
        <p><strong>Bike Number:</strong> {details.bikeNumber}</p>
        <p><strong>Phone Number:</strong> {details.phoneNumber}</p>
        <p><strong>Location:</strong> {details.currentLocation}</p>
        <p><strong>Mechanic Shop:</strong> {details.shopName}</p>
        <p><strong>Price:</strong> ₹ {details.price}</p>

        {status === "arrived" ? (
          <Alert variant="success" className="mt-3">
            🛠️ Mechanic has arrived at your location!
            
          </Alert>
          
        ) : (
          <div className="text-center mt-3">
            <Spinner animation="border" size="sm" /> Waiting for mechanic to arrive...
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="primary" onClick={onConfirm} disabled={status !== "arrived"}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;
