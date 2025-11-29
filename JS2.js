// 1
for (let i = 2; i <= 8; i++) {
    console.log(i);
}


// 2
for (let i = 5; i <= 35; i += 4) {
    console.log(i);
}


// 3
let result = 1;
for (let i = 3; i < 8; i++) {
    result *= i;
}
console.log(result);


// 4
let person = {
    firstName: "Tegi",
    lastName: "Mikautadze",
    age: 20
};
console.log(`${person.firstName} ${person.lastName}`);


// 5
for (let key in person) {
    console.log(person[key]);
}


// 6
let fruits = ["Apple", "Banana", "Orange"]; // გაურკვეველია "["Apple", "Banana", "Orange"]" ეს არის მასივის ელემენტი თუ: "Apple", "Banana", "Orange" - ესენი
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 7
fruits.unshift("Grapes");
fruits.push("Pineapples");
console.log(fruits);


// 8
for (let i = 0; i < fruits.length; i += 2) {
    console.log("Index:", i, "Value:", fruits[i]);
}

// ----------------------------------------------------------------------------------------

let i = 7;

while (i <= 28) {
  if (i === 16 || i === 22) {
    i += 3;
    continue;
  }

  console.log(i);
  i += 3;
}


let sum = 0;

for (let i = 1; i <= 34; i++) {
  sum += i;
}

console.log(sum);


