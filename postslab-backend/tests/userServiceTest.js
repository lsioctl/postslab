require('dotenv').config({ path: '../.env' });
const userService = require('../services/userService');
const db = require('../helper/db');

const User = {
  name: 'toto8',
  email: 'toto8@toto.com',
  password: 'toto'
}

db.connect()
  .then( () => {
    userService.createUser(User)
      .then( (resolved) => {
        console.log(resolved);
      })
      .catch( (rejected) => {
        console.log(rejected);
      })
      .finally( () => {
        db.close();
      })
  })
  .catch( (e) => {
    console.log('error in database connection, exiting');
    return;
  });

db.connect()
  .then( () => {
    userService.loginUser(User)
      .then( (resolved) => {
        console.log(resolved);
      })
      .catch( (rejected) => {
        console.log(rejected);
      })
      .finally( () => {
        db.close();
      })
  })
  .catch( (e) => {
    console.log('error in database connection, exiting');
    return;
  });

