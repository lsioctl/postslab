require('dotenv').config({ path: '../.env' });
const userService = require('../services/user');
const mongoose = require('mongoose');


console.log(process.env.DATABASE_URL);
// Database connection
mongoose.connect(
  process.env.DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

const User = {
  name: 'toto7',
  email: 'toto7@toto.com',
  password: 'toto'
}

userService.createUser(User).then( (resolved) => {
  console.log(resolved);
}).catch( (rejected) => {
  console.log(rejected);
}).finally( () => {
  mongoose.disconnect();
});

