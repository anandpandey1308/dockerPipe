import React from "react";
import "./App.css";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import HomePage from "./Homepage";
import Homepage from './components/Homepage'
import Form from "./DockerForm";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/form-docker" component={Form} />

        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
