export const isArrayDistinct = (arr) => {
    let n = arr.length;

    // Put all array elements in a map
    let s = new Set();
    for (let i = 0; i < n; i++) {
        s.add(arr[i]);
    }

    // If all elements are distinct, size of
    // set should be same array.
    return (s.size === arr.length);
}