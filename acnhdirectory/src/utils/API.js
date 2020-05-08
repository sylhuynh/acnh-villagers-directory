import axios from "axios";

export default {
    getAllVillagers: () => {
      return axios.get("http://acnhapi.com/villagers");
    },
    getVillagersIcons: (villagerID) => {
      return axios.get(`http://acnhapi.com/icons/villagers/${villagerID}`);
    },
  };
  