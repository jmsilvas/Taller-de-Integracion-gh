import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import CharPopUp from './CharPopUp'

export default function Character(props) {
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({});
    const [apiError, setError] = useState(false)

    useEffect(() => {
        fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters?name="+props.name.replace(" ","+"))
            .then((res) => res.json())
            .then((data) => {setInfo(data[0])&&setError(false)},
            (error) => {setError(true)})
    }, [props.name])

    function handleClick() {
        setShow(!show)
    }

    function handleSeasonClick(season) {
        props.setOpenEpisode("")
        props.setOpenSeason(season)
    }
    if (apiError) {
        return(<Alert variant="danger" onClose={() => setError(false)} dismissible>
        <Alert.Heading>API Request Error</Alert.Heading>
        <p>
          Either you have problems with your connection or your request can not be accepted from API
        </p>
      </Alert>)
        
      } else {
        
      
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

    }}
}