class Stack {
  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }
  push(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }
  pop() {
    var key = String(this.storageSize-1);
    if(this['storage'].hasOwnProperty(key)) {
      var poppedValue = this.storage[key];
      delete this.storage[key];
      this.storageSize--;
    }
    return poppedValue;
  }
  size() {
    return this.storageSize;
  }
}

