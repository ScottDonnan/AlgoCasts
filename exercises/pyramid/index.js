// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, str = '') {
    const mid = Math.floor((n * 2 - 1)/2)
   
    if (row === n) {
       return;
    } 

    if (str.length === n * 2 -1) {
        console.log(str)
        return pyramid(n, row + 1)
    }

    if (str.length >= mid - row && str.length <= mid + row) {
        str += '#'
    } else {
        str += ' '
    }

    return pyramid(n, row, str)
}

module.exports = pyramid;

// function pyramid(n) {
//     const middle = Math.floor((n*2-1)/2)
//     for (let row = 0; row < n; row++) {
//         let rowString = ''
//         for (let col = 0; col < n * 2 - 1; col++) {
//             if (col >= middle - row && col <= middle + row) {
//                 rowString += "#"
//             } else {
//                 rowString += " "
//             }
//         }
//         console.log(rowString)
//     }
// }