import axios from "axios";

export default {
  saveUser: (userData) => {
    return axios.post("/api/user", userData);
  },
  loginUser: (userData) => {
    return axios.post("/api/user/login", userData);
  },
  getUser: () => {
    return axios.get("/api/user");
  },
  getTodos: (listID) => {
    return axios.get("/api/routes/listItems/" + listID);
  },
  // Saves Todos to database
  saveTodos: (TodosData) => {
    return axios.post("/api/routes/listItems", TodosData);
  },
  // Deletes the Todo with the given id
  deleteTodos: (id) => {
    return axios.delete("/api/routes/listItems/" + id);
  },
  // Updates done status
  updateTodos: (id) => {
    return axios.put("/api/routes/listItems/" + id);
  },
  // Gets all Lists
  getLists: (userRecordId) => {
    return axios.get("/api/routes/list/" + userRecordId);
  },
  // Saves List to database
  saveLists: (listData) => {
    return axios.post("/api/routes/list", listData);
  },
  // Deletes the List with the given id
  deleteLists: (id) => {
    return axios.delete("/api/routes/list/" + id);
  }
};