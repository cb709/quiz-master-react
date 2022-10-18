import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Quiz.css";

const Quiz = () => {
  const data = useLoaderData();
  const { logo, name, questions , total } = data.data;
  console.log(questions)
  return (
    <div className="quiz-container container">
      <div className="quiz-info">
        <img className={name==='Git' ? 'white-logo' : undefined } src={logo} alt="" />
        <div>
          <h2>{name}</h2>
          <h4>Toatl {total} Quizes</h4>
        </div>
      </div>
      <div className="quizes">
        {
            questions.map ( question => <Question key={question.id} question={question}></Question>)
        }
      </div>
    </div>
  );
};

export default Quiz;
