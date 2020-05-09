import axios from "axios";

export default {
    getUsers: () => {
      return axios.get("https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=50");
    },
  };
  