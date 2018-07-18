const router = require("express").Router();
const todosController = require("../../controllers/todosController");


router
  .route("/listItems")
  .get(todosController.findAll)
  .post(todosController.create);

router
  .route("/listItems/:id")
  .delete(todosController.remove);

module.exports = router;