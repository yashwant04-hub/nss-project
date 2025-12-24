import React from "react";

const Subject = ({ onJumpToQuestion, totalQuestions }) => {
  return (
    <div className="subject">
      <button onClick={() => onJumpToQuestion(0)} className="subject-button">Physics</button>
      <button onClick={() => onJumpToQuestion(Math.floor(totalQuestions / 3))} className="subject-button">Chemistry</button>
      <button onClick={() => onJumpToQuestion(Math.floor((2 * totalQuestions) / 3))} className="subject-button">Maths</button>
    </div>
  );
};

export default Subject;
