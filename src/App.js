import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/Instant Consultation/InstantConsultation'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Sign_Up" element={<SignUp />} />
          <Route path="/Login" Component={Login} />
          <Route path="/InstantConsultation" Component={InstantConsultation} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
