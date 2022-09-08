const express = require('express');
const app = express();
const db = require('../database/index.js');
const path = require('path')
const port = 3000;

//app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/../public'));


app.get('/test', (req, res) => {
  db.find()
  .then((results) => {
    res.send(results)
  })
})

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
})