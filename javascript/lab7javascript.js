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

//Question 4 part A answer
function sum(numbers) {
    return numbers.reduce((currentProduct, currentNumber) => currentNumber + currentProduct, 0);
}

//Question  4 part A test case
console.log("Expected output of sum() is 10  " + myFunctionTest(10 , function () {
    let nums = [1,2,3,4];
    return sum(nums);
}));

//Question 4 part B answer
function multiply(numbers) {
    return numbers.reduce((currentProduct, currentNumber) =>  currentNumber * currentProduct, 1);
}

//Question  4 part B test case
console.log("Expected output of multiply() is 24  " + myFunctionTest(24 , function () {
    let nums = [1,2,3,4];
    return multiply(nums);
}));

//Question Five answer
function reverse(word) {
    let reversedWord = word.split('');
    let reversedWord2 = [];
    reversedWord.map(elem => reversedWord2.unshift(elem));
    return reversedWord2.join('');
}
//Question Five test case
console.log("Expected output of reverse() is ituhsnoyiN  " + myFunctionTest("ituhsnoyiN" , function () {
    return reverse("Niyonshuti");
}));


//Question Seven answer
function filterLongWords(words, i) {
    return words.filter(elem => elem.length > i);
}

//Question Seven test case
let longWords = ["moses", "niyonshuti"];
console.log("Expected output of filterLongWords() is [moses, niyonshuti]  " + myFunctionTest(longWords , function () {
    let words = ["a", "moses", "niyonshuti", "b"];
    return filterLongWords(words , 3);
}));
