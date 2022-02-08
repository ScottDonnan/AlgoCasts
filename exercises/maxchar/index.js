// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const counter = new Object
    let largest = str[0];
    for (const value of str) {
        console.log(value)
        counter[value] = counter[value] + 1 || 1
        if (counter[value] > counter[largest]) {
            largest = value
        }
    }
    return largest
}

module.exports = maxChar;
