import React from "react";
import axios from "axios";
export default class PersonList extends React.Component {
  state = {
    message: "",
    users: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/users`)
      .then(res => res.data)
      .then(data => {
        this.setState({ users: Object.values(data), isLoading: false });
        console.log(this.state.users[8]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>New message</p>
        <p>{this.state.users.map(item => item.id)}</p>
      </div>
    );
  }
}
