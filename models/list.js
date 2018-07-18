const mongoose = require("mongoose");
const Schema = mongoose.Schema;


  const list = new Schema({
    listTitle: {
      type: String,
      trim: true,
      required: "Title is Required"
    },
    listID: {
      type: Schema.Types.ObjectId
    }

  });

  const List = mongoose.model("List", list);

module.exports = List;