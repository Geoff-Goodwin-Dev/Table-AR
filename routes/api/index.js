const router = require("express").Router();
const todoRoutes = require("./listItemRoutes");
const listRoutes = require("./listRoutes");
const user = require("./user");

router.use("/routes", todoRoutes);
router.use("/routes", listRoutes);
router.use("/user", user);

module.exports = router;