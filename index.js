// index.js
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (let dateTime of passTimes) { 
    console.log(`Next pass at ${new Date(dateTime.risetime*1000)} for ${dateTime.duration} seconds`);
  }
});