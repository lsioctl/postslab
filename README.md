# postslab

A full stack home lab in MEARN with authentication

# Disclaimer

This lab is for learning purpose only, a lot of practices make
it not ready for production.

Only dev environment is available for now.

# Opinions

This is a home lab, and except the time constraints, I can make and live
with my own choices and constraints:

* ES6 + syntax, except for Classes
* No use of ES6 classes, including for React.
* Use async/await whenever it is possible.
* No frameworks.
* Few libraries as possible (that's why I use fetch API and not Axios).

# Launching MongoDB

## Pre-requisites

* docker
* docker-compose

## Start

Go to docker/env folder and, change the user/password in the docker-env.yaml and:

`docker-compose up`

# Launching backend server

## Pre-requisites

* node

## Install dependencies


`cd backend; npm install`

## Configure .env

`cp dotenv-sample .env; vi .env`

## Run

`npm run dev`

It uses nodemon to monitor changes

# Launching front-end

`cd postslab-frontend; npm install; npm start`
