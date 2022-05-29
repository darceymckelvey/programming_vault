import {a} from "./modules/test.mjs";

const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values);  // helper function (does the recursion)
    return console.log(values);
};

// recursion in a separate function, so it doesn't create multiple arrays
// instead it is adding all the values in a single array
const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
};

linkedListValues(a);