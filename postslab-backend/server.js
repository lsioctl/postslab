require('dotenv').config();
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

const express = require('express');
const app = express();
const db = require('./helper/db');


db.connect().then( () => {
  // Middlewares
  // Tell exress to accept JSON as the data format
  app.use(express.json());

  // Routes
  const postsRouter = require('./routes/postsRouter');
  app.use('/posts', postsRouter);
  const userRouter = require('./routes/userRouter');
  app.use('/user', userRouter);

  app.listen(PORT, HOST, () => {
    console.log(`server started on ${HOST}:${PORT}`);
  });
}).catch( (e) => {
  // TODO: what if it is a failure in app.listen ?
  console.log('error in database connection, exiting');
  return;
});


