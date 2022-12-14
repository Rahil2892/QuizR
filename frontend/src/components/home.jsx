import React,{Component} from "react";
import { Link } from "react-router-dom";


class Home extends Component {
    nextBtn = () => {
        const { history } = this.props;
    
        history.push("/display");
      };
    constructor(props){
        super(props);
        this.state={
            userData:"",
        };
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
        });
    }
    render(){
        return(
        <div className="card">
        <h1>Welcome</h1>
        <h3>{this.state.userData.username}</h3>
        <p>{this.state.userData.email}</p>
        <Link to="/quiz">
        <button onClick={this.nextBtn} className="nextBtn">
          Attempt Quiz
        </button>
        </Link>
        </div>)

    }

   
};

export default Home;
