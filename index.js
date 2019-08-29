// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("162.245.144.188", (error , coords) => {
//   if (error) {
//     console.log('Error', error);
//   } else {
//     console.log('It worked! Returned Coords:' ,coords);
//   }
// });