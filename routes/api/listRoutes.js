const router = require("express").Router();
const listController = require("../../controllers/listController");


router
  .route("/list")
  .post(listController.create);

router
  .route("/list/:id")
  .get(listController.findAll)
  .delete(listController.remove);

module.exports = router;