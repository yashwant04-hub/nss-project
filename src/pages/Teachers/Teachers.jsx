import React from "react";
import "./Teachers.css";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Navbar_left from "../../components/Navbar_left/Navbar_left";
import Teacher_profile from "../../components/Teacher_profile/Teacher_profile";

const Teachers = () => {
  return (
    <div className="teacher_main">
      <div className="teacher_main_up">
        <Navbar route="/Dashboard"/>
      </div>

      <div className="teacher_main_down">
        <div className="teacher_main_left">
          <Navbar_left/>
        </div>
        <div className="teacher_main_right">

          <Teacher_profile/>
          <Teacher_profile/>
          <Teacher_profile/>
          <Teacher_profile/>
 
          


        </div>
      </div>

    </div>
  );
};

export default Teachers;
