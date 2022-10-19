import React, { useState } from "react";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Question = ({ question: data, index }) => {
  const { options, question, correctAnswer } = data;
  const [ans, setAns] = useState(true);

  const selectOption = (selected) => {
    if (selected === correctAnswer) {
      toast.success("Correct Answer !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("hello");
    } else {
      toast.error("Wrong Answer !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // console.log(2);
  };

  return (
    <div className="question">
      <div className="question-head">
        <div className="question-title">
          <div className="question-number">
            <p>{index + 1}.</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        <button className="ans-btn" onClick={() => setAns(!ans)}>
          { ans ? <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>}
        </button>
      </div>
      <div className="options">
        {options.map((option, index) => (
          <button
            className="option"
            key={index}
            onClick={() => selectOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div
        className={
          ans
            ? "correct-ans d-none"
            : "correct-ans animate__animated animate__fadeInUp"
        }
      >
        <p>Answer: {correctAnswer}</p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Question;
