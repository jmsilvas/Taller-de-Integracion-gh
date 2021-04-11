
import './App.css';
import React, {useState} from "react"
import Series from "./components/Series"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import NavBar from "./components/NavBar"
import CharPopUp from "./components/CharPopUp"

function App() {
  const [openSeason, setSeason] = useState("")
  const [searchValue, setSearch] = useState("")
  const [searching, setSearching] = useState(false)
  const [searchResponse, setSearchResponse] = useState([])
  const [info, setInfo] = useState({})
  const [show, setShow] = useState(false)


  function handleSearch(input) {
      setSearching(true)
      fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters?name="+input.replace(" ","+"))
          .then((res) => res.json())
          .then((data) => setSearchResponse(data))
  }

  function handleCharClick(name) {
    setShow(true)
    console.log(name);
    fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters?name="+name.replace(" ","+"))
    .then((res) => res.json())
    .then((data) => {setInfo(data[0])})
  }
  function handleClick() {
    setShow(!show)
}  
  function handleSeasonClick(season) {
    setSeason(season)
  }

  if (searching) {
    if (show) {
      return(
      <div>
      <NavBar setSearch={setSearch} handleSearch={handleSearch} searchValue={searchValue}/>
      <Button variant="outline-info" onClick={() => setSearching(false)}>Volver</Button>
        <h1 style={{textAlign:"center"}}>Resultados búsqueda?</h1>
        {searchResponse.map((char,index)=>(<Button variant="primary" block onClick={() => handleCharClick(char.name)}>{char.name}</Button>))}
      <CharPopUp handleSeasonClick={handleSeasonClick} info={info} handleClick={handleClick}/>
    </div>)
      
    }
    else{
    return (<div>
      <NavBar setSearch={setSearch} handleSearch={handleSearch} searchValue={searchValue}/>
      <Button variant="outline-info" onClick={() => setSearching(false)}>Volver</Button>
        <h1 style={{textAlign:"center"}}>Resultados búsqueda</h1>
        {searchResponse.map((char,index)=>(<Button variant="primary" block onClick={() => handleCharClick(char.name)}>{char.name}</Button>))}

    </div>)
    }
    
  }
  else{
  return(
  <div>
  <NavBar setSearch={setSearch} handleSearch={handleSearch} searchValue={searchValue}/>
  <Container style={{width:"100%"}}>
    <Series link="https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul" 
            name="Better Call Saul" 
            openS={openSeason} 
            setS={setSeason}/>
    <Series link="https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad" 
            name="Breaking Bad" 
            openS={openSeason} 
            setS={setSeason}/>
  </Container>
  </div>
  
    )
  }
}

export default App;
