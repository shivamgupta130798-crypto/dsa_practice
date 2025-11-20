function MergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = MergeSort(arr.slice(0, mid))
    let right = MergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(l, r) {
    let sorted = []

    while (l.length && r.length) {
        if (l[0] < r[0]) {
            sorted.push(l.shift())
        } else {
            sorted.push(r.shift())
        }
    }
    return [...sorted, ...l, ...r]
}

MergeSort([34, 43, 52, 2, 4, 6, 9, 320, 4345, 54, 64, 543, 5, 7, 65467, 542])
