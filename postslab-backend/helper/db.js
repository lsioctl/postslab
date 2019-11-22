/**
 * I am not yet comfortable with this module
 * 
 * good point: it centralize the configuration and the methods
 * weird point: it mutates mongoose, which is a singleton by
 * design as node, whenever we require the same name and file
 * as modules are cached the first time they are loaded
 **/

require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

async function connect() {
  // Database connection
  try {
    await mongoose.connect(
      process.env.DATABASE_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true 
      }
    );
  } catch(e) {
      console.error(e);
      throw 'DB connection error';
  }
};

function get() {
  return mongoose;
};

function close() {
  mongoose.disconnect();
};

module.exports = {
  connect,
  get,
  close
};