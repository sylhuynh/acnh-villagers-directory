import React, { Component } from "react";
import API from "../utils/API";
import UserRow from "../components/UserRow";
import Table from "../components/Table";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";


class AtlaDirectory extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({ characters: res.data });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchBar />
        <Table >
          {this.state.characters.map(character => (
            <UserRow
              key={character.id}
              image={character.photoUrl}
              name={character.name}
              weapon={character.weapon}
              profession={character.profession}
              affiliation={character.affiliation}
            />

          ))}
        </Table>
      </div>
    );
  }
}

export default AtlaDirectory;