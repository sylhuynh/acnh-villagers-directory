import React, { Component } from "react";
import API from "../utils/API";

class AcnhDirectory extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({ users: res.data.results });
    }).catch(err => {
      console.log(err);
    });
  }

  renderUsers() {
    return this.state.users.map(user => {
      return <p>{user.name.first}</p>
    });
  }
  render() {
    return (
      <div>
        <h1>I'm a header!</h1>
        {this.renderUsers()}
      </div>
    );
  }
}

export default AcnhDirectory;