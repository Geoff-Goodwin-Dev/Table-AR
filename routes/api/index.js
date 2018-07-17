const router = require("express").Router();
const todoRoutes = require("./articles");

router.use("/listItems", todoRoutes);


module.exports = router;