var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.size === 0) {
      list.head = node;
      list.head.next = node;
    }
    if (list.size === 1) {
      list.head.next = node;
    }
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
    list.size++;
  };

  list.removeHead = function() {
    var oldHeadValue = list.head.value;
    list.head = list.head.next;
    return oldHeadValue;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var onceMore = true;
    do {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
      if (currentNode.next === null) {
        onceMore = false;
      }
    }
    while (currentNode.next !== null && onceMore);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
