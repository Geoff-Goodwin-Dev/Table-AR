const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .post(userController.create)
  .post(userController.findOne)
  .get(userController.findAll);

module.exports = router;