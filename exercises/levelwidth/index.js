// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    
    
    const resultArry = [root, 's'];
    const counters = [0];

    while (resultArry.length > 1) {
        const node = resultArry.shift();

        if(node === 's') {
            counters.push(0)
            resultArry.push('s')
        } else {
            resultArry.push(...node.children);
            counters[counters.length - 1]++;
        }
    }
    

    return counters;

}

module.exports = levelWidth;
