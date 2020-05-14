var Queue = function() {
  var someInstance = {};
  someInstance.storageSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storageSize++;
    storage[String(someInstance.storageSize-1)] = value;
  };

  someInstance.dequeue = function() {
    if (storage['0'] === undefined) { return; }
    var dequeuedValue = storage['0'];
    delete storage['0'];
    var storageClone = _.clone(storage);
    storage = {};
    _.each(storageClone, function(item, key) {
      key = Number(key) - 1;
      storage[String(key)] = item;
    });
    someInstance.storageSize--;
    return dequeuedValue;
  };

  someInstance.size = function() {
    return someInstance.storageSize;
  };

  return someInstance;
};
