// Revrse the string without function
// Use Loops

                               // For Loop (Decreasing)

// function reverseString(str) {
// let revString = '';
//   for(let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
//   }
//   return revString;
// }

// output = olleh 


                             // For Loop Increasing

// function reverseString(str){
//     let revString= ''; 
//     for (let i = 0; i <= str.length - 1; i++) {
//         revString = str[i] + revString;
//     }
//     return revString;
// }

// output = olleh

                              // More Easier Loop  

// function reverseString(str){
//         let revString= ''; 
//         for (let char of str) {
//             revString = char + revString;
//         }
//         return revString;
//     }

    // output = olleh

                                    // For-Each Loop
    
    // function reverseString(str){
    //             let revString= '';
    //             str.split('').forEach(function(char) {
    //                 revString = char + revString;
    //             });
    //             return revString;
    //         }

             // output = olleh


                      // If we want to impress, We can get rid of somethings
             
    // function reverseString(str){
    //             let revString= '';
    //             str.split('').forEach(char => 
    //                 revString = char + revString);
    //             return revString;
    //         }
            // output = olleh

            
            
                                 //   Cleaning code CS6

        // function reverseString(str){
        //     return str.split('').reduce((revString,char) => char + revString, '');
        //   }

        // output = olleh


// At the end of all functions
// Call Function
const output = reverseString('hello');
console.log(output);