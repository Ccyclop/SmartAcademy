// 1
function biggerNumber(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}

console.log(biggerNumber(10, 5));
console.log(biggerNumber(7, 7));


// 2
function sumTwoNumbers(a, b) {
    return a + b;
}

console.log(sumTwoNumbers(4, 9));


// 3
function printMyName() {
    console.log("Tengiz Mikautadze");
}

printMyName();


// 4
function fullName(firstname, lastname) {
    return firstname + " " + lastname;
}

let result = fullName("Tengiz", "Mikautadze");
console.log(result);


// 5
function multiplyUpTo(n) {
    let product = 1;

    for (let i = 1; i <= n; i++) {
        product *= i;
    }

    return product;
}

console.log(multiplyUpTo(5));


// 6

let student = {
    firstName: "John",
    lastName: "Smith",
    age: 21,
    scores: [4, 7, 5, 3, 2],

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};


console.log(student.fullName());


// 7
function sumScores(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum;
}

console.log(sumScores(student.scores));


// 8
console.log(student.firstName, student.age); // პირობა იყო არარელევანტური ამ დავალებისთვის თუმცა პირობა ასე სრულდება
