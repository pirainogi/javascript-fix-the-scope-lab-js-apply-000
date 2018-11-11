var animal = 'dog'
var yourAnimal = 'cat'

function myAnimal() {
  return animal
}

function yourAnimal() {
<<<<<<< HEAD
  var yourAnimal = 'cat'
=======
>>>>>>> b895c44de87079e601deaaa09e0ed75beb3eb5ba
  return yourAnimal
}

function add2(n) {
  const two = 2
  return n + two
  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
theFunk = theFunk()
