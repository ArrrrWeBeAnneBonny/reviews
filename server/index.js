const express = require('express');
const db = require('../database/index.js');
const axios = require('axios');
 const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(__dirname + '/../client/public'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//const origins = ['http://localhost:3000'];

app.get('/reviews?:campId', (req, res) => {
  console.log('inside get reviews', req.query);
  let campSite = req.query.campId;
  db.Review.find({campId: campSite})
    .sort({'recommended': -1})
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
        //console.log('send', result)
        res.status(200).send(result);

      }

    })
    .catch((err) =>{
      console.log('error getting reviews');
      res.send({});
    })
});

module.exports = app;