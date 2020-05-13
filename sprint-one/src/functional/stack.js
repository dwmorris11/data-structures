var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  };

  someInstance.pop = function() {
    var key = String(storage.length-1);
    var poppedValue = storage[key];
    delete storage[key];
    return poppedValue;
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
