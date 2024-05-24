import Node from './nodes';

class LinkedList {
  #head = null;

  append(value) {
    if (!this.#head) {
      this.prepend(value);
      return;
    }

    this.tail().nextNode = new Node(value);
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  size() {
    let totalNodes = 0;
    let currentNode = this.#head;
    while (currentNode) {
      totalNodes += 1;
      currentNode = currentNode.nextNode;
    }

    return totalNodes;
  }

  head() {
    return this.#head;
  }

  tail() {
    if (!this.#head) return this.#head;

    let lastNode = this.#head;
    while (lastNode.nextNode) {
      lastNode = lastNode.nextNode;
    }

    return lastNode;
  }

  at(index) {
    let currentNode = this.#head;

    for (let i = 0; i <= index; i += 1) {
      if (!currentNode) throw new Error('No node at given index');
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (!this.#head) throw new Error('List is empty');

    if (!this.#head.nextNode) {
      this.#head = null;
      return;
    }

    let secondLastNode = this.#head;
    while (secondLastNode.nextNode.nextNode) {
      secondLastNode = secondLastNode.nextNode;
    }

    secondLastNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.#head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.value === value) return currentIndex;

      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    return null;
  }

  toString() {
    let currentNode = this.#head;
    let string = '';

    while (currentNode) {
      string += currentNode.value;
      currentNode = currentNode.nextNode;
    }

    string += 'null';

    return string;
  }
}

export default LinkedList;
