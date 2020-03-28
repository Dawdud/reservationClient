import React, { Component } from "react";
import Notifications from "./Notifications";
class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <p>dashboard</p>
        </div>
        <Notifications />
      </div>
    );
  }
}
export default Dashboard;
