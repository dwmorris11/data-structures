var Stack = function() {
  var someInstance = Object.create(Stack.prototype);
  someInstance.storage = {};
  someInstance.storageSize = 0;
  return someInstance;
};

Stack.prototype.push = function () {};
Stack.prototype.pop = function () {};
Stack.prototype.size = function () {};

