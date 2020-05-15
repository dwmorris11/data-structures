

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push([node]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.some(this.nodes, function(nod) {
    if(nod[0] === node) {
      return true;
    }
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //array of nodes [[node1, node2, node3], [node2], ....]
  // iterate over each sub-array
  for (var i = 0; i < this.nodes.length; i++) {
    // look at index 0 of each sub-array and compare it to node
    if (this.nodes[i][0] === node) {
      // Remove the node
      for(var j=1; j < this.nodes[i].length; j++){
        this.removeEdge(this.nodes[i][0], this.nodes[i][j]);
      }
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Iterate over the nodes and find fromNode
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i][0] === fromNode) {
      if (this.nodes[i].includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Iterate over the nodes, look for fromNode
  for (var i = 0; i < this.nodes.length; i++) {
    // Push toNode to fromNode
    if (fromNode === this.nodes[i][0]) {
      this.nodes[i].push(toNode);
    }
  }
  // Iterate over the nodes, look for toNode
  for (var i = 0; i < this.nodes.length; i++) {
    if (toNode === this.nodes[i][0]) {
      this.nodes[i].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Iterate over the nodes, look for fromNode
  for (var i = 0; i < this.nodes.length; i++) {
    if (fromNode === this.nodes[i][0]) {
      var toNodeIndex = this.nodes[i].indexOf(toNode);
      this.nodes[i].splice(toNodeIndex, 1);
    }
  }
  for (var i = 0; i < this.nodes.length; i++) {
    if (toNode === this.nodes[i][0]) {
      var fromNodeIndex = this.nodes[i].indexOf(fromNode);
      this.nodes[i].splice(fromNodeIndex, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(item) {
    cb(item[0]);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


