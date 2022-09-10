const express = require('express');
const app = express();
const db = require('../database/index.js');
const path = require('path')
const port = 3000;
const convo = require('/Users/ncassano/Desktop/Hack_Reactor/rpp2205-mvp/backUpData')



app.use(express.static(__dirname + '/../public'));


app.get('/results', (req, res) => {
  var input = req.url.split('?');
  //console.log(input[1])
  db.find({category: input[1]} || {category: {}})
  .then((results) => {
    res.send(results)
  })
})

app.get('/start', (req, res) => {
  //MAKE SURE TO ELIMINATE DUPLICATE CATEGORIES THE YOU CAN GET MULTIPLE
  db.remove()
  var final = []
  var firstObj = {};
  for (var i in convo.data) {
    if (firstObj[convo.data[i].category] === undefined) {
      firstObj[convo.data[i].category] = convo.data[i].category
    }
  }
  for (var i in firstObj) {
    var resultObj = {};
    resultObj._id = i;
    resultObj.category = firstObj[i];
    final.push(resultObj)
  }

  res.send(final);
})

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
})