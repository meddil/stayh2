import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch'
import DoctorCard from './Components/DoctorCard/DoctorCard'
import AppointmentForm from './Components/AppointmentForm/AppointmentForm'
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Notification>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Sign_Up" element={<SignUp />} />
          <Route path="/Login" Component={Login} />
          <Route path="/reviews" element={<ReviewForm />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} /> 
          <Route path="/FindDoctorSearch" Component={FindDoctorSearch} /> 
          <Route path="/DoctorCard" Component={DoctorCard} />         
          <Route path='/AppointmentForm' Component={AppointmentForm} />
        

        </Routes>
        </Notification>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
