import React from "react";
import "./Performance.css";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Navbar_left from "../../components/Navbar_left/Navbar_left";
import Progress_report from "../../components/Progress_report/Progress_report";

const Performance = () => {
  return (
    <div className="performance_main">
      <div className="performance_main_top">
        <Navbar route="/Dashboard"/>
      </div>

      <div className="performance_main_bottom">
        <div className="performance_main_bottom_left">
          <Navbar_left/>
        </div>
        <div className="performance_main_bottom_right"> 
          <div className="performance_main_bottom_right_heading">
           <u>Your Progress Report:</u> 
          </div>
          <div className="performance_main_bottom_right_container">

          <Progress_report/>
          <Progress_report/>
      

          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
