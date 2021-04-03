import React, {useState, useEffect} from "react"


function SaulSeasons() {
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          })
    },[]);
  
    let seasons = [];
    let max = 0
    for (let i = 0; i < items.length; i++) {
      if (items[i].season>max) {
        seasons.push(i+1);
        max = items[i].season
      }}
      
    return (
      <div className="App">
        <h1>Better Call Saul</h1>
        {seasons.map((season,index) =>(
          <div>
            <button key="index">Temporada {index+1}</button>            
          </div>
        ))}
        
      </div>
    );
    
}

export default SaulSeasons;