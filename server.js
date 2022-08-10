const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./route/router');
const connectDB = require('./db/connect');
require('dotenv').config();
//middleware

app.use(express.json());
//跨域

// 解决跨域问题
app.use(cors());
//routes
app.get('/hello', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  res.send('我真帅');
});

app.use('/api/v1/tasks', router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log('listening on the 5000....');
    });
  } catch (error) {
    console.log(error);
  }
};
start();
