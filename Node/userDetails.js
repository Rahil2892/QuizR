const mongoose=require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        require:true
    },
    password:String,
    topscore:{ 
        type: String, 
        default: 0 
    }
    
},
{
    collection:"UserInfo",
}
);

mongoose.model("UserInfo",UserDetailsSchema);