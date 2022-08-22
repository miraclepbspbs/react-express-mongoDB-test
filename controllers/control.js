const Models = require('../models/models');
const getAllTasks = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.send('all tasks');
  try {
    const tasks = await Models.find({});
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ msg: error });
  }
};
const addTasks = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  try {
    const models = await Models.create(req.body);
    res.status(201).json({ models });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const delTasks = async (req, res) => {
  // console.log(req.params);
  try {
    const { id: taskID } = req.params;
    const task = await Models.findOneAndDelete({ _id: taskID });
    // console.log(task);
    if (!task) {
      return res.status(404).json({ msg: `no task with ${taskID}` });
    }
    // res.status(200).json({ task });
    res.status(200).json({ task: null, status: 'success' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTasks = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.send('update');
  try {
    const { id: taskID } = req.params;
    console.log({ id: taskID });
    // res.status(200).json({ id: taskID, data: req.body });
    const task = await Models.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(task);
    if (!task) {
      return res.status(404).json({ msg: `no task with ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const singleTasks = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({ id: req.params.id });
};
module.exports = {
  getAllTasks,
  addTasks,
  delTasks,
  updateTasks,
  singleTasks,
};
