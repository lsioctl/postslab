require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Database connection
mongoose.connect(
  process.env.DATABASE_URL, 
  { useNewUrlParser: true,
    useUnifiedTopology: true 
  }
);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

// Middlewares
// Tell exress to accept JSON as the data format
app.use(express.json());

// Routes
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);
const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.listen(5000, () => console.log('server started'));
