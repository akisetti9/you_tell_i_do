import { useState } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import Header from "../Header";
import Problem from "../Problem";
import Solution from "../Solution";

import "./index.css";

const assignmentQuestions = JSON.parse(
  localStorage.getItem("assignmentQuestions")
);

console.log(assignmentQuestions);

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");

  const [questions, setAnswers] = useState(assignmentQuestions);

  const saveAnswer = (number, answerInput) => {
    let allQuestions = questions;
    allQuestions[number - 1].answer = answerInput;
    setAnswers(allQuestions);
  };

  const onSubmitTest = (event) => {
    event.preventDefault();
    const stringifiedQuestions = JSON.stringify(questions);
    localStorage.setItem("assignmentQuestions", stringifiedQuestions);
  };

  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <form className="home-content">
          <h1>Assignment</h1>
          {jwtToken === "student"
            ? questions.map((each) => Problem(each, saveAnswer))
            : questions.map((each) => Solution(each))}
          {jwtToken === "student" && (
            <button
              type="submit"
              onClick={onSubmitTest}
              className="submit-assignment"
            >
              Submit Assignment
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Home;
