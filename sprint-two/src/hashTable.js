

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var contents = this._storage.get(index);
  if(contents === undefined) {
    contents = [tuple];
  } else{
    for (var i=0; i < contents.length; i++) {
      if (contents[i][0] === k) {
        this.remove(k);
      }
    }
    contents.push(tuple);
  }
  this._storage.set(index, contents);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(index);
  if (contents === undefined) {
    return undefined;
  } else {
    for (var i=0; i < contents.length; i++) {
      if (contents[i][0] === k) {
        return contents[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(index);
  if (contents !== undefined) {
    for (var i=0; i < contents.length; i++) {
      if (contents[i][0] === k) {
        contents.splice(i, 1);
        // if (contents[i].length === 0) {
        //   this._storage.set(index, undefined);
        // }
      }
    }
  }
  this._storage.set(index, contents);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'
