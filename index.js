// function greet(name, callback)
// {
//   console.log(' the name of the student is : ' + name);
//   callback(bye);
// }

// function bye()
// {
//     console.log('we are inside the bye function');
// }

// function hello(callback){
//     console.log(' i am inside the hello function')
//     callback();
// }

// greet('Naman', hello);

// let cities = ["Pune", "Bangalore", "Hyderabad"];

// cities.push("Itanagar");
// cities.push("Kochi");

// console.log(cities.length);
// console.log(cities);

// cities.unshift("Delhi");
// console.log(cities);

// cities.splice(1, 0, "Chennai");
// console.log(cities);

// cities.push("Kolkata");
// console.log(cities);

// cities.pop();
// cities.pop();

// console.log(cities.length);
// console.log(cities);

const arr1 = ["Hello", "World"];
const arr2 = [1, 3, 9, 5, 4, 9, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = ["a", "j", "t", "r", "f"];
const arr5 = [...arr3, ...arr4];
console.log(arr5);