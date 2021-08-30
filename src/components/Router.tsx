import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Homepage/Home";
import Answers from "./Answers/Answers";
import UserData from "./UserData/UserData";
import axios from "axios";
import { ApiContext } from "../state/GlobalContext";

const Router: React.FC = () => {
  const [data, setData] = useState([]);

  async function getData() {
    await axios("https://randomuser.me/api/?results=20")
      .then((response) => {
        setData(response.data.results);
        console.log(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
        }
      });
    return data
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiContext.Provider value={data}>
      <Switch>
        <Route exact path="/">
          {" "}
          <Home triggerApi={getData}/>{" "}
        </Route>
        <Route path="/Answers" component={Answers} />
        <Route path="/UserData" component={UserData} />
      </Switch>
    </ApiContext.Provider>
  );
};

export default Router;
