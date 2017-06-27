function countdown(callback) {
  window.setTimeout(function() {
    callback()
  }, 2000);
}

function createMultiplier(multiplierValue) {
  return function(number) {
    return number * multiplierValue;
  }
}

let doubler = createMultiplier(2);
let tripler = createMultiplier(3);

function multiplier(number, multiplierValue) {
  return number * multiplierValue;
}


let doublerWithBind = multiplier.bind(null, 2)
let triplerWithBind = multiplier.bind(null, 3)
