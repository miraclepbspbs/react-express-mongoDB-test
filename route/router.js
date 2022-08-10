const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  addTasks,
  delTasks,
  updateTasks,
  singleTasks,
} = require('../controllers/control');

router.route('/').get(getAllTasks).post(addTasks);
router.route('/:id').get(singleTasks).patch(updateTasks).delete(delTasks);

module.exports = router;
