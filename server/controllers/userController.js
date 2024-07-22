import asyncHandler from "../asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "./generateToken.js";


const login= asyncHandler(async(req, res)=>{
    const {email, password}= req.body;
    const userExists=await User.findOne({email})

    if(userExists && (await userExists.matchPassword(password))){
        generateToken(res, userExists._id);

        res.status(200)
        .json({
            id: userExists._id, name: userExists.name, email: userExists.email} )
    }
    else{
        res.status(400)
        .json('Invalid credentials')
    }
})

const signup= asyncHandler(async(req, res)=>{

    const { name, email, password } = req.body;

    console.log({name, email, password})

   const existingUser= await User.findOne({email});

   if(existingUser){
    res.status(400)
    throw new Error("User already exists")
   }
   
   const newUser= await User.create({name, email, password});

   if(newUser){
    generateToken(res, newUser._id);

    res.status(200)
    .json({
       id: newUser._id, name: newUser.name, email: newUser.email
    })
   }
   else {
    res.status(400);
    throw new Error('Invalid data');
}

    
})

const signout= asyncHandler(async(req, res)=>{
    res.clearCookie('jwt',{
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'None',
        path: '/'
    })
    

    res.status(200).json('Logged out successfully');
})


export {login, signup, signout};