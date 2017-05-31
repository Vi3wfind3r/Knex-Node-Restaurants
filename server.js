'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { DATABASE, PORT } = require('./config');

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
// app.get('/restaurants', (req, res) => {

//   knex.select()
//     .from('restaurants')
//     .count()
//     .then(results => res.json(results));
// });

//Count of Thai restaurants in zip code//
// app.get('/restaurants', (req, res) => {
//   knex.select()
//     .from('restaurants')
//     .where({'address_zipcode': '11372', 'cuisine': 'Thai'})
//     .count()
//     .then(results => res.json(results));
// });

//Italian restaurants in one of several zip codes//
// app.get('/restaurants', (req, res) => {
//   knex.select()
//     .from('restaurants')
//     .whereIn('address_zipcode', ['10012', '10013','10014'])
//     .limit(5)
//     .orderBy('name', 'asc')
//     .then(results => res.json(results));
// });

//Create a restaurant//
app.post('/restaurants', (req, res) => {
  knex
    .insert(
    {
      name: req.body.name,
      borough: req.body.borough,
      cuisine: req.body.cuisine,
      address_building_number: req.body.address_building_number,
      address_street: req.body.address_street,
      address_zipcode: req.body.address_zipcode
    }
    )
    .into('restaurants')
    .returning(['id', 'name'])
    .then((results) => res.json(results));
});

//Create a restaurant and return id and name//


//Create three restaurants and return id and name//

//Update a record//
// app.put('/restaurants', (req, res) => {
//   knex('restaurants')
//     .update()


//     //for nyc_restaurant_id is '30191841'. Change the name from 'Dj Reynolds Pub And Restaurant' to 'DJ Reynolds Pub and Restaurant'.
// });

//Delete by id//

//A blocked delete//



app.listen(PORT);


