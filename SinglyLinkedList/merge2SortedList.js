import { list, list2 } from './Linklist.js'


function MergeTwoSortedList(head, head2) {
    if (head === null) return head2
    if (head2 === null) return head

    if (head.value < head2.value) {
        head.next = MergeTwoSortedList(head.next, head2)
        return head
    } else {
        head2.next = MergeTwoSortedList(head, head2.next)
        return head2
    }
}

let newlist = MergeTwoSortedList(list.head, list2.head)
let current = newlist
let result = ""
while (current) {
    console.log(current);
    result += current.value + '->'
    current = current.next
}
console.log(result + 'null')