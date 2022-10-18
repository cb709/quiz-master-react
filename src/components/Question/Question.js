import React, { useState } from "react";
import "./Question.css";
const Question = ({ question: data, index }) => {
  const { options, question, correctAnswer } = data;
  const questionTitle = question.slice(3, -4);

  const [ans, setAns] = useState(true);

  return (
    <div className="question">
      <div className="question-head">
      <p className="question-title">
        {index + 1} : {questionTitle}
      </p>
      <button onClick={()=> setAns(!ans)}>
        Answer
      </button>
      </div>
      <div className="options">
        {options.map((option, index) => (
          <div className="option" key={index}>
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className={ ans ? 'correct-ans d-none' : 'correct-ans'}>
        <p>Answer: {correctAnswer}</p>
      </div>
    </div>
  );
};

export default Question;
