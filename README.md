
## TODO

### Docker

- docker secret to avoid exposing mongodb root password
- usual docker fun with volumes owned by root on dev's dir

### Front 

- env and gitignore to avoid expose app secrets
- test FE when not authenticated
- is switch interesting for react-router ?

### BackEnd

- is bluebird still interesting with new nodes and mongoose ?
- ~~env and gitignore to avoid expose app secrets~~
- weird unhandled promise rejection warning on node whend DB unreachable, things to understand here: 
https://github.com/Automattic/mongoose/issues/6997

## Links

For the backend structuring:

https://dev.to/beznet/build-a-rest-api-with-node-express-mongodb-4ho4

For the backend auth and structure (MVC and services):

https://www.codementor.io/mohdraheem06/securing-node-js-restful-apis-with-json-web-tokens-jwt-using-async-await-lji074q5p

https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0#18d5


