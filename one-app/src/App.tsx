import LoginSignupForm from './LoginSignup/LoginSignUpForm';
import UserDashboard from './UserDashboard/UserDashboard';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignupForm />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
