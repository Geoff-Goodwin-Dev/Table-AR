const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listItemSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  orderNumber:{
    type: Number
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  authorId: {
    type: String,
    required: 'Author ID is required'
  },
  listID: {
    type: String,
    required: 'List ID is required'
  }
},
  {
    collection: 'listItems'
  }
);

const  ListItem = mongoose.model("ListItem", listItemSchema);

module.exports = ListItem;