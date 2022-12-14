import React,{Component} from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e){
        e.preventDefault();
        const{ email,password}=this.state;
        console.log(email,password);
        fetch("http://localhost:5000/login-user",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");
            if(data.status==="ok"){
                alert("Login Succesful");
                window.localStorage.setItem("token",data.data);
                window.location.href="./home";
            }
        })
    }
    render(){
        return(<div className="card bg-black">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="" className="cardtext">Enter the email</label>
        <br />
        <input type="text" onChange={e=>this.setState({email:e.target.value})} required/>
        <br />
        <label htmlFor="" className="cardtext">Enter the password</label>
        <br />
        <input type="password" onChange={e=>this.setState({password:e.target.value})} required/>
        <br />
        <button type="submit" className="submitbtn">Submit</button>   
        <p>new user?</p>
        <Link to="/signup"> Sign Up</Link>
    </form></div>)
    }
   
   
};

export default Login;
