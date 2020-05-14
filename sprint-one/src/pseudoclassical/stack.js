var Stack = function() {
  this.storage = {};
  this.storageSize = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};
Stack.prototype.pop = function () {
  var key = String(this.storageSize-1);
  if(this['storage'].hasOwnProperty(key)) {
    var poppedValue = this.storage[key];
    delete this.storage[key];
    this.storageSize--;
  }
  return poppedValue;
};
Stack.prototype.size = function () {
  return this.storageSize;
};


