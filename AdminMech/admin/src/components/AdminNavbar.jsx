import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="admin-navbar" />
        <Navbar.Collapse id="admin-navbar">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/dashboard')}>Dashboard</Nav.Link>
            <Nav.Link onClick={() => navigate('/track-request')}>Track Request</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
