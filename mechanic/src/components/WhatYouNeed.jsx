import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Breadcrumb } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const issues = [
  "Bike won't start",
  "Flat tyre",
  "Brake issue",
  "Engine overheating",
  "Battery problem",
  "Chain is broken",
  "Oil leakage",
  "Need general service"
];

const WhatYouNeed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const shopName = location.state?.shopName || 'a mechanic near you';

  return (
    <>
      
      <Navbar bg="light" variant="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            🚗 QuickMechanic
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="ms-auto">
            <Nav>
              <Nav.Link
                onClick={() => navigate('/get-help')}
                style={{ fontWeight: '500' }}
              >
                Get Help
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <Container className="mt-3">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => navigate('/get-help')} style={{ cursor: 'pointer' }}>
            Get Help
          </Breadcrumb.Item>
          <Breadcrumb.Item active>What You Need</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

 
      <Container className="py-4">
        <h3 className="text-center mb-2">Need Help from <span className="text-primary">{shopName}</span>?</h3>
        <p className="text-center text-muted mb-4">Select the issue you're facing so we can assist you quickly.</p>
        
        <Row>
       {issues.map((issue, index) => (
  <Col md={4} sm={6} xs={12} key={index} className="mb-3">
    <Card className="shadow-sm p-3 text-center">
      <Card.Body>
        <Button 
          variant="outline-primary" 
          onClick={() => navigate('/issue-details', {
            state: { shopName, issue }
          })}
        >
          {issue}
        </Button>
      </Card.Body>
    </Card>
  </Col>
))}

        </Row>
      </Container>
    </>
  );
};

export default WhatYouNeed;
