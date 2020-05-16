

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  this.adjustFlag = false;
};

HashTable.prototype.insert = function(k, v) {
  this._size++;
  if(this._size > (Math.round(.75*this._limit)) && !this.adjustFlag) {
    this.adjustStorage(2);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var contents = this._storage.get(index);
  if(contents === undefined) {
    contents = [tuple];
  } else {
    for (var i=0; i < contents.length; i++) {
      if (contents[i][0] === k) {
        this.adjustFlag = true;
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
  this._size--;
  if (this._size < (Math.round(.25*this._limit)) && !this.adjustFlag) {
    this.adjustStorage(.5);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(index);
  if (contents !== undefined) {
    for (var i=0; i < contents.length; i++) {
      if (contents[i][0] === k) {
        contents.splice(i, 1);
      }
    }
  }
  this._storage.set(index, contents);
};

HashTable.prototype.adjustStorage = function(percentage) {
  var newHashTable = new HashTable();
  newHashTable._limit = Math.round(percentage * this._limit);
  newHashTable._storage = LimitedArray(newHashTable._limit);
  for (var index=0; index < this._limit; index++) {
    var contents = this._storage.get(index);
    if (contents !== undefined) {
      for (var i=0; i < contents.length; i++) {
        newHashTable.insert(contents[i][0], contents[i][1]);
      }
    }
    this._storage.set(index, undefined);
  }
  this._limit = newHashTable._limit;
  this._storage = LimitedArray(this.limit);
  this._size = 0;
  this.adjustFlag = true;
  for (var index=0; index < newHashTable._limit; index++) {
    var contents = newHashTable._storage.get(index);
    if (contents !== undefined) {
      for (var i=0; i < contents.length; i++) {
        this.insert(contents[i][0], contents[i][1]);
      }
    }
  }
  delete newHashTable;
  this.adjustFlag = false;

};
//Double the size of the old hashtable
//insert the contents of the newhastable into the oldhashtable
//delete newhashtable

/*
 * Complexity: What is the time complexity of the above functions?
 */

//limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'