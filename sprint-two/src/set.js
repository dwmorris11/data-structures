var Set = function() {
  var set = Object.create(setPrototype);
  set._limit = 8;
  set._storage = LimitedArray(set._limit);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  if (!this.contains(item)) {
    this._storage.set(index, [item]);
  }
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  var contents = this._storage.get(index);
  if (contents === undefined) {
    return false;
  } else {
    for (var i=0 ; i < contents.length; i++) {
      if (contents[i] === item) {
        return true;
      }
    }
  }
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  var contents = this._storage.get(index);
  if (contents !== undefined) {
    for (var i=0; i < contents.length; i++) {
      if (contents[i] === item) {
        contents.splice(i, 1);
      }
    }
  }
  if (contents.length === 0) {
    contents = undefined;
  }
  this._storage.set(index, contents);
};



/*
 * Complexity: What is the time complexity of the above functions?

 add --- O(1)
 contains --- O(N)
 remove --- O(1)

 */

