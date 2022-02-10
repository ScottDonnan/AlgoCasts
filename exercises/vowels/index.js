// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


//declare counter variable
//loop through each value in string
    // if value === a, e, i, o, or u increase counter variable
//return counter variable


function vowels(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;

}

module.exports = vowels;

// function vowels(str) {
//     let vowelCounter = 0;
//     const vowelArray = ['a','e','i','o','u']

//     for (let char of str.toLowerCase()) {
        
//         if (vowelArray.includes(char)) {
//             vowelCounter++
//         }
//     }

//     return vowelCounter;
// }