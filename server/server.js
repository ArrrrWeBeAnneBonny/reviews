const express = require('express');
const db = require('../database/index.js');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/public'))

app.get('/reviews', (req, res) => {
  console.log('inside get reviews');
  db.Review.find({campId: 0})
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

app.listen(port, (err) => {
  if (err) {
    console.log('error connecting to serve');
  } else {
    console.log(`listening on ${port}`);
  }
})