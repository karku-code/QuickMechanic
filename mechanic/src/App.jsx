import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import GetHelpPage from './components/GetHelpPage'; 
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import WhatYouNeed from './components/WhatYouNeed';
import IssueDetails from './components/IssueDetails';
import MechanicStatusPage from './components/MechanicStatusPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/get-help" element={<GetHelpPage />} />
        <Route path="/what-you-need" element={<WhatYouNeed />} />
        <Route path="/issue-details" element={<IssueDetails />} />
        <Route path="/status" element={<MechanicStatusPage />} />
        
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;
