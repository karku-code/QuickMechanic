import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WelcomeScreen.css';
import CustomerFeedback from './CustomerFeedback';
import logo1 from '../assets/logo1.jpg';
import LuxuryCards from './LuxuryCards';
import shop1 from '../assets/shop1.jpeg';
import shop2 from '../assets/shop2.jpeg';
import shop3 from '../assets/shop3.jpeg';
import shop4 from '../assets/shop4.jpeg';
import shop5 from '../assets/shop5.jpeg';
import shop6 from '../assets/shop6.jpeg';
import shop7 from '../assets/shop7.jpeg';
import shop8 from '../assets/shop8.jpeg';
import MechanicInfoCard from './MechanicInfoCard';

const mockMechanics = [
  { id: 1, name: 'Shiva Auto Repair', image: shop1 },
  { id: 2, name: 'Sundar Mechanic Point', image: shop2 },
  { id: 3, name: 'QuickFix Garage', image: shop3 },
  { id: 4, name: 'Quick Repair', image: shop4 },
  { id: 5, name: 'Instant Mechanic Point', image: shop5 },
  { id: 6, name: 'Fast Garage', image: shop6 },
  { id: 7, name: 'Safe Drive Point', image: shop7 },
  { id: 8, name: 'No.1 Bike Care', image: shop8 }
];

const WelcomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userPhone');
    navigate('/');
  };

  const userPhone = localStorage.getItem('userPhone');

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            🏍️ QuickMechanic
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="ms-auto">
            <Nav className="align-items-center">
              <Nav.Link onClick={() => navigate('/get-help')} style={{ fontWeight: '500' }}>
                Get Help
              </Nav.Link>

              
                <Nav.Link onClick={() => navigate('/login')} style={{ fontWeight: '500' }}>
                  Track Status
                </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Welcome Section */}
      <Container fluid className="bg-light pt-5" style={{ minHeight: 'calc(100vh - 56px)' }}>
        <Row className="justify-content-center pt-4">
          <Col md={8} className="text-center" data-aos="fade-up">
            <img src={logo1} alt="QuickMechanic Logo" width="300" className="mb-3 bike-slide-in" />
            <h1 className="fw-bold">QuickMechanic</h1>
            <p className="lead text-muted">Help is just around the corner.</p>
            <Button
              variant="primary"
              size="lg"
              className="mt-4"
              onClick={() => navigate('/get-help')}
            >
              Get Help Now
            </Button>
          </Col>
        </Row>

        <LuxuryCards />

        <Container className="mt-3">
          <h4 className="text-center mb-4" data-aos="fade-up">
            Nearby Mechanic Shops
          </h4>
          <Row>
            {mockMechanics.map((shop, index) => (
              <Col
                md={3}
                sm={6}
                xs={12}
                key={`${shop.id}-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="mb-4 shadow-sm" style={{ fontSize: '0.9rem' }}>
                  <Card.Img
                    variant="top"
                    src={shop.image}
                    style={{ height: '140px', objectFit: 'cover' }}
                  />
                  <Card.Body className="p-2">
                    <Card.Title className="fs-6">{shop.name}</Card.Title>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        navigate('/what-you-need', {
                          state: { shopName: shop.name }
                        })
                      }
                    >
                      Request Help
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <CustomerFeedback />
        <MechanicInfoCard />
      </Container>
    </>
  );
};

export default WelcomeScreen;
