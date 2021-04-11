import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

export default function Character(props) {
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({});

    useEffect(() => {
        fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters?name="+props.name.replace(" ","+"))
            .then((res) => res.json())
            .then((data) => {setInfo(data[0])})
    })

    function handleClick() {
        setShow(!show)
    }

    function handleSeasonClick(season) {
        props.setOpenEpisode("")
        props.setOpenSeason(season)
    }

    if (show) {
        return (
            <span>
                     <Button variant="outline-primary" 
                    onClick= {handleClick}
                    block
                    >
                 {props.name}
                </Button>)        
               
            <div className="pop-up-window">
                <div className="pop-up-content">
                  
                    <button className="close-button" onClick={handleClick}>x</button>
                    <Container>
                        <Row>
                        <Col xs={6} md={4}>
      <Image src={info.img} rounded />
    </Col>
                        <Col>  <div>Nombre: {info.name}</div>
                        <div>Ocupación: {info.occupation}</div>
                        <div>Estado: {info.status}</div>
                        <div>Apodo: {info.nickname}</div>
                        <div>Actor(a): {info.portrayed}</div>    
                        <div>Series: {info.category}</div>
                        <div>Temporadas en Breaking Bad: </div>
                        <ButtonGroup aria-label="Basic example">
                        {info.appearance.map((app,index)=>(<Button variant="primary" onClick={() => handleSeasonClick("Breaking Bad"+app)}>{app}</Button>))}
                        </ButtonGroup>
                        <div>Temporadas Better Call Saul:</div>
                        <ButtonGroup aria-label="Basic example">
                        {info.better_call_saul_appearance.map((app,index)=>(<Button variant="primary" onClick={() => handleSeasonClick("Better Call Saul"+app)}>{app}</Button>))}
                        </ButtonGroup>
                </Col>
                </Row>
                    </Container>
                   
                </div>
            </div>
            </span>
        )
    }
    else{
        return (
            <Button variant="outline-primary" 
                    onClick= {handleClick}
                    block
                    >
                 {props.name}
                </Button>)            

    }
}