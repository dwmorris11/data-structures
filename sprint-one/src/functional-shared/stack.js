var Stack = function() {
  var someInstance = {};
  someInstance.storageSize = 0;
  _.extend(someInstance, someInstance.storageSize, Stack.stackMethods);

  return someInstance;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function (value) {/**/};
Stack.stackMethods.pop = function (value) {/* */};
Stack.stackMethods.size = function () {
  return this.storageSize;
};


