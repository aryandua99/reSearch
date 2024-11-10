import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling/LandingDesign.css'; // Import CSS file for styling
import LoginForm from './LoginForm';

function LandingDesign() {
   const navigate = useNavigate();

   return (
       <div className="landing-container">
           <div className="landing-content">
               {/* <h1 className="landing-title">reSearch</h1> */}
               <div className="button-container">
                   {/* <button className="landing-button" onClick={() => navigate('/signup')}>Sign Up</button>
                   <button className="landing-button" onClick={() => navigate('/login')}>Log In</button> */}
                   <LoginForm />
               </div>
           </div>
       </div>
   );
}

export default LandingDesign;
