import React, { Component } from "react";
import API from "../utils/API";
import UserRow from "../components/UserRow";
import Table from "../components/Table";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";


class EmployeeDirectory extends Component {
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

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchBar />
        <Table>
        {this.state.users.map(user => (
          <UserRow 
          key = {user.id}
          image = {user.picture.thumbnail}
          firstName = {user.name.first} 
          lastName = {user.name.last}
          phone = {user.phone}
          email = {user.email}
          dob = {user.dob.date}
          />
          
        ))}
      </Table>
      </div>
    );
  }
}

export default EmployeeDirectory;