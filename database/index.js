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

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = db;