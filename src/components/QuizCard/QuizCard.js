import React from "react";
import { Link } from "react-router-dom";
import "./QuizCard.css";

const QuizCard = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="quiz-card">
      <div className="quiz-card-img">
        <img src={logo} alt="" />
      </div>
      <div className="quiz-card-info">
        <div >
          <h3>{name}</h3>
          <h4>Total {total} Quizes</h4>
        </div>
        <div>
          <button className="attempt-btn">
            <Link to={`quiz/${id}`}>Attempt Test</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
