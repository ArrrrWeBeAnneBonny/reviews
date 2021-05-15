//dev2

const mongoose = require('mongoose');
const uri = 'mongodb://localhost/reviewsDB';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to reviews DB')
});

const reviewSchema = new mongoose.Schema({
  campId: {
    unique: true,
    type: Number,
    sparse: true
  },
  recommendedPer: Number,
  reviews: [{
    reviewId: {
      type: Number,
      unique: true
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