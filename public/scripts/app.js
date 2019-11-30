"use strict";

var appRoot = document.getElementById("app");

var visibility = false;
var toggleButton = function toggleButton() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleButton },
      visibility === false ? "Show details" : "Hide details"
    ),
    visibility && React.createElement(
      "p",
      null,
      "This is the sample detail!"
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
