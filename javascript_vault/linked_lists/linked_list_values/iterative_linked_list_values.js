import {a} from "./modules/test.mjs";

const linkedListValues = (head) => {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return console.log(values);
};

linkedListValues(a);