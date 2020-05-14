var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.storageSize = 0;
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function (value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};
stackMethods.pop = function () {
  var key = String(this.storageSize-1);
  if(this['storage'].hasOwnProperty(key)) {
    var poppedValue = this.storage[key];
    delete this.storage[key];
    this.storageSize--;
  }
  return poppedValue;
};
stackMethods.size = function () {
  return this.storageSize;
};

