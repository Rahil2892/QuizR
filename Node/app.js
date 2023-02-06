const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcrypt=require("bcryptjs");

const jwt=require("jsonwebtoken");

const JWT_SECRET="hewbcerfbecbyuwycwy181928r28$#123726EDVW^^!RV@R^!h32db3478734"


const mongoUrl  = "mongodb+srv://Rahil433:Rahil433@cluster0.qk01s4e.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl  ,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("connected to database ");
})
.catch((e)=>console.log(e));

require("./userDetails");

const User= mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{
    const {username,email,password,topscore}=req.body;

    const ePassword= await bcrypt.hash(password,10);
    try {
        const oldUser= await User.findOne({email});
        if(oldUser){
         return res.send({error:"User Exists"});
        }
        await User.create({
            username,
            email,
            password:ePassword,
            topscore,
        });
        res.send({status:"ok"});
    } catch (error) {
        res.send({status:"error"});
        
    }
})

app.post("/login-user",async(req,res)=>{
    const {email,password}=req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.json({error:"User not found"});
    }
    if(await bcrypt.compare(password,user.password)){
        const token=jwt.sign({email:user.email},JWT_SECRET);
        if (res.status(201)){
            return res.json({status:"ok",data:token});
        }else{
            return res.json({error:"error"});
    
        }
    }

    
    res.json({status:"error",error:"Invalid Password"});
});

app.post("/userData",async(req,res)=>{
    const {token}=req.body;
    try {
        const user=jwt.verify(token,JWT_SECRET);
        console.log(user);   

        const useremail= user.email;
        User.findOne({email:useremail})
         .then((data)=>{
            res.send({status:"ok",data:data});
         })
         .catch((error)=>{
            res.send({status:"error",data:error});
         })
        
    } catch (error) {
        
    }
})

app.post("/scoring",async(req,res)=>{
    const {token,newTopScore}=req.body;
    const user=jwt.verify(token,JWT_SECRET);
    console.log(user,"scoring");
    const score = newTopScore;
    console.log(score);   

    const useremail= user.email;


    try {
        // const oldUser= await User.findOne({email:useremail});
       
            User.updateOne({email:useremail},{topscore:newTopScore}, function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated data : ", docs);
                }
            });
        
        res.send({status:"ok"});
    } catch (error) {
        res.send({status:"error"});
        
    }
})


app.listen(5000,()=>{
    console.log("server started");
})