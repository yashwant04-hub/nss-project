import React from "react";

const Status = ({ questions = [], statuses = [], onQuestionSelect }) => {

    if (!questions || questions.length !== 0) {

        return (
            <div className="status">
                <div className="status-button-div">
                    {questions.map((_, index) => (
                        <button className="status-button"
                            key={index}
                            style={{
                                backgroundColor:
                                    statuses[index] === "answered"
                                        ? "rgb(63, 215, 17)"
                                        : statuses[index] === "review"
                                            ? "rgb(153, 35, 255)"
                                            : statuses[index] === "unanswered"
                                                ? "rgb(255, 49, 49)"
                                                : "lightgray",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                            onClick={() => onQuestionSelect(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
};

export default Status;
