const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const list = new Schema({
  listTitle: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  authorId: {
    type: String,
    required: 'Author ID is required'
  }
},
  {
    collection: 'lists'
  }
);

const List = mongoose.model("List", list);

module.exports = List;