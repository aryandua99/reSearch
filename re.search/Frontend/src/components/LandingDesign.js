// src/components/LandingDesign.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling/LandingDesign.css' // Import CSS file for styling




function LandingDesign() {
   const navigate = useNavigate();


   return (
       <div className="landing-container">
           <h1 className="landing-title">Welcome to Our Project</h1>
           <div className="button-container">
               <button className="landing-button" onClick={() => navigate('/signup')}>Sign Up</button>
               <button className="landing-button" onClick={() => navigate('/login')}>Log In</button>
           </div>
       </div>
   );
}


export default LandingDesign;
