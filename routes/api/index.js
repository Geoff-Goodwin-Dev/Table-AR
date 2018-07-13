const router = require("express").Router();
const todoRoutes = require("./articles");

router.use("/articles", todoRoutes);

module.exports = router;