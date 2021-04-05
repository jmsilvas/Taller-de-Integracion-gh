import React from "react";
import Episode from "./Episode";

function Season(props) {
    function handleClick(text) {
        console.log('The ' +text +' button was clicked.');
        }
    return(
        <div  className="season-box">
            <button 
                onClick={() => handleClick(props.seriesName+props.number)} 
                className="season-button" 
                key={props.seriesName+props.number}>
                    Temporada {props.number}
            </button>    
            {props.data.map((episode, index) =>(
                <div>
                <button className="episode-button" key={episode.id}>{episode.title}</button>
                <Episode info={episode}/>
                </div>
                
            )
            
            )}
            
        </div>


    );
    
}

export default Season;