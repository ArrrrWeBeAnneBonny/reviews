const mongoose = require('mongoose');
const uri = 'mongodb://localhost/reviewsDB';

mongoose.connect(uri);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to reviews DB')
})

const reviewSchema = new mongoose.Schema({
  versionKey: false,
  campId: {
    unique: true,
    type: Number,
    sparse: true
  },
  reviews: [{
    versionKey: false,
    reviewId: {
      type: Number,
      unique: true,
      sparse: true
    },
    userName: String,
    review: String,
    dateCreated: Date,
    recommended: Boolean,
    imgUrl: String,
    helpfulness: Number,
    ownerReponse: {
      response: String,
      responseDate: Date,
      helpfulness: Number
    }
  }]
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = {db, Review};