const fibs = (n) => {
    let array = [0, 1];
    if (n == 0) {
        return [0];
    } else if (n == 1) {
        return array;
    } else {
        for (let i = 2; i < n; i++) {
            array.push(array[i - 2] + array[i - 1]);
        }
    }
    return array;
};


const fibsRec = (n, array = [0,1]) => {
    if (array.length >= n) {
        return array.slice(0,n);
    }
    return fibsRec(n, [...array, array[array.length - 1] + array[array.length -2]]);
};


const mergeSort = (array) => {
    // Define the base case (if length is equal to or less than 1)
    if (array.length <= 1) {
        return array;
    }
    // Create variables for the middle number, and left and right arrays
    const middle = Math.floor(array.length / 2);
    const leftArray = mergeSort(array.slice(0, middle));
    const rightArray = mergeSort(array.slice(middle));
    // Return the result of a function that merges the left and right arrays
    return merge(leftArray, rightArray);

};

    // Create a merge function that loops though the left and right arrays and pushes the smaller number into an array

const merge = (left, right) => {
    let mergedArray = [];
    i = 0;
    j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else {
            mergedArray.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from left or right
    return mergedArray.concat(left.slice(i)).concat(right.slice(j));
};