"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: "Indecision App",
  subtitle: "Make us make a decision for you!",
  options: ["one", "two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "1. Item one"
    ),
    React.createElement(
      "li",
      null,
      "2. Item two"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Poonnakarn Panjasriprakarn"
  ),
  React.createElement(
    "p",
    null,
    "Age: 27"
  ),
  React.createElement(
    "p",
    null,
    "Location: Bangkok, Thailand"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
