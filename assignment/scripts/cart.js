console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ){
  basket.push( item );
  return true;
}

console.log(addItem("socks"));
console.log(addItem("truffle candles"));
console.log(addItem("one large rock"));
console.log(basket);

function listItems( basket ){
let myArray = basket.length;

  for (let i=0; i<myArray; i++){
    console.log(basket[i]);
  }
}

console.log(listItems( basket ));
console.log(`Basket is ${basket}`);
