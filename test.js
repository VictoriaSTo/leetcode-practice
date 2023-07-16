// var x = 2
// var y = 4
// if((y > x || y++ === 4) && ++y === 5) {
//   x = 1
// } else {
//   x = 4
// }

// console.log(x, y)

// console.log((function() {
//   console.log("Marco")
//   setTimeout(function(){console.log("Tony")}, 1000)
//   setTimeout(function(){console.log("Stark")}, 0)
//   console.log("Polo")
// })())

// function fiveSecondWait(x) {
//   return new Promise(function(resolve) {
//     setTimeout(function () {
//       resolve(x)
//     }, 5000)
//   })
// }

// async function adder(x) {
//   const a = fiveSecondWait(2)
//   const b = fiveSecondWait(3)
//   return x + (await a) + (await b)
// }

// adder(1).then((value) => {
//   console.log(value)
// })

// function fiveSecondWait(x) {
//   return new Promise(function(resolve) {
//     setTimeout(function () {
//       resolve(x)
//     }, 5000)
//   })
// }

// async function adder(x) {
//   const a = await fiveSecondWait(2)
//   const b = await fiveSecondWait(3)
//   return x + a + b
// }

// adder(1).then((value) => {
//   console.log(value)
// })


// function task() {
//   return new Promise(function(resolve, reject) {
//     reject();
//   })
// }

// task().then(function() {
//   console.log('Success 1')
// }).then(function() {
//   console.log('Success 2')
// }).then(function() {
//   console.log('Success 3')
// }).catch(function() {
//   console.log('Error 1')
// }).then(function() {
//   console.log('Success 4')
// })

// function f(x) {x+=1}
// function g(x) {x.value *= 5}
// var a;
// var b = 1
// var c = {value:2}
// var d = c
// f(a)
// f(b)
// g(d)

// console.log(a, b, c.value, d.value)

// function f(x) {x+=1}
// var b = 1
// f(b)

// console.log(f(b))


var Person = function(firstName, lastName, dateOfBirth, measurements) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
  this.measurements = measurements;
}

person = new Person("Wonder", "woman", new Date(2017, 4, 15), {weight: "58kg"})

personClone = JSON.parse(JSON.stringify(person))

console.log(person.firstName === personClone.firstName)
console.log(person.measurements['weight'] === personClone.measurements['weight'])
console.log(person === personClone)
// console.log(person.dateOfBirth.toDateString() === personClone.dateOfBirth.toDateString())




