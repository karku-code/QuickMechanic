import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Spinner, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MechanicStatusPage = () => {
  const [request, setRequest] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const phoneNumber = localStorage.getItem('userPhone');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/issue-details/${phoneNumber}`);
        const data = res.data;

        if (data) {
          setRequest(data);
          if (data.status === 'completed') {
            setStatusMsg('✅ Mechanic has arrived and you got help!');
          } else {
            setStatusMsg('⏳ Mechanic is on the way. Please wait...');
          }
        } else {
          setStatusMsg('❌ No request found.');
        }
      } catch (err) {
        console.error('Error fetching status:', err);
        setStatusMsg('❌ No request found.');
      } finally {
        setLoading(false);
      }
    };

    if (phoneNumber) {
      fetchStatus();
    } else {
      setStatusMsg('❌ You are not logged in.');
      setLoading(false);
    }
  }, [phoneNumber]);

  const handleLogout = () => {
    localStorage.removeItem('userPhone');
    navigate('/login'); // or wherever your login page is
  };

  const handleBack = () => {
    navigate(-1); // Go to the previous page
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ width: '26rem', textAlign: 'center' }}>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <>
            <h5>{statusMsg}</h5>
            {request && (
              <>
                <hr />
                <p><strong>Bike Number:</strong> {request.bikeNumber}</p>
                <p><strong>Issue:</strong> {request.issue}</p>
                <p><strong>Location:</strong> {request.currentLocation}</p>
                <p><strong>Price:</strong> ₹{request.price}</p>
                <p><strong>Shop Name:</strong> {request.shopName}</p>
              </>
            )}

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={handleBack}>
                ⬅ Back
              </Button>
              <Button variant="danger" onClick={handleLogout}>
                🚪 Logout
              </Button>
            </div>
          </>
        )}
      </Card>
    </Container>
  );
};

export default MechanicStatusPage;
