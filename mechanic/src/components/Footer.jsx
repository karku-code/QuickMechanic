import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
        
          <Col md={4} sm={12} className="mb-4">
            <h5 className="fw-bold">🚗 QuickMechanic</h5>
            <p className="text-white-50 small">
              Your trusted partner for roadside assistance and premium vehicle services — anytime, anywhere.
            </p>
          </Col>

          
          <Col md={4} sm={6} className="mb-4">
            <h6 className="fw-semibold">Quick Links</h6>
            <Nav className="flex-column">
              <Nav.Link onClick={() => navigate('/')} className="text-white-50 p-0 mb-1">Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/get-help')} className="text-white-50 p-0 mb-1">Get Help</Nav.Link>
              <Nav.Link onClick={() => navigate('/login')} className="text-white-50 p-0 mb-1">Login</Nav.Link>
            </Nav>
          </Col>

        
          <Col md={4} sm={6}>
            <h6 className="fw-semibold">Contact Us</h6>
            <p className="text-white-50 small mb-1">Email: support@quickmechanic.com</p>
            <p className="text-white-50 small mb-2">Phone: +91 98765 43210</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 fs-5"><FaFacebook /></a>
              <a href="#" className="text-white-50 fs-5"><FaTwitter /></a>
              <a href="#" className="text-white-50 fs-5"><FaInstagram /></a>
            </div>
          </Col>
        </Row>

        
        <Row>
          <Col className="text-center text-white-50 small">
            &copy; {new Date().getFullYear()} QuickMechanic. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
