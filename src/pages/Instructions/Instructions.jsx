import React from "react";
import "./Instructions.css";
import { NavLink } from "react-router-dom";

const Instructions = () => {
  return (
    <div className="instructions_main">
      <div className="instructions_heading">
        <h1>Mock Test</h1>
      </div>
      <div className="instructions_container">
        <div className="instructions_left">
          <h2>Here are some general instructions for taking an MCQ test:</h2>
          <div className="div1">Jee Mains mock test : Session 1</div>
          <div className="div2">Read the following instructions cerefully</div>
          <div className="div3">Time - 180 min</div>
          <div className="div4">Maximun Marks - 300</div>
          <div>
            <table>
              <tr>
                <th>Subjects</th>
                <th>No. of Questions</th>
                <th>Marks</th>
                <th>Negative marks</th>
                <th>Total Time</th>
              </tr>
              <tr>
                <td>Physics</td>
                <td>25</td>
                <td>100</td>
                <td>1</td>
                <td rowspan="3"></td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>25</td>
                <td>100</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Mathematics</td>
                <td>25</td>
                <td>100</td>
                <td>1</td>
              </tr>
              <tr class="bold-text">
                <td>Total</td>
                <td>75</td>
                <td>300</td>
                <td></td>
                <td>3 Hours</td>
              </tr>
            </table>
          </div>
          <div className="div5">
            1. 25 questions will be there in PCM section. 
          </div>
          <div className="div6">
            2. Your answer shall be updated and saved on a server periodically and also at the end of an examination.
          </div>
          <div className="div7">
            3. Each question will have four choices out of which only ONE is correct answer. The candidate has to choose the correct answer by clicking on the radio button (0) placed before the choice. 
          </div>
          <div className="div8">
            4. You will be <b>awarded 4 marks</b> for each correct answer and <b>1 marks</b> will be deducted for each <b>wrong answer</b>.
          </div>
          <div className="div9">
            5. You can change your answer by clicking on some another option.
          </div>
          <div className="div10">
            6. A number list of all questions appear in the middle of the screen, you can access the questions in any order within a section or across sections by clicking on the question number given on the number list.
          </div>
          <div className="div11">
            7. Do not click on <b>"Submit Test"</b> before completing the test. A test once submitted cannot be resumed.
          </div>
          <div className="div12">
            8. I have read all the instructions carefully and have understood them.
          </div>
        </div>


        <div className="instructions_right">
            <div className="div13">
                <div className="profile_photo"></div>
                <div className="profile">
                    <div className="profile_content1">Luv</div>
                    <div className="profile_content2">MOCKERS</div>
                </div>
            </div>
        </div>
      </div>

      <div className="instructions_footer">
      <NavLink className="instructions_navlink1" to="/Dashboard">
        <button className="instructions_button1">
                Back
        </button>
      </NavLink>

      <NavLink className="instructions_navlink2" to="/Exam">
        <button className="instructions_button2"> 
                Start
        </button>
      </NavLink>
      </div>
    </div>
  );
};

export default Instructions;
