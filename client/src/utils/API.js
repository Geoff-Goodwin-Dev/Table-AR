import axios from "axios";


export default {
  // Gets all Todos
  getTodos: () => {
    return axios.get("/api/Todos");
  },
  // Saves Todos to database
  saveTodos: (TodosData) => {
    return axios.post("/api/Todos", TodosData);
  },
  // Deletes the book with the given id
  deleteTodos: (id) => {
    return axios.delete("/api/Todos/" + id);
  }
};