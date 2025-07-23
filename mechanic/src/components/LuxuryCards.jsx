// src/components/LuxuryCards.jsx
import React, { useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LuxuryCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="mt-5 p-0">
      <h4 className="text-center mb-4" data-aos="fade-up">Premium Mechanic Services</h4>

      <Carousel fade data-aos="zoom-in">
        {/* Banner 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-photo/car-mechanic-professional-technician-shake-260nw-2287021295.jpg"
            alt="Luxury Mechanic Service"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>Premium On-Road Services</h5>
            <p>We deliver fast, expert support wherever you are.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Banner 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-photo/automobilebannerauto-mechanic-machinestandard-auto-repair-260nw-2179656095.jpg"
            alt="24/7 Towing Service"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>24/7 Towing & Emergency Support</h5>
            <p>Quick towing available for cars & bikes, day or night.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default LuxuryCards;
