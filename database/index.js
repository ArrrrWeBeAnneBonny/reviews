const mongoose = require('mongoose');
require('dotenv').config();
//const uri = 'mongodb://mongo:27017/reviewsDB';
//const uri = 'mongodb://localhost/reviewsDB';
//const mode = process.env.NODE_ENV;
let uri = '';

if (process.env.NODE_ENV === "production") {
  uri = 'mongodb://mongo:27017/reviewsDB'
} else {
  uri = 'mongodb://localhost/reviewsDB'
}
console.log('uri', uri, 'prod', process.env.NODE_ENV)

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to reviews DB')
});

const reviewSchema = new mongoose.Schema({
  campId: {
    type: Number,
    sparse: true
  },
  recommendedPer: Number,
  reviews: [{
    reviewId: {
      type: Number,
      sparse: true
    },
    userName: String,
    review: String,
    dateCreated: Date,
    recommended: Boolean,
    imgUrl: String,
    helpfulness: Number,
    ownerResponse: {
      response: String,
      responseDate: Date,
      helpfulness: Number
    }
  }]
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = {db, Review};