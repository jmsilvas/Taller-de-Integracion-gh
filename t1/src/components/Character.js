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
                    appearence: [],
                    portrayed: "",
                    category: "",
                    better_call_saul_appearence: []
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
                    appearence: result[0].appearence,
                    portrayed: result[0].portrayed,
                    category: result[0].category,
                    better_call_saul_appearence: result[0].better_call_saul_appearence}
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
                        <div className="character-info">
                            <div>
                            <img src={this.state.img} alt="character image"></img>
                            </div>
                            {this.state.name}
                           
                            
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
