import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.scss";

import "./components/authorization/SignUp";
import Navbar from "./components/layout/Navbar";
import RegisterForm from "./components/authorization/SignUp";
import SignIn from "./components/authorization/SignIn";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateReservation from "./components/projects/createResrevation";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetails}></Route>
          <Route path="/signup" component={RegisterForm}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/create" component={CreateReservation}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
