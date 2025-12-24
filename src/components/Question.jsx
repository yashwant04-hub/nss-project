import React, { useState, useEffect } from "react";
import Status from "./Status";
import Timer from './Timer';
import Submit from './Submit';
import Subject from "./Subject";


const Question = () => {

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [integerInput, setIntegerInput] = useState("");
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=90&difficulty=medium&type=multiple"
        );
        const data = await response.json();
        const multipleChoiceQuestions = data.results.map((question, index) => ({
          id: index + 1,
          text: question.question,
          options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
          type: "multiple",
        }));
        setQuestions(multipleChoiceQuestions);
        setStatuses(new Array(multipleChoiceQuestions.length).fill(null));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleClearSelection = () => {
    setSelectedOption(null);
    setIntegerInput("");
  };

  const handleMarkForReview = () => {
    const updatedStatuses = [...statuses];
    updatedStatuses[currentQuestion] = "review";
    setStatuses(updatedStatuses);

    setCurrentQuestion((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
    setSelectedOption(null);
    setIntegerInput("");
  };

  // var attempted;
  // var unattempted;

  const handleNext = () => {
    const updatedStatuses = [...statuses];
    if (selectedOption || integerInput) {
      updatedStatuses[currentQuestion] = "answered";
      // attempted++;
      console.log("attempted");
    } else {
      updatedStatuses[currentQuestion] = "unanswered";
      // unattempted++;
      console.log("unattempted");
    }
    setStatuses(updatedStatuses);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIntegerInput("");
    } else {
      console.log("Quiz completed!");
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestion(index);
    setSelectedOption(null);
    setIntegerInput("");
  };

  const handleJumpToQuestion = (index) => {
    setCurrentQuestion(index);
    setSelectedOption(null);
    setIntegerInput("");
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    if (question.type === "multiple") {
      return question.options.map((option, index) => (
        <div key={index}>
          <label className="opts">
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </label>
        </div>
      ));
    }

    else {
      return (
        <div>
          <label>
            <input
              type="number"
              value={integerInput}
              onChange={(e) => setIntegerInput(e.target.value)}
            />
          </label>
        </div>
      );
    }
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (questions.length === 0) {
    return <div>No questions available!</div>;
  }

  return (
    <div className="question">
      <div className="question-left">
        <Subject onJumpToQuestion={handleJumpToQuestion} totalQuestions={questions.length}/>
        <div className="ques-top">
          <div className="ques">
            {currentQuestion + 1}. {questions[currentQuestion].text}
          </div>
          {renderQuestion()}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleClearSelection} className="clear-response">Clear Selection</button>
          <button onClick={handleMarkForReview} className="mark-for-review">Mark for Review</button>
          <button onClick={handleNext} className="save-next">Save and Next</button>
        </div>
      </div>
      <div className="question-right">
        <Timer></Timer>
        <Status
          questions={questions}
          currentQuestion={currentQuestion}
          statuses={statuses}
          onQuestionSelect={handleQuestionSelect}
        />
        <Submit></Submit>
      </div>
    </div>
  );
};

export default Question;