/*key: value pairs*/
const person = {
  name: 'Virat Kholi',
  shirt: 'White'
}
/*Dot notation*/
console.log(person.name)
console.log(person.shirt)
/*bracket notation*/
console.log(person['name'])
console.log(person['shirt'])

/*assign object*/
person.phone=('0315-2322976')
console.log(person.phone)
console.log(person)


/*es6 arrow function(2 arguments)
object
template literals*/
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    libilities: 50000,
    networth: function() {
      return this.assets - this.libilities

    }


  }
  const intro =
    `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} any my net worth is $${person.networth()} USD`

  return intro
}
console.log(introducer('Ali', 'Black'))

