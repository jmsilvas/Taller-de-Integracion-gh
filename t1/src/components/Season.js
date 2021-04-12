import React, {useState} from "react";
import Episode from "./Episode";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


function Season(props) {
    const [open, setOpen] = useState("");
    function handleClick(){
        setOpen("")
        if (props.seriesName+props.number !== props.open) {
            props.setOpenSeason(props.seriesName+props.number)
            console.log(props.seriesName+props.number);
        }
        else{
            props.setOpenSeason("")

        }
    }
    if (props.seriesName+props.number === props.open) {
        return(
            <Container>
                
                <Button variant="primary" 
                        size="lg" 
                        block
                        style={{marginTop:"10px"}}
                        onClick={() => handleClick()} 
                        key={props.seriesName+props.number}
                        >
                    Temporada {props.number}
                </Button> 
                {props.data.map((episode, index) =>(
                    <div>
                    <Episode key={episode.title+index} info={episode} seasonSetOpen={setOpen} sOS={props.setOpenSeason} openEpisode={open}/>
                    </div>   
                )
                )}
            </Container>
        )
    }
    else {
        return(
            <Container>
                <Button variant="primary" 
                        size="lg" 
                        block
                        style={{marginTop:"10px"}}
                        onClick={() => handleClick()} 
                        key={props.seriesName+props.number}
                        >
                    Temporada {props.number}
                </Button>
         
            </Container>
            )
        };
}

export default Season

