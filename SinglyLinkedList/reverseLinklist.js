import { list } from './Linklist.js'

function reverseLinkList(head) {
    let prev = null
    let curr = head;
    
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

console.log(reverseLinkList(list.head));