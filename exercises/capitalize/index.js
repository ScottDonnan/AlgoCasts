// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
   let capString = '';

   for (let i = 0; i < str.length; i++) {
       if (i === 0 || str[i-1] === ' ') {
           capString += str[i].toUpperCase()
       } else {
           capString += str[i]
       }
   }

   return capString
    
}

module.exports = capitalize;

// function capitalize(str) {
//     // split string into array of words
//     //loop through each word
//     //capitalize first letter of each word using .toUpperCase()
//     //push capitalized word to new array
//     //join array back into string
//     const wordArray = str.split(' ')

//     return wordArray.map(string => {
//         const splitString = string.split('')
//         splitString[0] = splitString[0].toUpperCase()
//         return splitString.join('')
//     })
//     .join(' ')
// }


// function capitalize(str) {
//     const capArray = [];
 
//      for (let word of strArray.split(' ')) {
//          capArray.push(word[0].toUpperCase() + word.slice(1))
//      }
 
//      return capArray.join(' ')
//  }