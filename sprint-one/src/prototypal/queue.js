var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.storageSize = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {};
queueMethods.dequeue = function () {};
queueMethods.size = function () {this.storageSize;};


