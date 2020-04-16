// function longestword(sen){
//     // Create Filtered Array without commas
//     const wordarr = sen.toLowerCase().match(/[a-z0-9]+/g);
    

//     // Sort by Lenght
//     const sorted = wordarr.sort(function(a, b){
//         return b.lenght - a.lenght;
//     });

    

    // // If multiple words put it into Array
    // const longestwordarr = sorted.filter(function(word){
    //     return word.lenght === sorted[0].lenght;
    // });

    // // Check if more than 1 array value
    // if (longestwordarr.lenght === 1) {
    //     // Return word in string
    //     return longestwordarr[0];
    // } else {
    //     return longestwordarr;
    // }
// }

// const output = longestword('Helloo there my name is Brad');
// console.log(output);

// Program to get the longest word

// function longestWord(sen) {
//     // Create filtered array
//     const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  
//     // Sort by length
//     const sorted = wordArr.sort((a, b) => b.length - a.length);
  
//     // If multiple words, put into array
//     const longestWordArr = sorted.filter(
//       word => word.length === sorted[0].length
//     );
  
//     // Check if more than one array val
//     if (longestWordArr.length === 1) {
//       // Return the word
//       return longestWordArr[0];
//     } else {
//       return longestWordArr;
//     }
//   }
//   const output = longestWord('Helloo there my name is Brad');
//   console.log(output);



// ====================================

// SOLUTION 1

// function chunkArray(arr, len) {
//     // Init chunked arr
//     const chunkedArr = [];
//     // Set index
//     let i = 0;
  
//     // Loop while index is less than the array length
//     while (i < arr.length) {
//       // Slice out from the index to the index + the chunk length nd push on to the chunked array
//       chunkedArr.push(arr.slice(i, i + len));
//       // Increment by chunk length
//       i += len;
//     }

//     return chunkedArr;
// }


// const output = chunkArray([1,2,3,4,5,6,7,8,9,10] , 2);
// console.log(output);

// SOLUTION 2

  // Init chunked arr
//   const chunkedArr = [];

//   // Loop through arr
//   arr.forEach(val => {
//     // Get last element
//     const last = chunkedArr[chunkedArr.length - 1];

//     // Check if last and if last length is equal to the chunk len
//     if (!last || last.length === len) {
//       chunkedArr.push([val]);
//     } else {
//       last.push(val);
//     }
//   });

//   return chunkedArr;
// }
// const output = chunkArray([1,2,3,4,5,6,7,8,9,10] , 2);
// console.log(output);

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(arrays) {
    // SOLUTION 1
    // return arrays.reduce((a, b) => a.concat(b));
    // SOLUTION 2
    // return [].concat.apply([], arrays);
    // SOLUTION 3
    // return [].concat(...arrays);
    // SOLUTION 4
//     return arrays.flat(Infinity);
//   }




// ==================================



// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// function isAnagram(str1, str2) {
//     return formatStr(str1) === formatStr(str2);
//   }
  
//   // Helper function
//   function formatStr(str) {
//     return str
//       .replace(/[^\w]/g, '')
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('');
//   }
//   const output = isAnagram('Below', 'elbow');
//   console.log(output);


//=======================================


// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
      if (char === 'z' || char === 'Z') {
        return 'a';
      } else {
        return String.fromCharCode(char.charCodeAt() + 1);
      }
    });
  
    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
  
    return newStr;
  }
  
  // Call Function
  const output = letterChanges('Hello There');
  
  console.log(output);