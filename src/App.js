// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsultingFirmWebsite from './ConsultingFirmWebsite';
import SignIn from './SignIn';

function App() {
  return (
    <Router>
      {/* Define routes for your application */}
      <Routes>
        {/* Main consulting firm website */}
        <Route path="/" element={<ConsultingFirmWebsite />} />
        
        {/* Sign-in page */}
        <Route path="/signin" element={<SignIn />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;