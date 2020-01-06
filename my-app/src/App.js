import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/hello";
import "./components/authorization/register";
import PersonList from "./components/hello";
import RegisterForm from "./components/authorization/register";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonList></PersonList>
        <RegisterForm></RegisterForm>
      </header>
    </div>
  );
}

export default App;
