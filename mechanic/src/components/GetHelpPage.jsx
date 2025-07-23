import React, { useEffect } from 'react';
import {
  Container, Row, Col, Card, Breadcrumb, Navbar, Nav
} from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import bike from '../assets/bike.jpg';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({ iconUrl: icon, shadowUrl: iconShadow });

const mockMechanics = [
  { id: 1, name: 'Shiva Auto Repair', lat: 13.052, lng: 80.249 },
  { id: 2, name: 'Sundar Mechanic Point', lat: 13.057, lng: 80.250 },
  { id: 3, name: 'QuickFix Garage', lat: 13.049, lng: 80.255 },
 
];

const GetHelpPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleRequestHelp = (shopName) => {
    navigate('/what-you-need', { state: { shopName } });
  };

  const phoneNumber = localStorage.getItem('userPhoneNumber');

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>🚗 QuickMechanic</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <Container className="pt-3">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Get Help</Breadcrumb.Item>
        </Breadcrumb>

        <h2 className="text-center mb-4" data-aos="zoom-in">Find Nearby Mechanics</h2>

        <Row>
          {/* Map */}
          <Col md={8} data-aos="fade-up">
            <MapContainer center={[13.052, 80.249]} zoom={14} style={{ height: '400px' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {mockMechanics.map((mech) => (
                <Marker key={mech.id} position={[mech.lat, mech.lng]}>
                  <Popup>
                    <strong>{mech.name}</strong><br />
                    <button
                      className="btn btn-sm btn-primary mt-2"
                      onClick={() => handleRequestHelp(mech.name)}
                    >
                      Request Help
                    </button>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            <div className="text-center mt-3">
              <img src={bike} alt="Mechanic Help" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          </Col>

          {/* Mechanic List */}
          <Col md={4}>
            {mockMechanics.map((mech, index) => (
              <Card key={mech.id} className="mb-3 shadow p-3" data-aos="fade-left" data-aos-delay={index * 100}>
                <h5>{mech.name}</h5>
                <p className="text-muted">Lat: {mech.lat}, Lng: {mech.lng}</p>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => handleRequestHelp(mech.name)}
                >
                  Request Help
                </button>
              </Card>
            ))}
          </Col>
        </Row>

        
        <div className="mt-5">
        
        </div>
      </Container>
    </>
  );
};

export default GetHelpPage;
