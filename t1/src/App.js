
import './App.css';
import React, {useState} from "react"
import Series from "./components/Series"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Container } from 'react-bootstrap';
import NavBar from "./components/NavBar"
import CharPopUp from "./components/CharPopUp"
import Alert from 'react-bootstrap/Alert'

function App() {
  const [openSeason, setSeason] = useState("")
  const [searchValue, setSearch] = useState("")
  const [searching, setSearching] = useState(false)
  const [searchResponse, setSearchResponse] = useState([])
  const [info, setInfo] = useState({})
  const [show, setShow] = useState(false)
  const [currentOffset, setOffset] = useState(0)
  const [apiError, setError] = useState(false)


  function handleSearch(input, offset) {
    console.log(offset);
      setSearching(true)
      setOffset(offset)
      fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters?name="+input.replace(" ","+")+"&limit=10&offset="+offset)
          .then((res) => res.json())
          .then((data) => {setSearchResponse(data)&&setError(false)},
          (error) => {setError(true)})
  }

  function handleCharClick(number) {
    setInfo(searchResponse[number])
    setShow(true)      
   
  }
  function handleClick() {
    setShow(false)
}  
  function handleSeasonClick(season) {
    setSeason(season)
    setShow(false)
    setSearching(false)
  }
  if (apiError) {
    return(<Alert variant="danger" onClose={() => setError(false)} dismissible>
    <Alert.Heading>API Request Error</Alert.Heading>
    <p>
          Either you have problems with your connection or your request can not be accepted from API
        </p>
  </Alert>)
    
  } else {
    
  
  if (searching) {
    if (show) {
      return(
      <div>
      <NavBar setSearch={setSearch} handleSearch={handleSearch} searchValue={searchValue}/>
      <Button variant="outline-info" onClick={() => setSearching(false)}>Volver</Button>
        <h1 style={{textAlign:"center"}}>Resultados búsqueda?</h1>
        {searchResponse.map((char,index)=>(<Button variant="primary" block onClick={() => handleCharClick(index)}>{char.name}</Button>))}
      <CharPopUp handleSeasonClick={handleSeasonClick} info={info} handleClick={handleClick}/>
    </div>)
      
    }
    else{
    return (<div>
      <NavBar setSearch={setSearch} handleSearch={handleSearch} searchValue={searchValue}/>
      <Button variant="outline-info" onClick={() => setSearching(false)}>Volver</Button>
        <h1 style={{textAlign:"center"}}>Resultados búsqueda</h1>
        {searchResponse.length ? (
        searchResponse.map((char,index)=>(<Button variant="primary" block onClick={() => handleCharClick(index)}>{char.name}</Button>)) 
             ) : (
        <h3 style={{textAlign:"center", padding:"30px", color:"red"}}>No se encontraron resultados</h3>
                                  )}
        <Container>
        <ButtonGroup style={{marginTop:"20px", marginLeft:"43.5%"}} aria-label="Basic example" size="sm">
          <Button variant="secondary" onClick={() => handleSearch(searchValue,currentOffset-10)}>Anterior</Button>
          <Button variant="secondary" onClick={() => handleSearch(searchValue,currentOffset+10)}>Siguiente</Button>
        </ButtonGroup>
        </Container>

    </div>)
    }
    
  }
  else{
  return(
  <div>
  <NavBar setSearch={setSearch} handleSearch={handleSearch} searchValue={searchValue}/>
  <Container style={{width:"100%"}}>
    <br/>
    <Series link="https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad" 
            name="Breaking Bad" 
            openS={openSeason} 
            setS={setSeason}/>
    <Series link="https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul" 
            name="Better Call Saul" 
            openS={openSeason} 
            setS={setSeason}/>
  </Container>  
  </div>
  
    )
  }}
}

export default App;
