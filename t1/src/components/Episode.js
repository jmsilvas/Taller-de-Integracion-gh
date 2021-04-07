import React from "react";

class Episode extends React.Component {
    constructor(props){
        super(props);
        this.state={clicked: false}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (){
        this.setState( state => ({
            clicked: !state.clicked
        }))
    }
    render(){
    if (this.state.clicked) {
        return(
            <div className="episode-info">
                <button 
                    className="episode-button" 
                    onClick= {this.handleClick}
                    key={this.props.info.id}
                    >{this.props.info.title}
                </button>
                <ul>
                    <li>Título= {this.props.info.title}</li>
                    <li>Temporada= {this.props.info.season}</li>
                    <li>N° episodio= {this.props.info.episode}</li>
                    <li>Fecha publicación= {this.props.info.air_date.split("T")[0]}</li>
                    <li>Serie= {this.props.info.series}</li>
                    <li>Personajes:    {this.props.info.characters.map((character,index)=>
                    <button className="character-button">{character}</button>)}</li>
                    
                </ul>
            </div>
        )
        
    }
    else {
        return(
            <div className="episode-info">
                <button 
                className="episode-button" 
                onClick= {this.handleClick}
                key={this.props.info.id}
                >{this.props.info.title}
            </button>
            </div>
        )
    }
       
    }
}

export default Episode;