import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"

function App() {
  const [items, setItems] = useState([]);
  fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul")
    .then(res => res.json())
    .then(
      (result) => {
        setItems(result);
      }

    )
  return (
    <div className="App">
      <h1>Tarea 1</h1>
      <ul>
        {items.map(item => (
          <li key={item.episode_id}>
            {item.title} {item.season} - {item.series}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
