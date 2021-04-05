import React from "react";

function Episode(props) {
    console.log(props.info)
    return(
        <div className="episode-info">
        <ul>
            <li>Título= {props.info.title}</li>
            <li>Temporada= {props.info.season}</li>
            <li>N° episodio= {props.info.episode}</li>
            <li>Fecha publicación= {props.info.air_date.split("T")[0]}</li>
            <li>Serie= {props.info.series}</li>
            <li>Personajes</li>
            {props.info.characters.map((character,index)=>
            <div>{character}</div>)}
        </ul>
        </div>
    )   
}

export default Episode;