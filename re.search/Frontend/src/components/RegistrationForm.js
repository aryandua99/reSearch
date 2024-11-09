import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import './styling/RegistrationForm.css';
// import './styling/UniversityDropdown.css';
import email_icon from './Assets/email.png';
import user_icon from './Assets/user.png';
import pwd_icon from './Assets/padlock.png';
import cpwd_icon from './Assets/approve.png';
import uni_icon from './Assets/university.png';


const RegistrationForm = () => {
    
    const handleSignUp = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const pwd = document.getElementById("pwd").value;
        const name = document.getElementById("name").value;
        const cpwd = document.getElementById("cpwd").value;
        // const uni = document.getElementById("universities").uni_id.value;

        if (pwd !== cpwd) {
            alert("Error: Confirmed password does not match password. Please re-enter your password.");
            return; // Exit the function if passwords don't match
        }

        const user = {
            email: email,
            hashed_pwd: pwd, // Replace with actual hashed password
            name: name,
        };

        console.log("User:", user);

        // const createUser = async (user) => {
        //     // console.log("In helper");
        //     try {
        //         const response = await axios.post('http://localhost:8080/api/v1/users/addUser', user);
        //         // console.log(response.data);
        //         // console.log("PASSED DATA");
        //         navigate('/dashboard');
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        // createUser(user);
    };

    return (

        <form>
            {/* <div className='logo'>
                <img src={logo2} alt=""/>
            </div> */}
            {/* In the CSS file, all of these inputs will be under the class name registration-form__input */}
            
            <div className='centering-container'>
                <div className='reg_form_container'>
                    <div className='header'>
                        <div className='text'>Register</div>
                        <div className='underline'></div>
                    </div>
                    <div className='fields'>

                    <div className='field'>
                        <img src={email_icon} alt=""/>
                        <input type="email" id="email" name="email" placeholder='Email ID' autoComplete='off' /><br /><br />
                    </div>

                    <div className='field'>
                        <img src={user_icon} alt=""/>
                        <input type="text" id="name" name="name" placeholder='Name' autoComplete='off' /><br /><br />
                    </div>

                    <div className='field'>
                        <img src={pwd_icon} alt=""/>
                        <input type="password" id="pwd" name="pwd" placeholder='Password' autoComplete='off' /><br /><br />
                    </div>
                    
                    <div className='field'>
                        <img src={cpwd_icon} alt=""/>
                        <input type="password" id="cpwd" name="cpwd" placeholder='Confirm Password' autoComplete='off'/><br /><br />
                    </div>
                        
                    <div className='field'>
                        <img src={uni_icon} alt=""/>
                        <input type="text" id="university" name="university" placeholder='University' autoComplete='off'/><br /><br />
                    </div>
                        
                    {/* <div className='degree-level'>
                        <img src={uni_icon} alt=""/>
                        <input type="text" id="university" name="university" placeholder='University' autoComplete='off'/><br /><br />
                    </div> */}
                        

                </div >
                    
                    <div className='submit-container'>
                        <button type="submit" className='submit' onClick={handleSignUp}>Sign Up</button>
                    </div>

                    </div>
            </div>
        </form>
        
    );
};

export default RegistrationForm;
