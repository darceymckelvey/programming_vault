// iterative solution to the core traversal algorithm

/**
 *
 * defining a class instead of prototype:
 *
 * class Node {
 *   constructor (val) {
 *     this.val = val;
 *     this.next = null;
 *   }
 * }
 *
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

//  A --> B --> C --> D -- NULL
// cur cur.next
//  A --> B --> C --> D -- NULL
//       cur cur.next

const printLinkedList = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};

printLinkedList(a);
