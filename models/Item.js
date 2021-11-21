const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {type: String, required: true, maxlength: 100},
  description: {type: String, require: true, maxlength: 300},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: {type: Number, require: true},
  quantity: {type: String, required: true}
})

module.exports = mongoose.model('Item', ItemSchema);