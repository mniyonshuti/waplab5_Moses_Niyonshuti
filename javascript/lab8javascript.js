//Function to test the results
function myFunctionTest(expected, function2test) {
  let result = function2test();

  if (Array.isArray(expected)) {
    expected = expected.toString();
  }
  if (Array.isArray(result)) {
    result = result.toString();
  }
  if (expected === result) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + function2test();
  }
}


//Question One answer
String.prototype.filter = function (word) {
  let wordsArray = this.split(" ");
  return wordsArray.filter(s => s !== word).reduce((str, elem) => str + elem + " ", "");
}

//Question One Test case
console.log("Expected output of filter() is  'This house is nice!'  " + myFunctionTest("This house is nice! ", function () {
  return "This house is not nice!".filter("not");
}));

//Question Two answer
Array.prototype.bubbleSort = function () {
  let array = this;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}


//Question  Two test case
var expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Expected output of bubbleSort() is [1,2,3,4,5,6,7,8,9]  " + myFunctionTest(expectedArray, function () {
  let nums = [4, 1, 7, 2, 8, 3, 9, 5, 6];
  return nums.bubbleSort();
}));


//Question Three part A answer Using a constructor
function Person(name) {
  this.name = name;
}
let teacher1 = new Person("Niyonshuti");
teacher1.teach = function (word) {
  this.word = word;
  return this.name + " is now teaching " + this.word;
}


//Question One Test case
console.log("Expected output of teach() is  'Niyonshuti is now teaching English'  " + myFunctionTest('Niyonshuti is now teaching English', function () {
  return teacher1.teach("English");
}));


// Question Three part B answer Using Object.create
let Person1 = {
  name: ""
}
let teacher2 = Object.create(Person1);
teacher2.name = "Moses Niyonshuti";
teacher2.teach = function (word) {
  return this.name + " is now teaching " + word;
}


//Question One Test case
console.log("Expected output of teach() is  'Niyonshuti is now teaching Mathematics'  " + myFunctionTest('Moses Niyonshuti is now teaching Mathematics', function () {
  return teacher2.teach("Mathematics");
}));

// Question 4 part A using the constructor
function Person2(name, age) {
  this.name = name;
  this.age = age;

}
Person2.prototype.salute = function () {
  return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
}
Person2.prototype.greeting = function () {
  console.log("Greetings, my name is + " + this.name + " and I am " + this.age + " years old.");
}
function Student(name, age, major) {
  Person2.call(this, name, age);
  this.major = major;
}
Student.prototype = Object.create(Person2.prototype);
Student.prototype.greeting = function (major) {
  return "Hey, my name is " + this.name + " and I am studying  " + this.major;
}
function Professor(name, age, department) {
  Person2.call(this, name, age);
  this.department = department;
}
Professor.prototype = Object.create(Person2.prototype);
Professor.prototype.greeting = function (department) {
  return "Good day, my name is " + this.name + " and I am in the  " + this.department + " department";
}

//TEST CASES
let Student1 = new Student("Niyonshuti Moses", 12, "Computer Science");
//Student greeting test case
console.log("Expected output of Student1.greeting() is  'Hey, my name is Niyonshuti Moses and I am studying  Computer Science'  " + myFunctionTest('Hey, my name is Niyonshuti Moses and I am studying  Computer Science', function () {
  return Student1.greeting();
}));

//Student salute test case
console.log("Expected output of Student1.salute() is  'Good morning!, and in case I dont see you, good afternoon, good evening and good night!'  " + myFunctionTest('Good morning!, and in case I dont see you, good afternoon, good evening and good night!', function () {
  return Student1.salute();
}));

let Professor1 = new Professor("Tina Xing", 23, "CS");
Professor1.greeting();
Professor1.salute();

//Student greeting test case
console.log("Expected output of Professor1.greeting() is  'Good day, my name is Tina Xing and I am in the  CS department' " + myFunctionTest('Good day, my name is Tina Xing and I am in the  CS department', function () {
  return Professor1.greeting();
}));

//Student salute test case
console.log("Expected output of Professor1.salute() is  'Good morning!, and in case I dont see you, good afternoon, good evening and good night!'  " + myFunctionTest('Good morning!, and in case I dont see you, good afternoon, good evening and good night!', function () {
  return Professor1.salute();
}));


// Question 4 using the constructor
let Person3 = {
  name: "",
  age: 0,
  salute: function () {
    return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
  },
  greeting: function () {
   return "Greetings, my name is + " + this.name + " and I am " + this.age + " years old.";
  }
}
let Student2 = Object.create(Person3);
Student2.name = "Moses Niyonshuti";
Student2.age = 12;

Student2.greeting = function (major) {
  Student2.major = major;
  return "Hey, my name is " + this.name + " and I am studying  " + this.major;
}

let Professor3 = Object.create(Person3);
Professor3.name = "Tina Xing";
Professor3.age = 14;
Professor3.greeting = function (department) {
  Professor3.department = department;
  return "Good day, my name is " + this.name + " and I am in the  " + this.department + " department";
}

//TEST CASES
//Student greeting test case
console.log("Expected output of Student.greeting('Computer Science'); is  'Hey, my name is Niyonshuti Moses and I am studying  Computer Science'  " + myFunctionTest('Hey, my name is Moses Niyonshuti and I am studying  Computer Science', function () {
  return Student2.greeting('Computer Science');
}));

//Student salute test case
console.log("Expected output of Student.salute() is  'Good morning!, and in case I dont see you, good afternoon, good evening and good night!'  " + myFunctionTest('Good morning!, and in case I dont see you, good afternoon, good evening and good night!', function () {
  return Student2.salute();
}));


//Student greeting test case
console.log("Expected output of Professor.greeting('CS') is  'Good day, my name is Tina Xing and I am in the  CS department' " + myFunctionTest('Good day, my name is Tina Xing and I am in the  CS department', function () {
  return Professor3.greeting("CS");
}));

//Student salute test case
console.log("Expected output of Professor1.salute() is  'Good morning!, and in case I dont see you, good afternoon, good evening and good night!'  " + myFunctionTest('Good morning!, and in case I dont see you, good afternoon, good evening and good night!', function () {
  return Professor3.salute();
}));

