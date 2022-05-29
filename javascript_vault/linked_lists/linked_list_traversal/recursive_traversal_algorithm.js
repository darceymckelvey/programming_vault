// recursive solution to the core traversal algorithm

/**
 *
 * defining a class instead of prototype:
 *
 * class Node {
 *     constructor (val) {
 *         this.val = val;
 *         this.next = null;
 *     }
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
// head
//  A --> B --> C --> D -- NULL
//       head

const printLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedList(head.next);
};

printLinkedList(a);
