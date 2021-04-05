
import './App.css';
import React from "react"
import Series from "./components/Series"

function App() {
  return(
  <div>
    <Series link="https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul" name="Better Call Saul"/>
    <Series link="https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad" name="Breaking Bad"/>
  </div>
  
  )
}

export default App;
