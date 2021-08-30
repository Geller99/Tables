import React from "react";
import { Link } from "react-router-dom";


interface Props {
  triggerApi:  () => Promise<never[]>; 
}

const Home = ({triggerApi}: Props) => {
  return (
   
      <div className="Home">
        Hello! Welcome Let's proceed to the interview answers and the user data
        table!
        
        <Link to="/Answers">
          <button> Answers </button>
        </Link>
        <Link to="/UserData">
          {" "}
        <button onClick = {triggerApi}> User Data </button>{" "}
        </Link>
    </div>
    
  );
};

export default Home;
