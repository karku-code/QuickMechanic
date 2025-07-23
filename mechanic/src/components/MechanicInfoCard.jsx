import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mechanic from '../assets/mechanic.jpg';
import './MechanicInfoCard.css'; 

const MechanicInfoCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mechanic-card-container" style={{
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <img
        src={mechanic}
        alt="Mechanic"
        className="mechanic-image"
        data-aos="zoom-in-up"
        style={{
          width: '220px',
          marginBottom: '20px',
          borderRadius: '8px'
        }}
      />
      <p style={{
        fontSize: '18px',
        fontStyle: 'italic',
        color: '#333',
        marginBottom: '10px'
      }}>
        🔧 "Fixing bikes isn't just a job — it's a passion on wheels!"
      </p>
      <p style={{
        fontSize: '16px',
        color: '#007bff',
        fontWeight: '500'
      }}>
        📞 Customer Care: <strong>+91 98765 43210</strong>
      </p>
    </div>
  );
};

export default MechanicInfoCard;
