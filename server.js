'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// const Treeize   = require('treeize');
// const restaurants    = new Treeize();

const DATABASE = {
  client: 'pg',
  connection: 'postgresql://dev:dev@localhost/dev-restaurants-app',
  // connection: 'postgresql://ubuntu:123@localhost/dev-restaurants-app',
  // debug: true
};

const PORT = process.env.PORT || 8080;

const knex = require('knex')(DATABASE);

const app = express();
app.use(bodyParser.json());

// Get all restaurants//
// app.get('/restaurants', (req, res) => {

//   knex.select()
//     .from('restaurants')
//     .limit(10)
//     .then(results => res.json(results));
// });

app.get('/grades', (req, res) => {

  knex.select()
    .from('grades')
    .limit(10)
    .then(results => res.json(results));
});



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
// app.post('/restaurants', (req, res) => {
//   knex
//     .insert([
//       {
//         name: req.body[0].name,
//         borough: req.body[0].borough,
//         cuisine: req.body[0].cuisine,
//         address_building_number: req.body[0].address_building_number,
//         address_street: req.body[0].address_street,
//         address_zipcode: req.body[0].address_zipcode
//       },
//       {
//         name: req.body[1].name,
//         borough: req.body[1].borough,
//         cuisine: req.body[1].cuisine,
//         address_building_number: req.body[1].address_building_number,
//         address_street: req.body[1].address_street,
//         address_zipcode: req.body[1].address_zipcode
//       },
//       {
//         name: req.body[2].name,
//         borough: req.body[2].borough,
//         cuisine: req.body[2].cuisine,
//         address_building_number: req.body[2].address_building_number,
//         address_street: req.body[2].address_street,
//         address_zipcode: req.body[2].address_zipcode
//       }
//     ])
//     .into('restaurants')
//     .returning(['id', 'name'])
//     .then((results) => res.json(results));
// });

// Update a record//
// app.put('/restaurants', (req, res) => {
//   knex('restaurants')
//     .where('nyc_restaurant_id', '=', req.body.nyc_restaurant_id)
//     .update('name', req.body.name)
//     .returning(['nyc_restaurant_id', 'name', 'borough'])
//     .then((results) => res.json(results));
// });

//Delete by id//
// app.delete('/grades', (req, res) => {
//   knex('grades')
//     .where('id', req.body.id)
//     .del()
//     .then((results) => console.log("Success"));
// });

//A blocked delete//
// app.delete('/restaurants', (req, res) => {
//   knex('restaurants')
//     .where('id', req.body.id)
//     .del()
//     .then((results) => console.log("Success"));
// });


//Inner Join//
// app.get('/restaurants/:id', (req, res) => {

//   knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id', 'grade', 'date as inspectionDate', 'score')
//     .from('restaurants')
//     .where('restaurants.id', req.params.id)
//     .innerJoin('grades', 'grades.restaurant_id', 'restaurants.id')
//     .orderBy('date', 'desc')
//     .limit(1)
//     .then(results => res.json(results));
// });

//Concat //
// app.get('/restaurants', (req, res) => {
//   knex.select('id', 'name', 'cuisine', 'borough')
//     .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
//     .from('restaurants')
//     .limit(10)
//     .then(results => res.json(results));
// });


//Hydrate Get//
// app.get('/restaurants', (req, res) => {
//   knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id as gradeId', 'grade', 'score')
//     .from('restaurants')
//     .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
//     .orderBy('date', 'desc')
//     .limit(10)
//     .then(results => res.json(hydrate(results)));
// });


//Manual Hydrate//
// function hydrate(arr) {
//   const myObj = {};
//   arr.forEach(el => {
//     if(!myObj[el.id]) {
//       myObj[el.id] = {
//         name: el.name, 
//         cuisine: el.cuisine, 
//         borough: el.borough, 
//         grades: []
//       };
//     }
//     myObj[el.id].grades.push({gradeId: el.gradeId, grade: el.grade, score: el.score});
//   });
//   return myObj;
// }

app.post('/restaurants', (req, res) => {
  knex.insert({
    name: req.body.name,
    cuisine: req.body.cuisine,
    borough: req.body.borough
  })
    .into('restaurants')
    .insert(
    [
      {
        'grade': 'C',
        'score': 42,
        "date": "2014-09-06T00:00:00.000Z"
      },
      {
        'grade': 'B',
        'score': 72,
        "date": "2014-09-06T00:00:00.000Z"
      },
      {
        'grade': 'D',
        'score': 35,
        "date": "2014-09-06T00:00:00.000Z"
      },
      {
        'grade': 'A',
        'score': 95,
        "date": "2014-09-06T00:00:00.000Z"
      }
    ])
    .into('grades')
    .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
    .then(results => console.log('Success'));

  knex.select('name')
    .from('restaurants')
    .where('name', 'Terra Byte Cafe')
    .then(results => res.json(results));
});



app.listen(PORT);


