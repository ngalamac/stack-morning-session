class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(number) {
    const newNode = new Node(number);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

const stack = new Stack();

stack.push(3);
stack.push(5);
console.log(stack.pop());
// Output: 5

stack.push(2);
stack.push(7);
console.log(stack.pop());
// Output: 7

console.log(stack.pop());
// Output: 2

console.log(stack.pop());
// Output: 3

module.exports = Stack;

