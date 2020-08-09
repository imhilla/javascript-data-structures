var number = 1;
var sum = 0;
while (number < 11) {
  sum += number;
  ++number;
}
print(sum); // displays 55

var number = 1;
var sum = 0;
for (var number = 1; number < 11; number++) {
  sum = sum + number;
}
print(sum); // displays 55

var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
  sum += numbers[i];
}
print(sum);

function factorial(number) {
  var product = 1;
  for (var i = number; i >= 1; --i) {
    product *= i;
  }
  return product;
}
print(factorial(4)); // displays 24
print(factorial(5)); // displays 120
print(factorial(10)); // displays 3628800

function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}
var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
print(grades); // displays 82,78,79,86,95

function showScope() {
  return scope;
}
var scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "global

function showScope() {
  var scope = "local";
  return scope;
}
var scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "local"

function showScope() {
  scope = "local";
  return scope;
}
scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "local"
print(scope); // displays "local"

function factorial(number) {
  if (number == 1) {
    return number;
  }
  else {
    return number * factorial(number - 1);
  }
}
print(factorial(5));

function Checking(amount) {
  this.balance = amount; // property
  this.deposit = deposit; // function
  this.withdraw = withdraw; // function
  this.toString = toString; // function
}

function deposit(amount) {
  this.balance += amount;
}
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    print("Insufficient funds");
  }
}
function toString() {
  return "Balance: " + this.balance;
}


function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}
function deposit(amount) {
  this.balance += amount;
}
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    print("Insufficient funds");
  }
}
function toString() {
  return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
print(account.toString()); // Balance: 1500
account.withdraw(750);
print(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
print(account.toString()); // Balance: 750