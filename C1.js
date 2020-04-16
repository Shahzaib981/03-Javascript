// CHALLENGE 1
// REVERSE A String
                                            
                                            // Convert a string into Array

// function revstr(str){
//     return str
//     .split('');  
// }
// output = [ 'h', 'e', 'l', 'l', 'o' ]

                                            // First split the string into Array then reverse it

// function revstr(str){
//     const Strarr = str.split('');
//     Strarr.reverse();
//     console.log(Strarr);
// }
// output = [ 'o', 'l', 'l', 'e', 'h' ]     returns the string in array form in reverse order




                                        // MAIN METHOD OF REVERSE THE STRING

// function revstr(str){
//          const Strarr = str.split('');
//          Strarr.reverse();
//          return Strarr.join('');
//     }

// output = olleh                          returns the array in string form


                          // But it contains a lot of code. we can clean it.

// Cleaned Version

//  function revstr(str){
//      return str
//           .split('')
//           .reverse()
//           .join('');
//      }

// output = olleh 



// At the end of all functions
// Call Function
// const output = revstr('hello');
// console.log(output);

                                 // pallendrome function 


function Ispallendrome(str){
     const revstr = str
     .split('')
     .reverse()
     .join('');

     return revstr === str;

}
const output = Ispallendrome('madam');
console.log(output);
