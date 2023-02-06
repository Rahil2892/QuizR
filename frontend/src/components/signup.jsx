import React,{Component} from "react";
import './sign.css'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "",
            email: "",
            password: "",
            topscore:0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const{ username,email,password,topscore}=this.state;
        console.log(username,email,password,topscore);
        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                username,
                email,
                password,
                topscore
            })
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister")
            window.location.href="./";

        })
    };
    render(){
        return(
            <div className="cardCont" >
        <div className="card">
        <h1>Signup Form</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="" className="cardtext" >Enter the Username</label>
        <br />
        <input type="text" onChange={e=>this.setState({username:e.target.value})} required/>
        <br />
        <label htmlFor="" className="cardtext" >Enter the email</label>
        <br />
        <input type="text" onChange={e=>this.setState({email:e.target.value})} required/>
        <br />
        <label htmlFor="" className="cardtext" >Enter the password</label>
        <br />
        <input type="password" onChange={e=>this.setState({password:e.target.value})} required/>
        <br />
        <button type="submit" className="submitbtn">Submit</button>
        
    </form>
    </div>
    </div>
    )

    }

   
};

export default Signup;
