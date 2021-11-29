// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    return num1 + num2
  }
  var result = sum(10,5)
  console.log(result)
  
  // Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
  function maxNum(num1, num2, num3){
    return Math.max(num1,num2,num3)
  }
  var maxResult = maxNum(1,5,3)
  console.log(maxResult)
  
  // Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
  function EvenOdd(num){
    if(num % 2 === 0){return "even"}
    else{return "odd"}
  }
  var IsEvenOdd = EvenOdd(7)
  console.log(IsEvenOdd)
  
  //BONUS
  
  // Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string. You will need to use a string method or two: -slice() -concat() (optional)
  
  function stringy(string){
    if(string.length <= 20){return string.concat(string, string)}
    else if(string.length > 20){return string.slice(0, string.length/2)}
  }
  var myString = stringy("This string is short")
  console.log(myString)
  
  var myString = stringy("This is a very long string, what could be the first half?")
  console.log(myString)
  
  // Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
  // Starts at 0 so num 6 starting at 1 will be num 7 starting at 0
  const fibonacci = n =>
    Array.from({ length: n }).reduce(
      (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      []
    );
  var myFib = fibonacci(7)
  console.log(myFib)
  
  console.log(
    myFib.reduce((a, b) => a + b, 0)
  )
  
  // Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )
  
  function maxCount(input) {
      const {max, ...counts} = (input || "").split("").reduce(
      (a, c) => {
          a[c] = a[c] ? a[c] + 1 : 1;
          a.max = a.max < a[c] ? a[c] : a.max;
          return a;
      },
      { max: 0 }
      );
  
      return Object.entries(counts).filter(([k, v]) => v === max);
  }
  
  var myCharCountMax = maxCount("Well which letter wildly popular?")
  console.log(myCharCountMax)