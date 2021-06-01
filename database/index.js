//dev2

const mongoose = require('mongoose');
//const uri = 'mongodb://mongo:27017/reviewsDB';
const uri = 'mongodb://localhost/reviewsDB';
//mongoose.Promise = global.Promise;
//const seed = require('./seedScript.js');

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

// let seedData = async () => {
//   db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('connected to reviews DB')
// });
//   await seed.generateUsers();
// }

// seedData();

module.exports = {db, Review};