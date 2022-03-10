// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    //loop through each elemment of arr = i
        //loop through each element up to length-i-1 of arr = j
            //if element j > element j+1
                //swap their positions
    //return arr

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                let greater = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = greater;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    //variable for index of minimun value = first element of arr
    //loop through all elements of arr = i
        //loop through all elements of array = j
            //if arr[j] is less than minimum value
                //assign minimum value to j (index of smaller element)
        //after loop if value of arr[minimum value key] < arr[i]
            //swap arr[i] amd arr[minimum value key]

    //return arr

    
    for (let i = 0; i < arr.length; i++) {
        let minKey = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minKey]) {
                minKey = j;
            }
        }
        if (arr[minKey] !== arr[i]) {
            const greater = arr[i];
            arr[i] = arr[minKey];
            arr[minKey] = greater;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    
    const result = [];

    while (left.length && right.length) {
        if(left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
