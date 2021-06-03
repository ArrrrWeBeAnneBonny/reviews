const faker = require('faker');
const db = require('./index.js');
const helper = require('./helper.js');

async function generateUsers() {

  let reviewsData = [{
    campId: 0,
    recommendedPer: 0.75,
  	reviews: [{
      reviewId: 0,
  		userName: `Denise J.`,
      review: `My mates and I were sailing the open seas and heard of this campsite that had hidden gems. Booking was super easy and had great amenities! We tried to find where those darn gems were hidden but all we found were beautiful views. Overall, it was a great stay before heading back to sea. ARRR`,
      recommended: true,
      helpfulness: 5,
      imgUrl: 'https://i.postimg.cc/x8vnvRCp/Denise.jpg',
      dateCreated: new Date(2020, 0, 1),
      ownerResponse: {
        response: `I’m glad you enjoyed your stay. While I apologize that you weren’t able to find any actual gems I hope that you and your mates created memories that you’ll treasure.`,
  	    responseDate: new Date(2020, 1, 1),
  	    helpfulness: 2
      }
    },
      {
        reviewId: 1,
        userName: `Turbo K.`,
        review: `Twisselman Ranch is awesome, Anne really made the stay so welcoming. The land is beautiful, and the pond is so peaceful. Plenty of
        places to hang out with numberous fire pits, horse shoe games, archery areas, and canoe or paddleboating in the pond. I would come back again.`,
        recommended: true,
        helpfulness: 7,
        imgUrl: 'https://i.postimg.cc/MGM53rST/turbo.jpg',
        dateCreated: new Date(2020, 1, 2),
        ownerResponse: {
          response: `Thank you for the great review, pleasure hosting you!`,
          responseDate: new Date(2020, 2, 5),
          helpfulness: 3
        }
      },
      {
        reviewId: 2,
        userName: `Hannah M.`,
        review: `We love the place... We drove all the way from SF Bay Area, it was worth the 4 hour drive. Anne was so helpful and took good care of us. The tents are very comfortable and you can easily kill time enjoying the nature, boating, horse ridding and enjoying the venue. Definitively returning back with more friends soon.`,
        recommended: true,
        helpfulness: 4,
        imgUrl: 'https://i.postimg.cc/J4Dy9wFj/Hannah.jpg',
        dateCreated: new Date(2020, 5, 25),
        ownerResponse: {
          response: `Thank you for the great review, pleasure hosting you!`,
          responseDate: new Date(2020, 6, 3),
          helpfulness: 0
        }
      }, {
        reviewId: 3,
        userName: `Michael G.`,
        review: `I came here for some peace and quiet away from the city. However, I couldn't get a wink of sleep my whole stay here. There were 3 pirate ladies camping next to me and they were making a ruckus and chit chatting all night!! I will not be staying here ever again!!`,
        recommended: false,
        helpfulness: 0,
        imgUrl: 'https://i.postimg.cc/vBX4rbN6/Michael.jpg',
        dateCreated: new Date(2020, 5, 28),
        ownerResponse: {
          response: null,
          responseDate: null,
          helpfulness: null,
        }
      }],
  }];

  let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  let randReviews = Math.floor(Math.random() * 10);

  for (var id = 1; id <= 99; id++) {

    let campReview = {
      campId: id,
      recommendedPer: 0,
      reviews: []
    };

    for (var j = 0; j <= randReviews; j++) {
      if (j === 0 && randReviews === 0) {
        reviewsData.push(campReview);
      }
      let newReview = {
        reviewId: j,
        userName: `${faker.name.firstName()} ${faker.name.lastName().slice(0, 1)}.`,
        review: faker.lorem.paragraphs(),
        dateCreated: faker.date.past(),
        recommended: faker.datatype.boolean(),
        imgUrl: faker.internet.avatar(),
        helpfulness: getRandomInt(25),
        ownerResponse: {
          response: null,
          responseDate: null,
          helpfulness: null
        }
      }

      let ownerResponed = [null, faker.lorem.sentence()]
      let randResponse = ownerResponed[Math.floor(ownerResponed.length * Math.random())];

      if (randResponse !== null) {
        newReview.ownerResponse.response = randResponse;
        newReview.ownerResponse.responseDate = faker.date.between(newReview.dateCreated, faker.date.recent());
        newReview.ownerResponse.helpfulness = getRandomInt(10);
      }
      campReview.reviews.push(newReview);
    }
    campReview.recommendedPer = helper.percentCalc(campReview.reviews);
    reviewsData.push(campReview);
  }

  await db.Review.insertMany(reviewsData, (err) => {
    if (err) {
      console.log('error saving');
    } else {
      console.log('saved to db')
    }
  });
  db.db.close();
}

generateUsers();