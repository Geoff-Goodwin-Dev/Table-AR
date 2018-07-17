const router = require("express").Router();
const todoRoutes = require("./articles");

router.use("/Todos", todoRoutes);

module.exports = router;