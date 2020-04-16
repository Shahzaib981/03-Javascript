                            // Reverse an Integer

// function revint(int){
//     const rint = int.toString()
//     .split('')
//     .reverse()
//     .join('');

//     return parseInt(rint) * Math.sign(int);
// }
// const output = revint('-12345');
// console.log(output);

                          // Function to toUpperCase the first letter of the word in String 

// function capletter(str){
//     const strarr = str.toLowerCase().split(' ');
//     for (let i = 0; i < strarr.length; i++) {
//         strarr[i] = strarr[i].substring(0,1).toUpperCase() + strarr[i].substring(1);
//     }
//     return strarr.join(' ');
// }
// const output = capletter('i love javascript');
// console.log(output);

                                   // Using Map Function

// function capletter(str){
//     return str
//     .toLowerCase()
//     .split(' ')
//     .map(function(word){
//         return word[0].toUpperCase() + word.substring(1);
//     })
//     .join(' ');
// }
// const output = capletter('i love javascript');
// console.log(output);

                                // Cleaning the code
function capletter(str){
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}
const output = capletter('i love javascript');
console.log(output);