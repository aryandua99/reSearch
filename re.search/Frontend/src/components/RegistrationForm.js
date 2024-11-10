import React, { useState } from 'react';
import './styling/RegistrationForm.css';
import email_icon from './Assets/email.png';
import user_icon from './Assets/user.png';
import pwd_icon from './Assets/padlock.png';
import cpwd_icon from './Assets/approve.png';
import uni_icon from './Assets/university.png';

const RegistrationForm = () => {
    const [page, setPage] = useState(1); // Track the current page

    const handleNext = (event) => {
        event.preventDefault();
        setPage(2); // Move to the next page
    };

    const handlePrevious = (event) => {
        event.preventDefault();
        setPage(1); // Move to the previous page
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        // Collect form data and process as needed
        console.log("Form submitted");
    };

    return (
        <form>
            <div className='centering-container'>
                <div className='reg_form_container'>
                    <div className='header'>
                        <div className='text'>Register</div>
                        <div className='underline'></div>
                    </div>

                    {page === 1 && (
                        <div className='fields'>
                            <div className='field'>
                                <img src={user_icon} alt=""/>
                                <input type="text" id="name" name="name" placeholder='Name' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <input type="text" id="degreeLevel" name="degreeLevel" placeholder='Degree Level' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <img src={uni_icon} alt=""/>
                                <input type="text" id="universityOrCompany" name="universityOrCompany" placeholder='University or Company' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <input type="text" id="location" name="location" placeholder='Location' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <input type="text" id="coursework" name="coursework" placeholder='Relevant Coursework' autoComplete='off' /><br /><br />
                            </div>

                            <div className='submit-container'>
                                <button type="button" className='submit' onClick={handleNext}>Next</button>
                            </div>
                        </div>
                    )}

                    {page === 2 && (
                        <div className='fields'>
                            <div className='field'>
                                <input type="text" id="majorsMinors" name="majorsMinors" placeholder='Major(s)/Minor(s)' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <input type="text" id="graduationYear" name="graduationYear" placeholder='Graduation Year' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <input type="text" id="skills" name="skills" placeholder='Skills' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <input type="text" id="bio" name="bio" placeholder='Bio' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <img src={email_icon} alt=""/>
                                <input type="email" id="email" name="email" placeholder='Email ID' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <input type="text" id="githubLinkedInWebsite" name="githubLinkedInWebsite" placeholder='GitHub/LinkedIn/Personal Website' autoComplete='off' /><br /><br />
                            </div>

                            <div className='field'>
                                <img src={pwd_icon} alt=""/>
                                <input type="password" id="pwd" name="pwd" placeholder='Password' autoComplete='off' /><br /><br />
                            </div>
                            
                            <div className='field'>
                                <img src={cpwd_icon} alt=""/>
                                <input type="password" id="cpwd" name="cpwd" placeholder='Confirm Password' autoComplete='off'/><br /><br />
                            </div>

                            <div className='submit-container'>
                                <button type="button" className='submit' onClick={handlePrevious}>Previous</button>
                                <button type="submit" className='submit' onClick={handleSignUp}>Sign Up</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </form>
    );
};

export default RegistrationForm;
