import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Homepage/Home";
import Answers from "./Answers/Answers";
import UserData from "./UserData/UserData";
import { ApiContext } from "../state/GlobalContext";
import { fetchUserData } from '../hooks/FetchUser';

/*  Wrapper Component for Routing and React Context API */

const Router: React.FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchUserData(setData);
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ApiContext.Provider value={data}>
      <Switch>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route path="/Answers" component={Answers} />
        <Route path="/UserData">
          <UserData setData = {setData} />
        </Route>
      </Switch>
    </ApiContext.Provider>
  );
};

export default Router;
