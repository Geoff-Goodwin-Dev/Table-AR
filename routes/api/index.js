const router = require("express").Router();
const todoRoutes = require("./listItemRoutes");
const listRoutes = require("./listRoutes");
const userRoutes = require("./user");

router.use("/routes", todoRoutes);
router.use("/routes", listRoutes);
router.use("/", userRoutes);

module.exports = router;