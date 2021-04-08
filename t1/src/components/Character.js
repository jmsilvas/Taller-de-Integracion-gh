import React, { Component } from 'react'

class character extends Component {
    constructor(props){
        super(props)
        this.state= {show:false,
                     name:"",
                    occupation:[],
                    img: "",
                    status:"",
                    nickname: "",
                    appearance: [],
                    portrayed: "",
                    category: "",
                    better_call_saul_appearance: []
                }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(state => ({show:!state.show}))
    }

    componentDidMount(){
        fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters?name="+this.props.name.replace(" ","+"))
        .then(res => res.json())
        .then(
            (result)=>{
                this.setState(
                    {show: this.state.show,
                    name: result[0].name,
                    occupation: result[0].occupation,
                    img: result[0].img,
                    status:result[0].status,
                    nickname: result[0].nickname,
                    appearance: result[0].appearance,
                    portrayed: result[0].portrayed,
                    category: result[0].category,
                    better_call_saul_appearance: result[0].better_call_saul_appearance}
                )
            }
        )
    }
    
  
    render() {
        if (this.state.show) {
            return (
                <span>
                <button className="character-button" onClick={this.handleClick}>{this.props.name}</button>            
                <div className="pop-up-window">
                    <div className="pop-up-content">
                        <button className="close-button" onClick={this.handleClick}>x</button>
                        <img src={this.state.img} alt="character loading.."></img>
                        <div className="character-info">
                            <div>Nombre: {this.state.name}</div>
                            <div>Ocupación: {this.state.occupation}</div>
                            <div>Estado: {this.state.status}</div>
                            <div>Apodo: {this.state.nickname}</div>
                            <div>Actor(a): {this.state.portrayed}</div>    
                            <div>Series: {this.state.category}</div>
                            <div>Temporadas en Breaking Bad: </div>
                            <div>{this.state.appearance.map((app,index)=>(<button className="appearances-button">{app}</button>))}</div>
                            <div>Temporadas Better Call Saul:</div>
                            <div>{this.state.better_call_saul_appearance.map((app,index)=>(<button className="appearances-button">{app}</button>))}</div>          
                    
                        </div>
                    </div>
                </div>
                </span>
            )
        }
        else{
            return (
                <button className="character-button" onClick={this.handleClick}>{this.props.name}</button>)            

        }
        
        
    }
}

export default character;
