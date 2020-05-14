var Queue = function() {
  var someInstance = {};
  someInstance.storageSize = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

queueMethods.dequeue = function() {
  if (this.storage['0'] === undefined) { return; }
  var dequeuedValue = this.storage['0'];
  delete this.storage['0'];
  var storageClone = _.clone(this.storage);
  this.storage = {};
  _.each(storageClone, function (item, key) {
    key = Number(key) - 1;
    if(this.storage === undefined){
      debugger;
    }
    this.storage[String(key)] = item;
  }, this);
  this.storageSize--;
  return dequeuedValue;
};

queueMethods.size = function () {
  return this.storageSize;
};

