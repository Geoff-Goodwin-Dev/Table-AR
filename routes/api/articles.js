const router = require("express").Router();
const todosController = require("../../controllers/todosController");

router
  .route("/")
  .post(todosController.create);

router
  .route("/:id")
  .get(todosController.findAll)
  .delete(todosController.remove);

module.exports = router;