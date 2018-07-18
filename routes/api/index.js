const router = require("express").Router();
const todoRoutes = require("./listItemRoutes");

router.use("/routes", todoRoutes);


module.exports = router;