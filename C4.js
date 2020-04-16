// function maxCharacter(str) {
//     const charMap = {};
//     let maxNum = 0;
//     let maxChar = '';
  
//     str.split('').forEach(function(char) {
//       if(charMap[char]) {
//         charMap[char]++;
//       } else {
//         charMap[char] = 1;
//       }
//     });
  
//     for(let char in charMap) {
//       // debugger;
//       if(charMap[char] > maxNum) {
//         maxNum = charMap[char];
//         maxChar = char;
//       }
//     }
  
//     return maxChar;
// }
//     const output = maxCharacter('javascript');
// console.log(output);


// // CHALLENGE 6: FIZZBUZZ
// // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// function fizzBuzz() {
//     //   for(let i = 1; i <= 100; i++) {
//     //     if(i % 15 === 0) {
//     //       console.log('FizzBuzz');
//     //     } else if(i % 3 === 0) {
//     //       console.log('Fizz');
//     //     } else if(i % 5 === 0) {
//     //       console.log('Buzz');
//     //     } else {
//     //       console.log(i);
//     //     }
//     //   }
//     const output = fizzBuzz();

    // console.log(output);
