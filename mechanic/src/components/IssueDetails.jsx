
import React, { useState } from 'react';
import { Container, Form, Button, Toast, Card, Navbar, Nav, Breadcrumb } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Confirmation from './Confirmation';


const issuePrices = {
  "Bike won't start": 150,
  "Flat tyre": 100,
  "Brake issue": 200,
  "Engine overheating": 300,
  "Battery problem": 250,
  "Chain is broken": 180,
  "Oil leakage": 220,
  "Need general service": 350
};

const IssueDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { issue, shopName } = location.state || {};

  const price = issuePrices[issue] || 100;

  const [bikeNumber, setBikeNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentLocation) {
      alert('Please enter your current location');
      return;
    }

    const formDetails = {
      issue,
      shopName,
      bikeNumber,
      phoneNumber,
      currentLocation,
      price,
    };

    setDetails(formDetails);
    setShowModal(true);
  };

  const handleConfirm = async () => {
    try {
      await axios.post('http://localhost:5000/api/issue-details', details);
      setShowModal(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Failed to submit issue details:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* Navbar & Breadcrumb Code (same as before) */}

      <Container className="py-4">
        <Card className="p-4 shadow-sm">
          <h4 className="text-center mb-3 text-primary">{issue}</h4>
          <p className="text-center text-muted mb-4">
            You are requesting help from <strong>{shopName || 'a nearby mechanic'}</strong>.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="bikeNumber">
              <Form.Label>Bike Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your bike number"
                value={bikeNumber}
                required
                onChange={(e) => setBikeNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Your Current Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Near bus stop, Anna Nagar, Chennai"
                value={currentLocation}
                required
                onChange={(e) => setCurrentLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="payment">
              <Form.Label>Payment Amount (in ₹)</Form.Label>
              <Form.Control type="text" value={`₹ ${price}`} readOnly />
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" variant="primary">Request Help</Button>
            </div>
          </Form>
        </Card>
      </Container>

      <Confirmation
        show={showModal}
        onHide={() => setShowModal(false)}
        details={details}
        onConfirm={handleConfirm}
      />
  

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        bg="success"
        className="position-fixed bottom-0 end-0 m-4"
      >
        <Toast.Header>
          <strong className="me-auto">QuickMechanic</strong>
        </Toast.Header>
        <Toast.Body className="text-white">
          🛠️ Mechanic arrived Thankyou for chose our service!
        </Toast.Body>
      </Toast>
    </>
  );
};

export default IssueDetails;
