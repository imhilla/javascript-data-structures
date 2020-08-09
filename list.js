function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  //this.front = front;
  // this.end = end;
  // this.prev = prev;
  // this.next = next;
  // this.length = length;
  // this.currPos = currPos;
  // this.moveTo = moveTo;
  // this.getElement = getElement;
  // this.length = length;
  // this.contains = contains;
}
//Adding an Element to a List

function append(element) {
  this.dataStore[this.listSize++] = element;
}

//Removing an Element from a List
//To start, let’s define a helper function, find() , for finding
//the element to remove
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

//Finding an Element in a List
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

//Determining the Number of Elements in a List
function length() {
  return this.listSize;
}

//toString: Retrieving a List’s Elements
function toString() {
  return this.dataStore;
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
print(names.toString());
names.remove("Raymond");
print(names.toString());

//Insert: Inserting an Element into a List
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

//Clear: Removing All Elements from a List
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

//Contains: Determining if a Given Value Is in a List
function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}