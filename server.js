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
// app.post('/restaurants', (req, res) => {
//   knex
//     .insert(
//     {
//       name: req.body.name,
//       borough: req.body.borough,
//       cuisine: req.body.cuisine,
//       address_building_number: req.body.address_building_number,
//       address_street: req.body.address_street,
//       address_zipcode: req.body.address_zipcode
//     }
//     )
//     .into('restaurants')
//     .returning(['id', 'name'])
//     .then((results) => res.json(results));
// });

//Create a restaurant and return id and name//
// app.post('/restaurants', (req, res) => {
//   knex
//     .insert(
//     {
//       name: req.body.name,
//       borough: req.body.borough,
//       cuisine: req.body.cuisine,
//       address_building_number: req.body.address_building_number,
//       address_street: req.body.address_street,
//       address_zipcode: req.body.address_zipcode
//     }
//     )
//     .into('restaurants')
//     .returning(['id', 'name'])
//     .then((results) => res.json(results));
// });

// Create three restaurants and return id and name//
app.post('/restaurants', (req, res) => {
  knex
    .insert([
      {
        name: req.body[0].name,
        borough: req.body[0].borough,
        cuisine: req.body[0].cuisine,
        address_building_number: req.body[0].address_building_number,
        address_street: req.body[0].address_street,
        address_zipcode: req.body[0].address_zipcode
      },
      {
        name: req.body[1].name,
        borough: req.body[1].borough,
        cuisine: req.body[1].cuisine,
        address_building_number: req.body[1].address_building_number,
        address_street: req.body[1].address_street,
        address_zipcode: req.body[1].address_zipcode
      },
      {
        name: req.body[2].name,
        borough: req.body[2].borough,
        cuisine: req.body[2].cuisine,
        address_building_number: req.body[2].address_building_number,
        address_street: req.body[2].address_street,
        address_zipcode: req.body[2].address_zipcode
      }
    ])
    .into('restaurants')
    .returning(['id', 'name'])
    .then((results) => res.json(results));
});

//Update a record//
// app.put('/restaurants', (req, res) => {
//   knex('restaurants')
//     .where('nyc_restaurant_id', '=', '3019184')
//     .update('name', 'Jamie and Kyle Pub and Restaurant')
//     .returning(['nyc_restaurant_id', 'name'])
//     .then((results) => res.json(results));
// });


//Delete by id//

//A blocked delete//



app.listen(PORT);


