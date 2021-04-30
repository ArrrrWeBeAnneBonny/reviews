const express = require('express');
const db = require('../database/index.js');
const app = express();
const port = 3000;

app.get('/reviews', (req, res) => {
  console.log('inside get reviews');
});

app.listen(port, (err) => {
  if (err) {
    console.log('error connecting to serve');
  } else {
    console.log(`listening on ${port}`);
  }
})