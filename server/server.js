const express = require('express');
const db = require('../database/index.js');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/public'))

app.get('/reviews', (req, res) => {
  console.log('inside get reviews');
  db.Review.find({campId: 0})
    .then((data) => {
      let result = [];
      //console.log('data', data[0]._doc)
      for (var i = 0; i < data.length; i++) {
        let currDoc = data[i];
        console.log('curr', currDoc._doc.reviews[0]._doc);
        console.log('data', data)
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