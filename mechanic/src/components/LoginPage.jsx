import React, { useState } from 'react';
import { Container, Form, Button, Card, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userPhone', phoneNumber);
    navigate('/status');
  };

  return (
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Track Request</Breadcrumb.Item>
      </Breadcrumb>

      <div className="d-flex justify-content-center" style={{marginBottom:"150px"}}>
        <Card className="p-4 shadow" style={{ width: '26rem' }}>
          <h4 className="mb-3 text-center">Track Mechanic Request</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Track Request
            </Button>
          </Form>
        </Card>
      </div>
    </Container>
  );
};

export default LoginPage;
