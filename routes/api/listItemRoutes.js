const router = require("express").Router();
const todosController = require("../../controllers/todosController");


router
  .route("/listItems")
  .post(todosController.create);

router
  .route("/listItems/:id")
  .get(todosController.findAll)
  .put(todosController.findOne)
  .delete(todosController.remove);

module.exports = router;