var Stack = function() {
  var someInstance = {};
  someInstance.storageSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storageSize++;
    storage[String(someInstance.storageSize-1)] = value;

  };

  someInstance.pop = function() {
    var key = String(someInstance.storageSize-1);
    if (storage.hasOwnProperty(key)) {
      var poppedValue = storage[key];
      delete storage[key];
      someInstance.storageSize--;
    }
    return poppedValue;
  };

  someInstance.size = function() {
    return someInstance.storageSize;
  };

  return someInstance;
};

