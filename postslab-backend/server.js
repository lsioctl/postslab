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

  // CORS as the frontend will run on other host or port
  // Note: use cors middleware for example for a list
  // here it just to underestand better how cool express is
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    // this one is needed for example for the client to send HTTP Only cookie
    // aka credentials
    res.header("Access-Control-Allow-Credentials", "True");
    next();
  });

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


