function Node(val) {
  this.val = val;
  this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
};

MyLinkedList.prototype.getLength = function () {
  let length = 0;
  let curr = this.head;

  while (curr !== null) {
    curr = curr.next;
    length++;
  }

  return length;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.getLength()) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);
  node.next = this.head;
  this.head = node;

};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.head == null) {
    this.addAtHead(val);
    return;
  }
  let node = new Node(val);
  let curr = this.head;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = node; // 끝지점에서 새로운 node

};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.getLength()) return;

  if(index === 0){
      this.addAtHead(val);
      return;
  }

  if(index === this.getLength()){
      this.addAtTail(val);
      return;
  }

  let curr = this.head;
  let node = new Node(val);
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  let next = curr.next;
  curr.next = node;
  node.next = next;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.getLength()) return;
  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  let curr = this.head;

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
};
