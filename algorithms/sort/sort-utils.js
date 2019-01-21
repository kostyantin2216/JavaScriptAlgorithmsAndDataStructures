function defaultComparator(a, b) {
    return a - b;
}

function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

module.exports = { defaultComparator, swap };
