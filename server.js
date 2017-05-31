'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { DATABASE, PORT } = require('./config');

const knex = require('knex')(DATABASE);

const app = express();
app.use(bodyParser.json());

//Get all restaurants//
app.get('/restaurants', (req, res) => {

  knex.select()
    .from('restaurants')
    .then(results => res.json(results));
});

//Get Italian Restaurants//


app.listen(PORT);


