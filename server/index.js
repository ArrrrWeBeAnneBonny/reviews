const express = require('express');
const db = require('../database/index.js');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../client/public'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/reviews', (req, res) => {
  console.log('inside get reviews', req.query);
  let campSite = req.query.campId;
  db.Review.find({campId: campSite})
    .then((data) => {
      let result = {};
      let list = [];

      let doc = data[0]._doc;
      //console.log('doc', Object.keys(data[0]))
      //console.log('data', doc.reviews);
      if (doc.reviews.length === 0) {
        result.reviews = list;
        res.status(200).send(result);
      } else {
        result.recommendedPer = doc.recommendedPer;

        doc.reviews.forEach((item) => {
          list.push(item._doc);
        });

        result.reviews = list;
        //console.log('send', send)
        res.status(200).send(result);

      }

    })
});

module.exports = app;