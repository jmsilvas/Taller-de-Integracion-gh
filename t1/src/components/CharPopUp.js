import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export default function CharPopUp(props) {
    return (
        <div className="pop-up-window">
                <div className="pop-up-content">
                    <Container >
                        <Row>
                            <Col>
                                <Container>
                                    <Image src={props.info.img} style={{maxWidth:"200px", marginTop:"10%"}} rounded />
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
                                    <ButtonGroup aria-label="Basic example">
                                    {props.info.appearance.map((app,index)=>(
                                        <Button 
                                        variant="primary" 
                                        onClick={() => props.handleSeasonClick("Breaking Bad"+app)}>
                                            {app}
                                        </Button>))}
                                    </ButtonGroup>
                                    <div>Temporadas Better Call Saul:</div>
                                    <ButtonGroup aria-label="Basic example">
                                        {props.info.better_call_saul_appearance.map((app,index)=>(
                                        <Button 
                                        variant="primary" 
                                        onClick={() => props.handleSeasonClick("Better Call Saul"+app)}>
                                            {app}
                                        </Button>))}
                                    </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                   
                </div>
            </div>
    )
}
