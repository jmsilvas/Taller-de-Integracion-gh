import React, {useState} from "react";
import Episode from "./Episode";

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
            <div  className="season-box">
                <button 
                    onClick={() => handleClick()} 
                    className="season-button" 
                    key={props.seriesName+props.number+"c"}>
                        Temporada {props.number}
                </button>    
                {props.data.map((episode, index) =>(
                    <div>
                    <Episode key={episode.title} info={episode} seasonSetOpen={setOpen} sOS={props.setOpenSeason} openEpisode={open}/>
                    </div>   
                )
                )}
            </div>
        )
    }
    else {
        return(
            <div  className="season-box">
                <button 
                    onClick={() => handleClick()} 
                    className="season-button" 
                    key={props.seriesName+props.number}>
                        Temporada {props.number}
                </button>    
            </div>
            )
        };
}

export default Season

