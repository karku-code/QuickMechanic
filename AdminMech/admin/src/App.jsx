import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import TrackRequest from './components/TrackRequest';
import AdminNavbar from './components/AdminNavbar';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/" />;
};

const AppLayout = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/']; 

  const HideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!HideNavbar && <AdminNavbar />}
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/track-request"
          element={
            <ProtectedRoute>
              <TrackRequest />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
