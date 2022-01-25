// import express, controllers
const express = require('express');
const controllers = require('./controllers.js');

// create express app
const app = express();

// set our port
const PORT = 3000;

// returns a function that will go and get static files from our filesystem and serve them
app.use('/', express.static(__dirname + '/../../frontend/dist'));

// need to use json() middleware so express can parse get/post data
app.use(express.json());

// get, post, delete request routing
app.get('/api/some_endpoint', controllers.getSomeData);

// listen for get/post requests
app.listen(PORT, () => {
  console.log('listening on port', PORT, '...');
});