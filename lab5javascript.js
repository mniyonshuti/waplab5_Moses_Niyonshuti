//Function to test the results
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

//Question Two Answer
function max(firstNumber, secondNumber) {
    return firstNumber > secondNumber ? firstNumber : secondNumber;
}

//Question Two test case
 console.log("Expected output of max() is 13  " + myFunctionTest(13 , function () {
     return max(1, 13);
 }));

 //Question 3 Answer
function maxOfThree(firstNumber, secondNumber, thirdNumber) {
    let temporary = (firstNumber > secondNumber ? firstNumber : secondNumber);
    return temporary > thirdNumber ? temporary : thirdNumber;
}

//Question Three test case
console.log("Expected output of maxOfThree() is 13  " + myFunctionTest(13 , function () {
    return maxOfThree(1, 13, 4);
}));

//Question 4 answer
function isVowel(character) {
    if (character.length > 1) return false;
    else {
        let upperCaseCharacter = character.toUpperCase();
        let vowels = ["A", "E", "I", "O", "U"];
        if (vowels.includes(upperCaseCharacter)) return true;
    }
    return false;
}

//Question Four test case
console.log("Expected output of isVowel() is true  " + myFunctionTest(true , function () {
    return isVowel('e');
}));


//Question 5 answer
function sum(numbers) {
    let sum = numbers.reduce(function (currentNumber, previousNumber) {
        return currentNumber + previousNumber;
    });
    return sum;
}

//Question Five test case
console.log("Expected output of sum() is 10  " + myFunctionTest(10 , function () {
    let nums = [1,2,3,4];
    return sum(nums);
}));

//Question Six answer
function multiply(numbers) {
    let product = numbers.reduce(function (currentNumber, previousNumber) {
        return currentNumber * previousNumber;
    });
    return product;
}

//Question six test case
console.log("Expected output of multiply() is 24  " + myFunctionTest(24 , function () {
    let nums = [1,2,3,4];
    return multiply(nums);
}));

//Question seven answer
function reverse(word) {
    let reversedWord = [];
    for (let i = 0; i < word.length; i++) {
        reversedWord.unshift(word.charAt(i));
    }
    return reversedWord.join('');
}

//Question seven test case
console.log("Expected output of reverse() is ituhsnoyiN  " + myFunctionTest("ituhsnoyiN" , function () {
    return reverse("Niyonshuti");
}));


//Question Eight answer
function findLongestWord(words) {
    let longestWord = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
        }
    }
    return longestWord;
}

//Question seven test case
console.log("Expected output of findLongestWord() is 10  " + myFunctionTest(10 , function () {
    let words = ["a", "moses", "niyonshuti", "b"];
    return findLongestWord(words);
}));

//Question Eight answer
function filterLongWords(words, i) {
    let wordsGreaterThanI = [];
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > i) {
            wordsGreaterThanI.push(words[j]);
        }
    }
    return wordsGreaterThanI;
}

//Question eight test case
let longWords = ["moses", "niyonshuti"];
console.log("Expected output of filterLongWords() is [moses, niyonshuti]  " + myFunctionTest(longWords , function () {
    let words = ["a", "moses", "niyonshuti", "b"];
    return filterLongWords(words , 3);
}));


//Question Nine answers
const a = [1,3,5,3,3]; 

//Question 9 part A Answer
function question9A(numbers){
    return a.map(function (elem, i, array) {
        return elem * 10;
    });
}


//Question 9 part a test case
const ans1 = [10,30,50,30,30]; 
console.log("Expected output of question 9 a is [10,30,50,30,30]  " + myFunctionTest(ans1 , function () {
    return question9A(a);
}));

//Question 9 part A Answer
function question9B(numbers){
    return a.filter(function (elem, i, array) {
        return elem === 3;
    });
}

//Question 9 part B test case
const ans2 = [3,3,3]; 
console.log("Expected output of question 9 b is [3,3,3]  " + myFunctionTest(ans2 , function () {
    return question9B(a);
}));

//Question 9 part C Answer
function question9C(numbers){
    return a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
}


//Question 9 part C test case
console.log("Expected output of question 9 c is 135  " + myFunctionTest(135 , function () {
    return question9C(a);
}));