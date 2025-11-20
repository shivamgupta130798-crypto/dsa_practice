function BinarySearch(arr, left, right, num) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) return mid;
    if (num < arr[mid]) return BinarySearch(arr, left, mid - 1, num);

    return BinarySearch(arr, mid + 1, right, num);

}



let arr = [2, 8, 10, 15, 17, 1717, 781648, 872184, 7647382, 9213674271, 3214, 433, 231, 434]
console.log(BinarySearch(arr.sort((a, b) => a - b) , 0, arr.length - 1, 3214))