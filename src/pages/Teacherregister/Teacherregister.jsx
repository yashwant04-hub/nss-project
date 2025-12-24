import React from "react";
import "./Teacherregister.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import image1 from "../../assets/image1.png"

const Teacherregister = () => {


   const [formData, setFormData] = useState({
      username: '',
      email: '',
      schoolname: '',
      createPassword: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // if (formData.password !== formData.confirmPassword) {
      //   alert('Passwords do not match!');
      //   return;
      // }
      alert("Successfully Registered. Plaease Login using email")
      // Add registration logic here
      console.log('Registration submitted', formData);
    };





  return (
    <div className="register-container_teacher">
      <div className="teacher_register_container_left">
        <div className="teacher_register_container_left_image">
          <img src={image1} alt="image" />
        </div>
      </div>

      <div className="teacher_register_container_right">
        <div className="teacher_register_top_btn">
          <NavLink className="register_navlink1" to="/Home">
            <div className="svg_main_container">
              <div className="svg_container">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="#000000"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="svg_text">Back</div>
            </div>
          </NavLink>
        </div>
        <div className="teacher_form_container">
          <form onSubmit={handleSubmit} className="register-form">
            <h2>Teacher Register</h2>
            <div className="form-group">
              <label htmlFor="username">Full Name</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="schoolname">Previous Institution Name</label>
              <input
                type="text"
                id="schoolname"
                name="schoolname"
                value={formData.schoolname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Create Password</label>
              <input
                type="password"
                id="createPassword"
                name="createPassword"
                value={formData.createPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="register-button">
              <NavLink className="register_navlink" to="/">
                Register
              </NavLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Teacherregister;
