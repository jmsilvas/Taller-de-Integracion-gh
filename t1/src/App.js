
import './App.css';
import React, {useState} from "react"
import Series from "./components/Series"

function App() {
  const [openSeason, setSeason] = useState("")
  return(
  <div>
    <Series link="https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul" name="Better Call Saul" openS={openSeason} setS={setSeason}/>
    <Series link="https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad" name="Breaking Bad" openS={openSeason} setS={setSeason}/>
  </div>
  
  )
}

export default App;
