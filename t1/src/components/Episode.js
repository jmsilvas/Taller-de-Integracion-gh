import React from "react";
import Character from "./Character"

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
            <div className="episode-info">
                <button 
                    className="episode-button" 
                    onClick= {handleClick}
                    key={props.info.id}
                    >{props.info.title}
                </button>
                <ul>
                    <li>Título= {props.info.title}</li>
                    <li>Temporada= {props.info.season}</li>
                    <li>N° episodio= {props.info.episode}</li>
                    <li>Fecha publicación= {props.info.air_date.split("T")[0]}</li>
                    <li>Serie= {props.info.series}</li>
                    <li>Personajes: {props.info.characters.map((character,index)=>(
                    <Character name={character} setOpenSeason={props.sOS} setOpenEpisode={props.seasonSetOpen}/>))}</li>
                </ul>
        
            </div>
        )
        
    }
    else {
        return(
            <div className="episode-info">
                <button 
                className="episode-button" 
                onClick= {handleClick}
                key={props.info.id}
                >{props.info.title}
            </button>
            </div>
        )
    }
}

export default Episode