const router = require("express").Router();
const listController = require("../../controllers/listController");


router
  .route("/list")
  .get(listController.findAll)
  .post(listController.create);

router
  .route("/list/:id")
  .delete(listController.remove);

module.exports = router;