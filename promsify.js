var bluebird = require('bluebird');
var fs = require('fs');

// fs.readFile('f1.txt', function(err, data){
//   console.log(data.toString());
// });
var fs = bluebird.promisifyAll(fs);

fs.readFileAsync('f1.txt')
  .then(function(data) {
    console.log('data', data.toString());
  });
