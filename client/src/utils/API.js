import axios from "axios";

export default {
  // Saves a user to database
  saveUser: (userData) => {
    return axios.post("/api/user", userData);
  },
  loginUser: (userData) => {
    return axios.post("/api/user/login", userData);
  }
};