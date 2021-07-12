import React from "react";
import { Switch, Route } from "react-router-dom";
import { CreateQuiz } from "../components/CreateQuiz";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { Register } from "../components/register";

export const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/inici" component={Login}></Route>
      <Route exact path="/registrarse" component={Register}></Route>
      <Route exact path="/quiz" component={CreateQuiz}></Route>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
};
