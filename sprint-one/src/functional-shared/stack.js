var Stack = function() {
  var someInstance = {};
  someInstance.storageSize = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);

  return someInstance;
};
stackMethods = {};

stackMethods.push = function (value) {
  this.storageSize++;
  this.storage[this.storageSize-1] = value;
};
stackMethods.pop = function (value) {
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


