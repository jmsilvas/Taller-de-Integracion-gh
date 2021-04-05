import React, {useState, useEffect} from "react"
import Season from "./Season"

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
      <div className="App">
        <h1 className="series-title">{props.name}</h1>
        {seasons.map((season,index) =>(
            // style={{marginBottom:10}}
            <Season seriesName={props.name} number={index+1} data={items.filter(episode => episode.season == index+1)}/>
        ))}
        
      </div>
    );
    
}

export default Series;