const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/users")
  .post(userController.create)
  .get(userController.findOne)
  .get(userController.findAll);

module.exports = router;