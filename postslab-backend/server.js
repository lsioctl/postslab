require('dotenv').config();

const express = require('express');
const app = express();
const db = require('./helper/db');

db.connect().then( () => {
  // Middlewares
  // Tell exress to accept JSON as the data format
  app.use(express.json());

  // Routes
  const postsRouter = require('./routes/posts');
  app.use('/posts', postsRouter);
  const userRouter = require('./routes/user');
  app.use('/user', userRouter);

  app.listen(5000, () => console.log('server started'));
}).catch( (e) => {
  console.log('error in database connection, exiting');
  return;
});


