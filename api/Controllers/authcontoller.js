import User from "../Models/userModel.js";
import bcryptjs from "bcryptjs"
export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400,"All fields are required"))
    }

    const hasshedPassword = bcryptjs.hashSync(password,10); 
    const newUser = new User({username,email,password:hasshedPassword});
    try {
        await newUser.save();
        res.json({message:"Signup successful"});
    } catch (error) {
       next(error);
    }
   
}