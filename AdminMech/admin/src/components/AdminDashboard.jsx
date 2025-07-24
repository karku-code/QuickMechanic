import React, { useEffect, useState } from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/requests');
    setRequests(res.data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (id, newStatus) => {
    await axios.put(`http://localhost:5000/api/admin/requests/${id}`, { status: newStatus });
    fetchRequests();
  };

  const deleteRequest = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:5000/api/admin/requests/${id}`);
      fetchRequests();
    }
  };

  return (
    <>
   
      <div className="container mt-4">
        <h2>Admin - Mechanic Requests</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Issue</th>
              <th>Shop</th>
              <th>User Location</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(req => (
              <tr key={req._id}>
                <td>{req.issue}</td>
                <td>{req.shopName}</td>
                <td>{req.currentLocation}</td>
                <td>
                 <Badge bg={req.status === 'completed' ? 'success' : 'warning'}>
  {req.status === 'completed' ? 'Completed' : 'Pending'}
</Badge>

                </td>
                <td>{req.phoneNumber}</td>
                <td>
                  <td>
  {req.status !== 'completed' && (
    <Button
      variant="success"
      size="sm"
      onClick={() => updateStatus(req._id, 'completed')}
      className="me-2"
    >
      Mark as Completed
    </Button>
  )}
  <Button variant="danger" size="sm" onClick={() => deleteRequest(req._id)}>
    Delete
  </Button>
</td>
 </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminDashboard;
