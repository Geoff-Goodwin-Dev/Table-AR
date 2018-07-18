import axios from "axios";

export default {
  // Gets all Todos
  getTodos: (listID) => {
    return axios.get("/api/listItems/" + listID);
  },
  // Saves Todos to database
  saveTodos: (TodosData) => {
    return axios.post("/api/routes/listItems", TodosData);
  },
  // Deletes the Todo with the given id
  deleteTodos: (id) => {
    return axios.delete("/api/routes/listItems/" + id);
  },
  // Gets all Lists
  getLists: () => {
    return axios.get("/api/routes/list");
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