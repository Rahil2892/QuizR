import React,{Component} from "react";
import Card from "./card";
import './startingpage.css'
class Startingpage extends Component{
    constructor(props){
        super(props);
        this.state={
            userData:"",
        };

        this.handleClick=this.handleClick.bind(this);
        console.log(props.topscore);
    }
    handleClick(){
        this.props.setShowStartingPage(false);
        this.props.setShowQuestionPage(true);
    }
    
    componentDidMount(){
        fetch("http://localhost:5000/userData",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token"),
            })
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userData");
            this.setState({userData: data.data});
            console.log(data.data.topscore);
            this.props.setTopScore(data.data.topscore);
        });
    }
    
    

    render(){
        return(
            <Card>
                <h1 className="header">Welcome to the Quiz</h1>
                <h2 className="primary_text">{this.state.userData.username}</h2>
                <h5>Ready to begin?</h5>
                <button className="start_btn" onClick={this.handleClick}>Play</button>
                <p className="top_score">Top Score: <span>{this.props.topscore}</span></p>
    
            </Card>
            )

    }
    
}
export default Startingpage;