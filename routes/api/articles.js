
const router = require("express").Router();
const todosController = require("../../controllers/todosController");

router
  .get("/", todosController.findAll)
  .post(todosController.create);

router
  .route("/:id")
  .delete(todosController.remove);

module.exports = router;