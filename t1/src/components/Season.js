import React from "react";
import Episode from "./Episode";

class Season extends React.Component{
    constructor(props){
        super(props);  
        this.state = {clicked: false} 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            clicked: !state.clicked
        }));
    }
    render(){
        if (this.state.clicked) {
            return(
                <div  className="season-box">
                    <button 
                        onClick={() => this.handleClick()} 
                        className="season-button" 
                        key={this.props.seriesName+this.props.number}>
                            Temporada {this.props.number}
                    </button>    
                    {this.props.data.map((episode, index) =>(
                        <div>
                        <Episode info={episode}/>
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
                        onClick={() => this.handleClick()} 
                        className="season-button" 
                        key={this.props.seriesName+this.props.number}>
                            Temporada {this.props.number}
                    </button>    
                </div>
                )
            };
    }
}
export default Season;