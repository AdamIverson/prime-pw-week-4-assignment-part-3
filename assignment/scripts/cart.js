console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
let testBasket = [4, 0, 6];
const maxItems = 5;

function addItem(item){
  //if (isFull() = false){
  basket.push(item);
  return true;
//} return false;
}

console.log(addItem("socks"));
console.log(addItem("truffle candles"));
console.log(addItem("one large rock"));
// console.log(basket);
//
// console.log(addItem("baroque on vynil"));
//
// console.log(basket);

function listItems(basket){

//   basket.forEach(element => console.log(element));
// }
let goodBasket= basket.length;

  for (let i=0; i<goodBasket; i++){
    console.log(basket[i]);
    //return basket[i];
    //console.log(basket[i]);
}
}

// console.log(listItems(testBasket));
// console.log(listItems(basket));
listItems(basket);

console.log(`Basket is now ${basket}`);
basket.pop();
console.log(`Basket is ${basket}`);

function emptyBasket(){
  let emptyB = basket.length;

    for (let i=0; i<emptyB; i++){
      basket.pop();
  }
}

emptyBasket();
console.log(`Basket is ${basket}`);
addItem("dustbuster");
console.log(`basket is ${basket}`);
addItem("cat");
addItem('dog');
//console.log(maxItems);
listItems(basket);
emptyBasket(basket);
console.log(`Basket is ${basket}`);

function isFull(arr){
  let hunch = arr.length;

  if (hunch >= 5){
    return true;
  } return false;
}

addItem("tiger");
addItem("lion");
addItem("bear");
addItem('jon bon jovi');
addItem('heat');

console.log(isFull(basket));
console.log(basket);

console.log(isFull(testBasket));
