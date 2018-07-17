const mongoose = require("mongoose");
const Schema = mongoose.Schema;


  const listItem = new Schema({
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
      default: Date.now
    },
    authorID:[
        {
          type: Schema.Types.ObjectId,
          ref: "user"
        }
      ],
    listID: [
      {
        type: Schema.Types.ObjectId,
        ref: "listItem"
      }
    ]

  });

  const ListItem = mongoose.model("listItem", listItem);

module.exports = ListItem;