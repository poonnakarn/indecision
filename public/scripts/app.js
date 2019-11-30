"use strict";

// Tutorial

// argument objects - no longer bound

var add = function add(a, b) {
  // console.log(argument)
  return a + b;
};

console.log(add(10, 5));

// This keyword bind to scope if ES5 function
// แต่ this keybord is no longer bound in ES6 arrow function แต่จะตาม context
var user = {
  name: "Poon",
  cities: ["Bangkok", "New York", "Cholburi"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // Foreach เข้าไปใน array แล้วทำทีละครั้ง
    // this.cities.forEach(city => {
    //   console.log(this.name + " has lived in " + city);
    // });

    // Map return array ออกมา
    // ใช้ transform item ได้
    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city + "!";
    });
  }
};

console.log(user.printPlacesLived());

// Challenge
var multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - method return new array
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
