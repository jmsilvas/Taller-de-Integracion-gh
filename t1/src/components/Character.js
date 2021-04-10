import React, {useState, useEffect} from 'react'

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
            <button className="character-button" 
                    onClick={handleClick}>
                    {props.name}
            </button>            
            <div className="pop-up-window">
                <div className="pop-up-content">
                    <button className="close-button" onClick={handleClick}>x</button>
                    <img src={info.img} alt="character loading.."></img>
                    <div className="character-info">
                        <div>Nombre: {info.name}</div>
                        <div>Ocupación: {info.occupation}</div>
                        <div>Estado: {info.status}</div>
                        <div>Apodo: {info.nickname}</div>
                        <div>Actor(a): {info.portrayed}</div>    
                        <div>Series: {info.category}</div>
                        <div>Temporadas en Breaking Bad: </div>
                        <div>{info.appearance.map((app,index)=>(<button onClick={() => handleSeasonClick("Breaking Bad"+app)} className="appearances-button">{app}</button>))}</div>
                        <div>Temporadas Better Call Saul:</div>
                        <div>{info.better_call_saul_appearance.map((app,index)=>(<button onClick={() => handleSeasonClick("Better Call Saul"+app)} className="appearances-button">{app}</button>))}</div>          
                
                    </div>
                </div>
            </div>
            </span>
        )
    }
    else{
        return (
            <button className="character-button" onClick={handleClick}>{props.name}</button>)            

    }
}