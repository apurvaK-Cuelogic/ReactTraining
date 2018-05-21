//Arraw function
const multiple = (num) => num * 2;

console.log(multiple(5));

//Spread
const arr = [1,2,3]
const newarr = [...arr,5,6]
console.log(newarr);

//Rest
const filter = (...args) => {
  return args.filter(a => a == 5);
}

console.log(filter(5,3,7,1,5));

//Reference and primitive types
const num = 1;
const newNum = num;
console.log(newNum);

const person = {
  name: 'Max'
}

const secondPerson = person;
person.name = 'Manu';
console.log(secondPerson);

//Refreshing array functiopns

const number = [1, 2, 3]
const doubleNum = number.map((n) => n * 2);

console.log(number); // map wont change the original array instead create a new
console.log(doubleNum);