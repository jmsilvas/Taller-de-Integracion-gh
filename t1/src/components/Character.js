import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

import CharPopUp from './CharPopUp'

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
   
               <Button variant="outline-primary" 
                    onClick= {handleClick}
                    block
                    >
                 {props.name}   
                 <CharPopUp handleSeasonClick={handleSeasonClick} info={info} handleClick={handleClick}/>
                </Button>    
               
     
        )
    }
    else{
        return (
            <Button variant="outline-primary" 
                    onClick= {handleClick}
                    block
                    >
                 {props.name}
                </Button>)            

    }
}