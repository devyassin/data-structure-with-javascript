"use strict";

function c() {
  console.log.apply(console, arguments);
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  // adding a node to the beging of the list
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // adding a node to the end of the list
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0) {
      c("index must be greater than 0 !");
    } else if (index >= this.getSize()) {
      c("index out of range !");
    } else if (index == 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      node.next = temp.next;
      temp.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    let removedValue;
    if (this.isEmpty()) {
      c("List is empty! ");
      return -1;
    } else if (this.size <= index) {
      c("Index out of range! ");
      return -1;
    } else if (index == 0) {
      removedValue = this.head.value;
      this.head = this.head.next;
    } else {
      let temp = this.head;
      let prev = temp;
      for (let i = 0; i < index; i++) {
        prev = temp;
        temp = temp.next;
      }
      removedValue = temp.value;
      prev.next = temp.next;
      temp = null;
    }
    this.size--;
    return removedValue;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      c("List is empty! ");
      return -1;
    } else if (this.head.value === value) {
      this.head = this.head.next;
      return;
    } else {
      let temp = this.head;
      let prev = temp;
      while (temp != null) {
        if (temp.value === value) {
          if (temp.next == null) {
            prev.next = null;
            c(`${value} is found !`);
          } else {
            prev.next = temp.next;
            c(`${value} is found !`);
          }
          this.size--;
          return;
        }
        prev = temp;
        temp = temp.next;
      }
    }
    c(`${value} not found !`);
    return;
  }
  searchValue(value) {
    if (this.isEmpty()) {
      c("List is empty! ");
    } else {
      let temp = this.head;
      while (temp != null) {
        if (temp.value == value) {
          return value;
        }
        temp = temp.next;
      }
    }
    return -1;
  }
  reverse() {
    if (this.isEmpty()) {
      c("List is empty! ");
    } else {
      let curr = this.head;
      let prev = null;
      while (curr != null) {
        let next= curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  }
  print() {
    if (this.isEmpty()) {
      c("list empty");
    } else {
      let temp = this.head;
      let message = "";
      while (temp != null) {
        message += ` ${temp.value}`;
        temp = temp.next;
      }
      c(message);
    }
  }
}

const linkedList = new LinkedList();
c(linkedList.getSize());
c(linkedList.isEmpty());
linkedList.print();
linkedList.prepend(1);
linkedList.prepend(5);
linkedList.prepend(10);
linkedList.append(20);
linkedList.print();
linkedList.insert(200, 3);
linkedList.print();
linkedList.removeValue(20);
linkedList.print();
c(linkedList.searchValue(200));
linkedList.reverse();
linkedList.print();
