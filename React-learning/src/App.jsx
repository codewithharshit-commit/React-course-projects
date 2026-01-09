import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let fruitItems = ["mango", "banana", "orange"];
  return (
    <>
      <ul>
        {fruitItems.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
