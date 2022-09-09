const express = require('express');
const app = express();
const db = require('../database/index.js');
const path = require('path')
const port = 3000;
const convo = require('/Users/ncassano/Desktop/Hack_Reactor/rpp2205-mvp/backUpData')



app.use(express.static(__dirname + '/../public'));


app.get('/test', (req, res) => {
  var input = req.url.split('?');
  //console.log(input[1])
  db.find({category: input[1]} || {category: {}})
  .then((results) => {
    res.send(results)
  })
})

app.get('/start', (req, res) => {
  db.remove()
  var array = []
  for (var i in convo.data) {
    var resultObj = {};
    resultObj._id = i;
    resultObj.category = convo.data[i].category;
    array.push(resultObj)
  }
  res.send(array);
})

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
})