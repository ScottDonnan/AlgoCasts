// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let anagram = true;
    const aObj = createCounter(stringA)
    const bObj = createCounter(stringB)
  
    function createCounter(string) {
      const charMap = {}
      const regString = string.replace(/[^\w]/g, "").toLowerCase()

      for (let elem of regString) {
        charMap[elem] ? charMap[elem]++ : charMap[elem] = 1
      }

      return charMap
    }
  

    if (Object.keys(aObj).length > Object.keys(bObj).length) {
      for (let key in aObj) {
        if (aObj[key] !== bObj[key]) {
            anagram = false
          }
      }
    } else {
      for (let key in bObj) {
        if (aObj[key] !== bObj[key]) {
            anagram = false
          }
      }
    }

    return anagram

}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     const aObj = {}
//     const bObj = {}
  
//     const regStringA = stringA.replace(/[^\w]/g, "").toLowerCase()
//     const regStringB = stringB.replace(/[^\w]/g, "").toLowerCase()
//     let anagram = true;
    
//     for (let elem of regStringA) {
//         aObj[elem] ? aObj[elem]++ : aObj[elem] = 1
//     }

//     for (let elem of regStringB) {
//         if (bObj[elem]) {
//             bObj[elem]++
//         } else {
//             bObj[elem] = 1
//         }
//     }

//     if (regStringA.length > regStringB) {
//       for (let key in aObj) {
//         if (aObj[key] !== bObj[key]) {
//             anagram = false
//           }
//       }
//     } else {
//       for (let key in bObj) {
//         if (aObj[key] !== bObj[key]) {
//             anagram = false
//           }
//       }
//     }

//     return (anagram)

// }