import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <h1>
        {" "}
        Welcome! Let's proceed to the interview answers and the user data
        table
      </h1>

      <div className="Home--section2">
        <Link to="/Answers">
          <button> Answers </button>
        </Link>
        <Link to="/UserData">
          {" "}
          <button> User Data </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
