import React,{Component} from "react";
import profile from './images/profile.png'

class Form extends Component{
    signOut = () => {
        localStorage.clear();
        window.location.href="./";
      };
    constructor(props){
        super(props);
        this.state={
            userData:"",
            
        };
        this.signOut=this.signOut.bind(this);

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
            window.localStorage.setItem("loggedIn",true);
        });
    }
    render(){
        return(
            <div className="items-center justify-end  space-y-12 bg-white  h-screen  w-full pt-32 px-12 text-center ">
                <div className='basis-1/2' >
                    <img src={profile} alt='profile' className='rounded-[4rem]' />
                </div>
                {this.state.userData && <div className='basis-1/2' >
                    <h2>Welcome</h2>
                    <h4>{this.state.userData.username}</h4>
                    <p>Your top score is: </p>
                    <p>{this.state.userData.topscore}</p>
                </div>}
                <button className="nextBtn" onClick={this.signOut}> Sign Out </button>
            </div>
        )
    }
}

export default Form;