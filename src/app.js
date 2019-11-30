console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: "Indecision App",
  subtitle: "Make us make a decision for you!",
  options: ["one", "two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>1. Item one</li>
      <li>2. Item two</li>
    </ol>
  </div>
);

const templateTwo = (
  <div>
    <h1>Poonnakarn Panjasriprakarn</h1>
    <p>Age: 27</p>
    <p>Location: Bangkok, Thailand</p>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
