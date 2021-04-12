import React from "react";
import Character from "./Character"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Episode(props) {
    function handleClick() {
        if (props.info.title !== props.openEpisode) {
            props.seasonSetOpen(props.info.title)  
        }
        else{
            props.seasonSetOpen("")
        }
             
    }
    if (props.info.title===props.openEpisode) {
        return(
            <div>
                  <Button variant="primary" 
                size="md" 
                block
                onClick= {handleClick}
                key={props.info.id}
                style={{borderRadius:"0", backgroundColor:"black"}}
                >
            {props.info.title}
            </Button>
     
            <Container>
                <Container style={{margin:"10px"}}>
                    <Row>
                        <Col style={{textAlign:"center", padding:"0px", color:"white"}}>
                        <div className="ep-info" style={{fontSize:"2em", fontWeight:"bold", textAlign:"center"}}>Título: {props.info.title}</div>
                        <div className="ep-info" style={{fontSize:"2em", fontWeight:"bold", textAlign:"center"}}>{props.info.air_date.split("T")[0]}</div>
            
                        <div style={{fontSize:"2em", fontWeight:"bold", textAlign:"center"}}>N° episodio: {props.info.episode}</div>
                        <div className="ep-info" style={{fontSize:"2em", fontWeight:"bold", textAlign:"center"}}>Temporada: {props.info.season}</div>
                        <div className="ep-info" style={{fontSize:"2em", fontWeight:"bold", textAlign:"center"}}>{props.info.series}</div>
                        </Col>

                        <Col>
                        {props.info.characters.map((character,index)=>(
                             <Character name={character} setOpenSeason={props.sOS} setOpenEpisode={props.seasonSetOpen}/>))}
                        </Col>
                    </Row>
                </Container>
              
        
            </Container>
            </div>
        )
        
    }
    else {
        return(
         
          
            <Button variant="primary" 
                size="md" 
                block
                onClick= {handleClick}
                key={props.info.id}
                style={{borderRadius:"0", backgroundColor:"black"}}
                >
            {props.info.title}
            </Button>

        )
    }
}

export default Episode