import React, { Component } from "react";
import API from "../utils/API";
import UserRow from "../components/UserRow";
import Table from "../components/Table";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";


class AtlaDirectory extends Component {
  state = {
    search: "",
    characters: [],
    filteredChars: []
  }

  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({ characters: res.data });
    }).catch(err => {
      console.log(err);
    });
  }

  filterCharacters = () => {
    let filteredChars = this.state.characters.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    this.setState({ filteredChars: filteredChars });
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    this.filterCharacters();

  }

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchBar search={this.state.search} handleInputChange={this.handleInputChange} />
        <Table >
          <UserRow
            charactersArray={
              this.state.filteredChars && this.state.filteredChars.length > 0
                ? this.state.filteredChars
                : this.state.characters
            }
          />
        </Table>
      </div>
    );
  }
}

export default AtlaDirectory;