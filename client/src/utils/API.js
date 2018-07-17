import axios from "axios";


export default {
  // Gets all Todos
  getTodos: () => {
    return axios.get("/api/listItems");
  },
  // Saves Todos to database
  saveTodos: (TodosData) => {
    return axios.post("/api/listItems", TodosData);
  },
  // Deletes the book with the given id
  deleteTodos: (id) => {
    return axios.delete("/api/listItems/" + id);
  }
};