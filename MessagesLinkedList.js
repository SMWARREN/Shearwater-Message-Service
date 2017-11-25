// This Class Creates Circular Linked List Which Holds all of our apps logic
module.exports = class MessagesLinkedList {

  // contructer function which initalizes the head and length variables to
  // be used later in the MessagesLinkedList Class
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // Creates the MessageSpecification Node to be used in the Linked List
  messageSpecification(name, specification) {
    if (name === undefined || specification === undefined) {
      return {
        error: 'This is an Invalid Message Specification.',
      };
    }
    return {
      name,
      specification,
    };
  }
// This function gets the  Current Message Specification Nodes
//  at the provided position in the circular linked list.
  getMessage(position) {
    let current = this.head;
    let count = 0;
    if (position > this.length) {
      return {
        error: 'The Message Specification Has Not Been Found',
      };
    }
    while (count < position) {
      current = current.next;
      count += 1;
    }
    return current;
  }
  // Adds Message Specification Nodes to the Circular Linked List
  addMessage(messageSpecification) {
    if (!messageSpecification.error) {
      const head = this.head;
      let current = head;
      const node = {
        value: messageSpecification,
        next: null,
        previous: null };

      if (!head) {
        node.next = node;
        node.previous = node;
        this.head = node;
      } else {
        while (current.next !== head) {
          current = current.next;
        }
        node.next = head;
        node.previous = current;
        head.previous = node;
        current.next = node;
        this.length += 1;
      }
    }
  }
  // Prints all of Message Specification Nodes in the Circular Linked List
  printMessages(messageServices) {
    const head = messageServices.head;
    if (messageServices.head) {
      let current = head;
      let string = current.value.specification;
      while (current.next !== head) {
        current = current.next;
        string = current.value.specification + string;
      }
      if (current.next === head) {
        if (current.value.specification === '. ') {
          string = current.next.value.specification + string;
        }
      }
      return string;
    }
  }
};
