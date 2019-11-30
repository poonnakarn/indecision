const appRoot = document.getElementById("app");

let visibility = false;
const toggleButton = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleButton}>
        {visibility === false ? "Show details" : "Hide details"}
      </button>
      {visibility && <p>This is the sample detail!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
