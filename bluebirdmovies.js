const Promise = require('bluebird');
const fs = require('fs');
const http = require('request-promise');
const API_KEY = '1336424bdd2cae85cdd6731e1b99df87';

var Movies = [100,101,102,103,104,105,106,107,108,109,110];

var startTime = new Date();
// Using Promise.map:
Promise.map(Movies, function (movieId) {
    // Promise.map awaits for returned promises as well.
    var url = 'http://api.themoviedb.org/3/movie/'+movieId.toString();
    return http.get({
      url: url,
      qs: {
        api_key: API_KEY
      }
    });
}).then(function(data) {
    var endTime = new Date();
    console.log("Operation Time: ",endTime - startTime);
    // data.forEach(function(e){
    //   console.log(e.toString());
    // });
});



// Comparing different bluebird promises:
//
// 1. .each : If you have an array of calls to be made, .each method will runs every promise one by one. It also returns whatever it was given (not necessarily an array)
// 2. .map : .map method on the other hand will send all the requests in the array at once and then give the results only after all the promises are fulfilled in an array.
//   2.a : .map can also allow concurrency, where if concurrency is defined it will only send out there will only be the limited number of requests at once and only after one of them is resolved, one more request will go out.
// 3. .mapseries : This will send one request at a time in order and return an array.
