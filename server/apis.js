const axios = require('axios');

let getOverview = async (id) => {
  let url = 'http://localhost:3003/overview';
  let config = {
    url: url,
    method: 'GET',
    params: {
      campId: id
    }
  };

  return await axios.get(url, config)
    .then((data) => {
      console.log('got data from overview service');
      return data.data;
    });
}

let getPhotogallery = (id) => {
  let url = 'http://localhost:3004/photogallery';
  let config = {
    url: url,
    method: 'GET',
    params: {
      campId: id
    }
  };

  return axios.get(url, config)
    .then((photos) => {
      console.log('photos', photos.data);
      return photos.data;
    })
}

console.log('testttt', Promise.resolve(getOverview(campId = 1)));
console.log(getPhotogallery(1));

module.exports = {getOverview, getPhotogallery};