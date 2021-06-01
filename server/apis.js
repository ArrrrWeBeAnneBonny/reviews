const axios = require('axios');

let getOverview = (id) => {
  let url = 'http://localhost:3003/overview/owner';
  let config = {
    url: url,
    method: 'GET',
    params: {
      campId: id
    }
  };

  return axios.get(url, config)
    .then((data) => {
      console.log('data', data.data);
    })
}

//et getPhotogallery

console.log(getOverview(1));