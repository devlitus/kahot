import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../components/login";
import { Register } from "../components/register";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/inici" component={Login}></Route>
      <Route exact path="/registrarse" component={Register}></Route>
    </Switch>
  );
};
