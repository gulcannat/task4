import React, { Component } from "react";
import UserLogin from "./UserLogin";

export default class App extends Component {
  render() {
    return (
      <div className="app-div">
        <UserLogin />
      </div>
    );
  }
}