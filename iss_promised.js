const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = (body) => {
  ip = JSON.parse(body).ip
  return request(`http://ip-api.com/json/${ip}`);
};

const fetchISSFlyOverTimes = (body) => {
  coords = { latitude: JSON.parse(body).lat , longitude: JSON.parse(body).lon}
  console.log(coords);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
}

const nextISSTimesForMyLocation = (body) => {
  fetchMyIP()
  .then((ip) => {
    return fetchCoordsByIP(ip);
  })
  .then((coords) => {
    return fetchISSFlyOverTimes(coords);
  })
  .then((times) => {
    const passTimes =JSON.parse(times).response; 
    for (let dateTime of passTimes) { 
      console.log(`Next pass at ${new Date(dateTime.risetime*1000)} for ${dateTime.duration} seconds`);
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
}

module.exports = { nextISSTimesForMyLocation };


