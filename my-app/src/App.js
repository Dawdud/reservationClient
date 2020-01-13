import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/hello";
import "./components/authorization/SignUp";
import PersonList from "./components/hello";
import RegisterForm from "./components/authorization/SignUp";
import SignIn from "./components/authorization/SignIn";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonList></PersonList>
        <RegisterForm></RegisterForm>
        <SignIn></SignIn>
      </header>
    </div>
  );
}

export default App;
