'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const DATABASE = {
  client: 'pg',
  // connection: 'postgresql://dev:dev@localhost/dev-restaurants-app',
  connection: 'postgresql://ubuntu:123@localhost/dev-restaurants-app',
  // debug: true
};

const PORT = process.env.PORT || 8080; 

const knex = require('knex')(DATABASE);

const app = express();
app.use(bodyParser.json());

//Get all restaurants//
// app.get('/restaurants', (req, res) => {

//   knex.select()
//     .from('restaurants')
//     .then(results => res.json(results));
// });

//Get Italian Restaurants//
// app.get('/restaurants', (req, res) => {

//   knex.select()
//     .from('restaurants')
//     .where('cuisine', 'Italian')
//     .then(results => res.json(results));
// });

//Get 10 Italian restaurants, subset of fields//
// app.get('/restaurants', (req, res) => {

//   knex.select('id', 'name')
//     .from('restaurants')
//     .where('cuisine', 'Italian')
//     .limit(10)
//     .then(results => res.json(results));
// });

//Count of Thai restaurants//
// app.get('/restaurants', (req, res) => {

//   knex.select()
//     .from('restaurants')
//     .where('cuisine', 'Thai')
//     .count()
//     .then(results => res.json(results));
// });

//Count of restaurants//
app.get('/restaurants', (req, res) => {

  knex.select()
    .from('restaurants')
    .count()
    .then(results => res.json(results));
});

app.listen(PORT);


