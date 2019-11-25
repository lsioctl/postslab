require('dotenv').config({ path: '../.env' });
const userService = require('../services/userService');
const db = require('../helper/db');

const user = {
  name: 'toto7',
  email: 'toto7@toto.com',
  password: 'toto'
}

/*db.connect()
  .then( () => {
    userService.create(user)
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
  });*/

db.connect()
  .then(() => {
    userService.login(user)
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
  .catch(e => {
    console.log(e);
    console.log('error in database connection, exiting');
    return;
  });

