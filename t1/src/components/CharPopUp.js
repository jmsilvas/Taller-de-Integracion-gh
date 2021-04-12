import React, {useState, useEffect} from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function CharPopUp(props) {

    const [quotes, setQuotes] = useState([]);
    const [apiError, setError] = useState(false)
    useEffect(() => {
      fetch("https://tarea-1-breaking-bad.herokuapp.com/api/quote?author="+props.info.name.replace(" ","+"))
        .then(res => res.json())
        .then(
          (result) => {
            setQuotes(result)&&setError(false)
          },
          (error) => {setError(true)}
          )

    }, [props.info.name]);

    if (apiError) {
        return(<Alert variant="danger" onClose={() => setError(false)} dismissible>
        <Alert.Heading>API Request Error</Alert.Heading>
        <p>
          Either you have problems with your connection or your request can not be accepted from API
        </p>
      </Alert>)
        
      } else {
        
      
    return (
        <div className="pop-up-window">
                <div className="pop-up-content">
                    <Container >
                        <Row>
                            <Col>
                                <Container>
                                    <Image src={props.info.img} style={{maxHeight:"200px", marginTop:"10%", marginBottom:"10%"}} rounded />
                                </Container>
                            </Col>
                            <Col style={{color:"#0275d8", marginTop:"30px"}}> 
                                <div>Nombre: {props.info.name}</div>
                                <div>Ocupación: {props.info.occupation}</div>
                                <div>Estado: {props.info.status}</div>
                                <div>Apodo: {props.info.nickname}</div>
                                <div>Actor(a): {props.info.portrayed}</div>    
                                <div>Series: {props.info.category}</div>
                            
                            </Col>
                            <Col style={{color:"#0275d8"}}>
                            <button className="close-button" onClick={props.handleClick}>x</button>
                                    <div style={{marginTop:"30px"}}>Temporadas en Breaking Bad: </div>
                                    <ButtonGroup aria-label="Basic example" size="sm">
                                    {props.info.appearance.map((app,index)=>(
                                        <Button 
                                        variant="primary" 
                                        onClick={() => props.handleSeasonClick("Breaking Bad"+app)}>
                                            {app}
                                        </Button>))}
                                    </ButtonGroup>

                                    <div>Temporadas Better Call Saul:</div>
                                    <ButtonGroup aria-label="Basic example" size="sm">
                                        {props.info.better_call_saul_appearance.map((app,index)=>(
                                        <Button 
                                        variant="primary" 
                                        onClick={() => props.handleSeasonClick("Better Call Saul"+app)}>
                                            {app}
                                        </Button>))}
                                    </ButtonGroup>                                    
                            </Col>
                        </Row>
                        <Row style={{backgroundColor:"#0275d8", textAlign:"center", paddingBottom:"10px"}}>
                            <Col>
                            <h4 style={{textAlign:"center", color:"white"}}>Citas</h4>
                            {quotes.map((quote,index) => (
                                        <span style={{color:"white", fontSize:"0.8em"}}>"{quote.quote}" </span>))}
                            </Col>
                        </Row>
                    </Container>
                   
                </div>
            </div>
    )}
}
