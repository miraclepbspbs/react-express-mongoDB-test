const mongoose = require('mongoose');

const TasksShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must have a name'],
    trim: true,
    maxLength: [20, 'name must shorter than 10'],
  },
  age: {
    type: Number,
    default: 21,
  },
});

module.exports = mongoose.model('task', TasksShema);
