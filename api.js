const axios = require('axios');
const keys = require('./config/keys');

const instance = axios.create({
  timeout: 10000,
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
    "x-rapidapi-key": keys.mashvisor_api_key
  }
});

module.exports = {
  util: {
    getNeighborhoodOverview: async (neighborhoodId, state) => {
      const result = await instance({
        "method":"GET",
        "url":`https://mashvisor-api.p.rapidapi.com/neighborhood/${neighborhoodId}/bar`,
        "params":{
            state: state,
            source: 'airbnb'
        }
      })
      // console.log(result.data);
      return result.data
    }
  },
  airbnb: {
    getNeighborhoodOverview: async (neighborhoodId, state) => {
      const result = await instance({
        "method":"GET",
        "url":`https://mashvisor-api.p.rapidapi.com/neighborhood/${neighborhoodId}/bar`,
        "params":{
            state: state,
            source: 'airbnb'
        }
      })
      // console.log(result.data);
      return result.data
    }
  },
  traditional: {
    // need to add
  }
}

// const data = instance({
//   "method":"GET",
//   "url":`https://mashvisor-api.p.rapidapi.com/neighborhood/${268201}/bar`,
//   "params":{
//       state: "CA"
//   }
// }).then(x => {
//   console.log(x);
// })
