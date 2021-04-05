import React from "react";

function Season(props) {
    function handleClick(text) {
        console.log('The ' +text +' button was clicked.');
        }
    return(
        <div >
            <button 
                onClick={() => handleClick(props.seriesName+props.number)} 
                className="season-button" 
                key={props.seriesName+props.number}>
                    Temporada {props.number}
            </button>    
            {props.data.map((episode, index) =>(
                <div>
                <button className="episode-button" key={index}>{episode.title}</button>
                </div>
            )
            
            )}
            
        </div>


    );
    
}

export default Season;