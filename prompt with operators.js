const prompt = require('prompt-sync')();  //#this line is used in all prompt input
// var a = prompt("enter your name");
// console.log(a)

// fruit = prompt('what is your favorite fruit?');
// console.log(fruit)

// * / ** + -

food = Number(prompt('how much was the food?'))
tipPercentage = Number(prompt('tip %?')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log('tip amount', tipAmount)
console.log('total', total)

