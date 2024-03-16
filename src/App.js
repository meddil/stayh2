import React, { } from 'react';

import { BrowserRouter, Routes } from "react-router-dom";

import Layout from './Components/Landing_Page/LandingPage';
import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;