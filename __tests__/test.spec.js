const percentCalc = require('../database/helper.js');
let request = require('supertest');
const app = require('../server/index.js');

let arr = [
  {
    ownerResponse: {
      helpfulness: null,
      response: null,
      responseDate: null
    },
    _id: '6094a2660d364f163514569d',
    helpfulness: 20,
    imgUrl: 'https://cdn.fakercloud.com/avatars/peachananr_128.jpg',
    recommended: false,
    dateCreated: '2021-03-09T12:51:12.421Z',
    review: 'Voluptatem et harum laborum eos ad officiis porro ea velit. Saepe veritatis eum cupiditate veritatis. Dignissimos nesciunt laboriosam sint numquam perspiciatis sed aut. Est voluptates hic quaerat et aliquid et magni iure at. Totam nostrum sequi suscipit rerum temporibus tempora dignissimos est. Adipisci soluta veniam officia.\n' +
      ' \rVoluptatem impedit veniam. Unde mollitia totam. Repudiandae mollitia placeat. Ut eos ut. Placeat voluptatibus quae consequatur voluptates vel quae harum aut. Nostrum qui dolorum qui.\n' +
      ' \rPlaceat sed quisquam reprehenderit aliquam quo reprehenderit. Consectetur sit aut tempore sint odio. Voluptatem illo magni quae quos consectetur corrupti. Minima ut tempora necessitatibus. Rerum officiis quia consequatur recusandae commodi.',
    userName: 'Kayli S.',
    reviewId: 0
  },
  {
    ownerResponse: {
      helpfulness: null,
      response: null,
      responseDate: null
    },
    _id: '6094a2660d364f163514569c',
    helpfulness: 7,
    imgUrl: 'https://cdn.fakercloud.com/avatars/magugzbrand2d_128.jpg',
    recommended: true,
    dateCreated: '2021-01-14T13:19:01.908Z',
    review: 'Dignissimos perspiciatis ullam est minima ut. Fuga quos fugit maiores voluptatum. Qui blanditiis ducimus. Cum nesciunt est voluptatem. Temporibus accusamus accusamus explicabo et tenetur veniam.\n' +
      ' \rIure hic molestias. Non deleniti modi similique. Ad inventore vel optio incidunt nobis odio est qui nisi. Dolor inventore vitae qui. Neque voluptatem voluptatem quae dolore adipisci. Perferendis molestiae repellat sit explicabo esse est sed cupiditate.\n' +
      ' \rVoluptas officiis ut ut possimus. Sit quod et labore delectus. Fuga maiores in dicta in dolore. Eos voluptas illum est explicabo facilis accusamus. Voluptatem soluta molestiae soluta officiis. Omnis sit qui debitis atque et consequatur provident repudiandae.',
    userName: 'Dorothea B.',
    reviewId: 1
  }
];

test('percentCalc should return a number', () => {
  let percent = percentCalc.percentCalc(arr);
  expect(percent).toEqual(0.5)
});

test('should be GET Request',  (done) => {
  const response =  request(app)
    .get('/reviews')
    expect(response.method).toBe('GET');
  done()
});

test('should get a 200 status code',  async (done) => {
  await request(app)
    .get('/reviews?campId=0')
    .expect(200);
  done()
});

test('reviews data should be an array',  async (done) => {
  await request(app)
    .get('/reviews?campId=0')
    .then((data) => {
      let obj = JSON.parse(data.text);
      expect(Array.isArray(obj.reviews)).toBeTruthy();
    });
  done();
});

