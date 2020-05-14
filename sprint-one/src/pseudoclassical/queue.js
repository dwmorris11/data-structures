var Queue = function() {
  this.storage = {};
  this.storageSize = 0;
};

Queue.prototype.enqueue = function (value) {};
Queue.prototype.dequeue = function () {};
Queue.prototype.size = function () {
  return this.storageSize;
};
