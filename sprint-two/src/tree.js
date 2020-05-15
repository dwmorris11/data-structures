var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  var result = false;
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    result = _.some(this.children, function(node) {
      if (node.value === target) {
        return true;
      } else {
        return _.some(node.children, function(nod) {
          if (nod.value === target) {
            return true;
          } else {
            return false;
          }
        });
      }
    });
  }
  return result;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
