var BinarySearchTree = function (val) {
  this.value = val;
  // this.storage = {};
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function (value) {
  var newTree = new BinarySearchTree(value);

  var findPosition =  function (tree, value) {
    if (value < tree.value) {
      if (tree.left === undefined) {
        return [tree, 'left'];
      } else {
        return findPosition (tree.left, value);
      }
    }
    if (value > tree.value) {
      if (tree.right === undefined) {
        return [tree, 'right'];
      } else {
        return findPosition (tree.right, value);
      }
    }
  };

  var insertNode = findPosition(this, value);
  if(insertNode[1] === 'right') {
    insertNode[0].right = newTree;
  } else {
    insertNode[0].left = newTree;
  }
};

BinarySearchTree.prototype.contains = function (value) {
  var find = function(tree, value) {
    if (tree.value === value) {
      return true;
    }
    if (tree.left !== undefined) {
      if (tree.value >= tree.left.value) {
        return find(tree.right, value);
      }
    } else {
      return false;
    }
    if (tree.right !== undefined) {
      if (tree.value <= tree.right.value) {
        return find(tree.left, value);
      }
    } else {
      return false;
    }
  };
  return find(this, value);
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  var outputArray = [];
  var innerFunction = function(node) {
    outputArray.push(node);
    if (node.left !== undefined) {
      innerFunction(node.left);
    }
    if (node.right !== undefined) {
      innerFunction(node.right);
    }
  };
  innerFunction(this);
  _.each(outputArray, function(node) {
    func(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

