const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {type: String, required: true, maxlength: 100},
  itemList: {type: Array}
})

module.exports = mongoose.model('Category', CategorySchema);