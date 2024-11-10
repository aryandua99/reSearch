import { identifyResearchAreas } from '../openaiService';
import React, { useState } from 'react';
import './styling/RegistrationForm.css'; // Import the existing CSS file
import email_icon from './Assets/email.png';
import user_icon from './Assets/user.png';
import pwd_icon from './Assets/padlock.png';
import cpwd_icon from './Assets/approve.png';
import uni_icon from './Assets/university.png';

const RegistrationForm = () => {
  const [page, setPage] = useState(1); // Track the current page
  const [formData, setFormData] = useState({
    name: '',
    degreeLevel: '',
    universityOrCompany: '',
    location: '',
    coursework: '',
    majorsMinors: '',
    graduationYear: '',
    skills: '',
    bio: '',
    email: '',
    socialMedia: ''
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();
    setPage(2); // Move to the next page
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    setPage(1); // Move to the previous page
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Convert relevant_coursework to an array
    const courseworkArray = formData.coursework
      .split(", ")
      .map((course) => course.trim());

    // Convert majorsMinors to an array
    const majorsMinorsArray = formData.majorsMinors
      .split(", ")
      .map((major) => major.trim());

    // Convert skills to an array
    const skillsArray = formData.skills
      .split(", ")
      .map((skill) => skill.trim());

    // Convert socialMedia to an array (split by comma)
    const socialMediaArray = formData.socialMedia
      .split(", ")
      .map((link) => link.trim());

    // Bio remains as a string
    const bioData = formData.bio.trim();

    // Format the data for API
    const data = {
      name: formData.name.trim(),
      degree_level: formData.degreeLevel.trim(),
      university_or_company: formData.universityOrCompany.trim(),
      location: formData.location.trim(),
      relevant_coursework: courseworkArray, // Array of coursework
      majors_minors: majorsMinorsArray, // Array of majors/minors
      graduation_year: parseInt(formData.graduationYear, 10), // Ensure it's an integer
      skills: skillsArray, // Array of skills
      bio: bioData, // Bio as a string
      contact_information: {
        email: formData.email.trim(),
        social_media: socialMediaArray, // Array of social media links
      },
      research_areas: [], // Leave empty for the function to determine research areas
    };

    console.log("Data passed to API:", data);

    try {
      const apiResponse = await identifyResearchAreas(data);
      setResponse(apiResponse); // Store the response for display
    } catch (error) {
      setError("Error identifying research areas");
      console.error("API call error:", error);
    }
  };


  return (
    <form onSubmit={handleSignUp}>
      <div className='centering-container'>
        <div className='reg_form_container'>
          <div className='header'>
            <div className='text'>Register</div>
            <div className='underline'></div>
          </div>

          {/* Page 1 */}
          {page === 1 && (
            <div className='fields'>
              <div className='field'>
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='field'>
                <input
                  type="text"
                  id="degreeLevel"
                  name="degreeLevel"
                  placeholder="Degree Level"
                  value={formData.degreeLevel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='field'>
                <img src={uni_icon} alt="" />
                <input
                  type="text"
                  id="universityOrCompany"
                  name="universityOrCompany"
                  placeholder="University or Company"
                  value={formData.universityOrCompany}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='field'>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='field'>
                <input
                  type="text"
                  id="coursework"
                  name="coursework"
                  placeholder="Relevant Coursework"
                  value={formData.coursework}
                  onChange={handleChange}
                />
              </div>

              <div className='submit-container'>
                <button type="button" className='submit' onClick={handleNext}>Next</button>
              </div>
            </div>
          )}

          {/* Page 2 */}
          {page === 2 && (
            <div className='fields'>
              <div className='field'>
                <input
                  type="text"
                  id="majorsMinors"
                  name="majorsMinors"
                  placeholder="Majors/Minors"
                  value={formData.majorsMinors}
                  onChange={handleChange}
                />
              </div>

              <div className='field'>
                <input
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  placeholder="Graduation Year"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='field'>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  placeholder="Skills"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </div>

              <div className='field'>
                <textarea
                  id="bio"
                  name="bio"
                  placeholder="Bio"
                  value={formData.bio}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className='field'>
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='field'>
                <input
                  type="text"
                  id="socialMedia"
                  name="socialMedia"
                  placeholder="GitHub/LinkedIn/Personal Website"
                  value={formData.socialMedia}
                  onChange={handleChange}
                />
              </div>

              <div className='field'>
                <img src={pwd_icon} alt="" />
                <input
                  type="password"
                  id="pwd"
                  name="pwd"
                  placeholder="Password"
                  required
                />
              </div>

              <div className='field'>
                <img src={cpwd_icon} alt="" />
                <input
                  type="password"
                  id="cpwd"
                  name="cpwd"
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <div className='submit-container'>
                <button type="button" className='submit' onClick={handlePrevious}>Previous</button>
                <button type="submit" className='submit'>Sign Up</button>
              </div>
            </div>
          )}

          {/* Display response or error */}
          {response && (
            <div>
              <h3>Response:</h3>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;

