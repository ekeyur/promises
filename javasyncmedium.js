
// Make fucntions for each step in making pasta.
var boilPasta = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Pasta is boiled");
    },5000);
  }));
};
var cutBroccoli = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Broccoli is cut.");
    },3000);
  }));
};
var preHeatOven = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Oven is pre heated.");
    },3000);
  }));
};
var pastaInPan = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Pasta is laid in a pan.");
    },1000);
  }));
};
var layerSauceBroccoliCheese = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Broccoli, sauce and cheese are layered.");
    },1000);
  }));
};
var putPanInOven = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Pan is put in oven.");
    },1000);
  }));
};
var pastaIsReady = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Pasta is ready to be served.");
    },15000);
  }));
};

var pastaMakingSteps = [
  boilPasta,
  preHeatOven,
  cutBroccoli,
  pastaInPan,
  layerSauceBroccoliCheese,
  putPanInOven,
  pastaIsReady
];

var bluebird = require('bluebird');

var initialTime = new Date();
// By using only map, all the events will be started at once, and the promise will be resolved only after all of them are completed.
bluebird.mapSeries(pastaMakingSteps,function(eachStep){
  return eachStep();
})
  .then(function(data){
    var endTime = new Date();
    console.log(data);
    console.log("Time: ", endTime - initialTime);
  })
  .catch(function(err){
    console.log("Pasta is not made due to some mishap.",err);
  });
