const faker = require('faker');


function generateUsers() {
  let reviewsData = [];

  let fname = faker.name.firstName();
  let lname = faker.name.lastName().slice(0, 1);

  let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  let randReviews = Math.floor(Math.random() * 10);

  let ownerReponse = [null, faker.lorem.sentence()]
  let randResponse = ownerReponse[Math.floor(ownerReponse.length * Math.random())];

  for (var id = 0; id <= 10; id++) {

    let campReview = {
      campId: id,
      reviews: []
    };

    for (var j = 0; j <= randReviews; j++) {
      if (j === 0 && randReviews === 0) {
        reviewsData.push(campReview);
      }
      let newReview = {
        reviewId: j,
        userName: `${fname} ${lname}.`,
        email: faker.internet.email(),
        review: faker.lorem.paragraph(),
        dateCreated: faker.date.past(),
        recommended: faker.datatype.boolean(),
        imgUrl: faker.internet.avatar(),
        helpfulness: getRandomInt(25),
        ownerReponse: {
          response: null,
          responseDate: null
        }
      }
      if (randResponse !== null) {
        newReview.ownerReponse.response = randResponse;
        newReview.ownerReponse.responseDate = faker.date.between(newReview.dateCreated, faker.date.recent());
      }
      campReview.reviews.push(newReview);
    }
    reviewsData.push(campReview);
  }
  console.log('REVIEWS DATA', reviewsData)
  console.log("LOOKNG AT OBJECT", reviewsData[0])
}


// let ownerReponse = ['', faker.lorem.sentence()]
// let randResponse = ownerReponse[Math.floor(ownerReponse.length * Math.random())];
console.log('rand TESTTT', generateUsers());
