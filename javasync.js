// Make fucntions for each step in making pasta.
var boilPasta = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Pasta is boiled");
    },5);
  }));
};
var cutBroccoli = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Broccoli is cut.");
    },3);
  }));
};
var preHeatOven = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Oven is pre heated.");
    },3);
  }));
};
var pastaInPan = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Pasta is laid in a pan.");
    },1);
  }));
};
var layerSauceBroccoliCheese = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Broccoli, sauce and cheese are layered.");
    },1);
  }));
};
var putPanInOven = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Pan is put in oven.");
    },1);
  }));
};
var pastaIsReady = function(){
  return (new Promise(function(accept,reject){
    setTimeout(function(){
      accept("Pasta is ready to be served.");
    },15);
  }));
};

// Pasta making function that calls each step function in promise style
function makePasta(){
  boilPasta()
    .then(function(data){
      console.log(data);
      return preHeatOven();
    })
    .then(function(data){
      console.log(data);
      return cutBroccoli();
    })
    .then(function(data){
      console.log(data);
      return layerSauceBroccoliCheese();
    })
    .then(function(data){
      console.log(data);
      return putPanInOven();
    })
    .then(function(data){
      console.log(data);
      return pastaIsReady();
    })
    .then(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.log("Pasta making operation is interrupted.");
    });
}
// calling the make pasta function.
makePasta();


//
