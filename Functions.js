// Functions
/* this is a function called 'sayMyname'
and it has 0 argument
it logs out your name to the console */

function sayMyname() {
  console.log('Qazi')
}
sayMyname()

/* this is a function called 'sayMyName2'
and it has 0 argument
it logs out your name to the console */

function sayMyName2(name) {
  console.log(name)
}
sayMyName2("Ghufran")


function greeting(name) {
  console.log('hi ' + name + ', Nice to you meet you!')
}
greeting('Ali')


/* Template Literals */
function greet(name) {
  greet = `hi ${name}, Nice to meet You!`
  console.log(greet)
}
greet('Hardik Pandaya')


function sums(a,b) {
  return a+b
}
console.log(sums(1,4))

function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = food * tipPercentage
  const total = food + tipPercentage
  return total
}
console.log(calculateFoodTotal(300, 20))

// ES6
/*Arrow Function*/
/*Arrow function with explicit return*/
const sumArrow = (a, b) => {
  return a + b
}
console.log(sumArrow(50, 2))

/* Arrow function with implicit return*/
/*important: for implicit return remove curly braces*/
const sumarrow = (a, b) => a + b
console.log(sumarrow(50, 2))


function add(a, b) {
  return a + b
}
console.log("Sum the solution", add(2, 5))
function sub(a, b) {
  return a - b
}
console.log("Subtract the solution", sub(12, 3))
function div(a, b) {
  return a / b

}
console.log("Divide the solution", div(8, 4))
function mul(a, b) {
  return a * b
}
console.log("Multiply the solution", mul(9, 1))