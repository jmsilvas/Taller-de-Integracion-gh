
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function NavBar(props) {
    return (
        <Navbar style={{backgroundColor:"black", borderBottom:"2px solid white"}}>
        <Navbar.Brand href="" style={{color:"white"}}>Tarea 1</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => props.setSearch(e.target.value)}/>
          <Button variant="outline-info" onClick={() => props.handleSearch(props.searchValue, 0)}>Search</Button>
        </Form> 
      </Navbar>
    )
}
