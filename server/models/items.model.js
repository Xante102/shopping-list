const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define schema

const Items = new Schema({
  category: {
    type: String,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const items = mongoose.model("Items", Items);

module.exports = items;
