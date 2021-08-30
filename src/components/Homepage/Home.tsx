import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  

  return (
   
      <div className="Home">
        Hello! Welcome Let's proceed to the interview answers and the user data
        table!
      
        <Link to="/Answers">
          <button> Answers </button>
        </Link>
        <Link to="/UserData">
          {" "}
        <button > User Data </button>{" "}
        </Link>
    </div>
    
  );
};

export default Home;
