const router = require("express").Router();
const todoRoutes = require("./listItemRoutes");
const listRoutes = require("./listRoutes");

router.use("/routes", todoRoutes);
router.use("/routes", listRoutes);

module.exports = router;