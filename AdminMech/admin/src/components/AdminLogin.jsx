import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const endpoint = isLogin ? 'login' : 'register';

    try {
      const res = await axios.post(`http://localhost:5000/api/admin/${endpoint}`, {
        email,
        password,
      });

      if (isLogin) {
        localStorage.setItem('adminLoggedIn', true);
        navigate('/track-request');
      } else {
        setSuccessMsg('Registration successful. You can now log in.');
        setIsLogin(true);
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded shadow" style={{ width: '100%', maxWidth: 400 }}>
        <h2 className="text-center mb-4">{isLogin ? 'Admin Login' : 'Admin Register'}</h2>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        {successMsg && <div className="alert alert-success">{successMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="text-center mt-3">
          <button
            className="btn btn-link"
            onClick={() => {
              setIsLogin(!isLogin);
              setErrorMsg('');
              setSuccessMsg('');
            }}
          >
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
