require('dotenv').config();
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

const express = require('express');
var cookieParser = require('cookie-parser')
const app = express();
const db = require('./helper/db');


db.connect().then( () => {
  // Middlewares
  // Tell exress to accept JSON as the data format
  app.use(express.json());

  // Cookie parser is used for auth middleware
  app.use(cookieParser());

  // Routes
  const postsRouter = require('./routes/postsRouter');
  app.use('/posts', postsRouter);
  const userRouter = require('./routes/userRouter');
  app.use('/user', userRouter);

  app.listen(PORT, HOST, () => {
    console.log(`server started on ${HOST}:${PORT}`);
  });
}).catch(e => {
  console.log(e);
  // TODO: what if it is a failure in app.listen ?
  console.log('error in database connection, exiting');
  return;
});


