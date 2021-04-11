
import './App.css';
import React, {useState} from "react"
import Series from "./components/Series"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';

function App() {
  const [openSeason, setSeason] = useState("")
  return(
  <div>
    <Navbar style={{backgroundColor:"black", borderBottom:"2px solid white"}}>
    <Navbar.Brand href="#home" style={{color:"white"}}>Tarea 1</Navbar.Brand>
    <Nav className="mr-auto">
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
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

export default App;
