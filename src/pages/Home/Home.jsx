import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import image4 from "../../assets/image4.png";

const Home = () => {
  return (
    <div className="home_main">
      <div className="home_container">
        <div className="home_container_left">
          <div className="home_container_left_image">
            <img src={image4} alt="image" />
          </div>
        </div>

        <div className="home_container_right">
            <div className="home_top_btn">          
             <NavLink className="home_navlink1" to="/">
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

          <div className="home_down">
            <div className="home_down_heading">
              <h2>Choose who you are</h2>
              <p>
                Join millions of students and teachers in the best learning
                platform
              </p>
            </div>
            <div className="student_teacher_container">
            <NavLink className="home_navlink" to="/Teacherregister">
            <div className="home_down_btn">
                Teacher
            </div>
            </NavLink>

            <NavLink className="home_navlink" to="/Registerstudent">
            <div className="home_down_btn">
                Student
            </div>
            </NavLink>
            </div>


            <div className="below_button_content">
              Already have an account?{" "}
              <NavLink className="home_navlink2" to="/">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
