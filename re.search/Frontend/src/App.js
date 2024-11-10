import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import your Navbar component (assuming it's called Navbar.js)
// import Navbar from './components/Navbar';

import { Dashboard } from './pages/Dashboard';
import { Landing } from './pages/Landing';
import { Profile } from './pages/Profile';
import { Signup } from './pages/Signup';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
