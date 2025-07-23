import React, { useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const feedbacks = [
  {
    id: 1,
    name: 'Ravi Kumar',
    comment: 'QuickMechanic saved my day! Mechanic arrived in 15 mins and fixed my bike quickly.',
    location: 'Chennai',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Meena ',
    comment: 'Great service and polite staff. Highly recommended! Mechanic arrived in 15 mins and fixed my bike quickly',
    location: 'Madurai',
    image: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    name: 'Akash',
    comment: 'My car had a flat tire, and they came super fast. Loved the service!',
    location: 'Coimbatore',
    image: 'https://i.pravatar.cc/150?img=3'
  },
   {
    id: 4,
    name: 'bala',
    comment: 'My car had a flat tire, and they came super fast. Loved the service!',
    location: 'Thirumangalam',
    image: 'https://i.pravatar.cc/150?img=4'
  },
   {
    id: 5,
    name: 'saravanan',
    comment: 'My car had a flat tire, and they came super fast. Loved the service!',
    location: 'Thirunagar',
    image: 'https://i.pravatar.cc/150?img=5'
  },
   {
    id: 6,
    name: 'Bashkar',
    comment: 'My car had a flat tire, and they came super fast. Loved the service!',
    location: 'Villapuram',
    image: 'https://i.pravatar.cc/150?img=6'
  },


];

const CustomerFeedback = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Container className="my-5">
      <h3 className="text-center mb-4" data-aos="fade-down">What Our Customers Say</h3>
      <Row>
        {feedbacks.map((fb, index) => (
          <Col md={4} sm={6} xs={12} key={fb.id} data-aos="fade-up" data-aos-delay={index * 150}>
            <Card className="shadow-sm mb-4 border-0" style={{ borderRadius: '15px' }}>
              <Card.Body className="text-center">
                <img
                  src={fb.image}
                  alt={fb.name}
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <Card.Title className="fw-bold">{fb.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{fb.location}</Card.Subtitle>
                <Card.Text className="text-secondary">"{fb.comment}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerFeedback;
