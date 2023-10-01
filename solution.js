class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    mergeTwoLists(list1, list2) {
        let cur = new ListNode();
        const dummy = cur;
        
        while (list1 && list2) {
            if (list1.val < list2.val) {
                cur.next = list1;
                list1 = list1.next;
                cur = cur.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
                cur = cur.next;
            }
        }
        
        if (list1 || list2) {
            cur.next = list1 ? list1 : list2;
        }
        
        return dummy.next;
    }
}

function createLinkedList(lst) {
    if (!lst.length) return null;

    const head = new ListNode(lst[0]);
    let current = head;
    
    for (let i = 1; i < lst.length; i++) {
        current.next = new ListNode(lst[i]);
        current = current.next;
    }

    return head;
}

function linkedListToList(node) {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

const list1 = createLinkedList([1, 3, 5, 7]);
const list2 = createLinkedList([2, 3, 6, 8, 10]);

const solution = new Solution();
const resultNode = solution.mergeTwoLists(list1, list2);
console.log(linkedListToList(resultNode));  // [1, 2, 3, 3, 5, 6, 7, 8, 10]
