import React from "react";
import { Link } from "react-router-dom";

const Answers = () => {
  return (
    <div className="Answers">
      <h1>Answers from the React Questionnaire</h1>
      <Link to="/UserData">
        {" "}
        <button> Proceed to User Data... </button>{" "}
      </Link>

      <Link to='/'><button>Return Home</button></Link>
    </div>
  );
};

export default Answers;
