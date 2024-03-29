
## TODO

### Docker

- docker secret to avoid exposing mongodb root password
- usual docker fun with volumes owned by root on dev's dir

### Full Stack

Flow charts.

### Front 

- env and gitignore to avoid expose app secrets
- test FE when not authenticated
- is switch interesting for react-router ?
- ~~where to store the JWT~~ HTTP only cookie
- related to: if in header authorization: bearer JWT. this one
does not depend on CORS (cookies are)
- factor API calls in a service file
- struggle with fetch and chained promises, this is not possible
within react. Errors and Error boundaries to check
throw Error('response code not 201');
- get a better grip on what does really do useEffect Hook, and
the dependencies
- something wrong with styled component: form onSubmit does not work
(as it loses focus ?)
- better UX: if auth is still valid in the session, don't prompt login anyway
backend service available for this: testauth

### BackEnd

- is bluebird still interesting with new nodes and mongoose ?
- ~~env and gitignore to avoid expose app secrets~~
- weird unhandled promise rejection warning on node whend DB unreachable, things to understand here: 
https://github.com/Automattic/mongoose/issues/6997
- testing DB: what are the best practices ?
- when wanted to test the DB, connection pool, sharing questions ...
https://mongoosejs.com/docs/connections.html#multiple_connections
https://www.reddit.com/r/node/comments/43ooak/reuse_mongodb_connection_properly_in_expressjs/
https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
- read 
https://www.johnvincent.io/mongo/mongoose-integration-testing/
- design pattern to factor try catch with polymorphic errors ?

- Put validators in model or service ?
- ~~How to pass variables through Express middlewares~~: seem to be res.locals
- it would be better to add a user id with the JWT ? to avoid sole JWT stealing ?

- Remove expired JWT tokens from user's token list

## Links

For the backend structuring:

https://dev.to/beznet/build-a-rest-api-with-node-express-mongodb-4ho4

For the backend auth and structure (MVC and services):

https://www.codementor.io/mohdraheem06/securing-node-js-restful-apis-with-json-web-tokens-jwt-using-async-await-lji074q5p

https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0#18d5

for the JWT and HTTP Only Cookie:

https://dev.to/perrydbucs/using-jwts-for-authentication-in-restful-applications-55hc

fetch API data from React:

https://codeburst.io/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd

and structuring with services:

https://dev.to/pacheco/my-fullstack-setup-node-js-react-js-and-mongodb-2a4k

For useEffect Hook:

https://overreacted.io/a-complete-guide-to-useeffect/
