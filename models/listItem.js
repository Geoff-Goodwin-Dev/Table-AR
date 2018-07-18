const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listItemSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  orderNumber:{
    type: Number
  },
  createdDate: {
    type: Date,
    default: String.now
  }
  // authorID:[
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "user"
  //     }
  //   ],
  // listID: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "listItem"
  //   }
  // ]

});

const ListItem = mongoose.model("ListItem", listItemSchema);

module.exports = ListItem;