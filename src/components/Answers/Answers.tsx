import React from "react";
import { Link } from "react-router-dom";
import { reactAnswers, graphQLAnswers } from "./QA";

const Answers: React.FC = () => {
  return (
    <div className="Answers">
      <h1>Answers from the React Questionnaire</h1>

      <div className="React--QA">
        <h3>React</h3>
        <p>What are props in React?</p>
        {reactAnswers.answer_1}
        <p>What is state in React?</p>
        {reactAnswers.answer_2};
        <p>What is the difference between state and props?</p>
        {reactAnswers.answer_3};
      </div>

      <div className="GraphQL--QA">
        <h3>GraphQL</h3>
        <p> How does GraphQL utilize the data-loading process? </p>
        {graphQLAnswers.answer_1}
        <p> Is GraphQL a Database Technology? </p>
        {graphQLAnswers.answer_2}
        <p> Is GraphQL only suitable for React/Javascript Developers? </p>
        {graphQLAnswers.answer_3}
      </div>

      <div className="Answers--container2">
        <Link to="/UserData">
          {" "}
          <button> User Data Table </button>{" "}
        </Link>

        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Answers;
