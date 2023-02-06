import React from 'react';
import {Component} from "react";
import Card from './card';
import './scorepage.css';

class Scorepage extends Component{
  constructor(props){
      super(props);
      this.state={
          userData:"",
      };

      this.handleClick=this.handleClick.bind(this);

  }
  handleClick =() =>{
    const newScore = this.props.score;
    let newTopScore = this.props.topscore;

    if (newScore > newTopScore) {
      newTopScore = newScore;
    }
      fetch("http://localhost:5000/scoring",{
          method:"POST",
          crossDomain:true,
          headers:{
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            token:window.localStorage.getItem("token"),
            newTopScore,
          })
      }).then((res)=>res.json())
      .then((data)=>{
          console.log(data,"ScoreUpdated");
      if ( newScore > newTopScore) {
        this.props.setTopScore(newScore);
        this.setState({topscore : newScore});
      }
      })
      this.props.setShowScorePage(false);
      this.props.setShowStartingPage(true);
      this.props.setScore(0);
  };

  render(){
    return (
      <Card>
          <h1 className='headind'>You have completed the Quiz</h1>
          <h3 className='primary_text'>You have Scored:</h3>
          <h3 className='final_score'>{this.props.score}</h3>
          <button className='end_btn' onClick={this.handleClick}>Back</button>
      </Card>
  
    )
  }
  
}

export default Scorepage;