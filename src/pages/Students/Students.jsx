import React, { useState } from "react";
import "./Students.css";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Navbar_left from "../../components/Navbar_left/Navbar_left";

const Students = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="student_main">
      <div className="student_main_top">
        <Navbar route="/Dashboard" />
      </div>

      <div className="student_main_down">

        <div className="student_main_down_left">
          <Navbar_left />
        </div>

        <div className="student_main_down_right">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form-box">

              <div className="form-group-top">

                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

              </div>
              

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="profile-submit-button-container">
              <button type="submit" className="profile-submit-button">
                SAVE
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
