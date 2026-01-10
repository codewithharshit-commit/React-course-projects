import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let fruitItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {fruitItems.length === 0 ? <h2>I am Hungry</h2> : null}
      <ul>
        {fruitItems.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
