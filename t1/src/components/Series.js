import React, {useState, useEffect} from "react"
import { Container } from "react-bootstrap";
import Season from "./Season"
import Jumbotron from 'react-bootstrap/Jumbotron'


function Series(props) {

    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch(props.link)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          })
    },[props.link]);
    let seasons = [];
    let max = 0
    for (let i = 0; i < items.length; i++) {
      if (items[i].season>max) {
        seasons.push(i+1);
        max = items[i].season
      }}
      
    return (
      <Container>
        <Jumbotron style={{color:"white", backgroundColor:"black", border:"2px solid #0069d9"}}>
          <Container>
            <h1>{props.name}</h1>
          </Container>
        </Jumbotron>
        <Container style={{marginBottom:"30px"}}>
        {seasons.map((season,index) =>(
            <Season key={props.name+index}
                    seriesName={props.name} 
                    number={index+1} 
                    open={props.openS}  
                    setOpenSeason={props.setS}
                    data={items.filter(episode => episode.season === String(index+1))}/>
        ))}
        </Container>
      </Container>
    );
    
}

export default Series;