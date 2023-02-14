
import User from '../schema/user-schema.js';

export const adduser= async (request,response)=>{
   
    const user=request.body;

 const newuser=new User(user);

 try{
  await newuser.save();
  response.status(201).json(newuser);
 }
 catch(error)
 {
 response.status(409).json({message : error.message});
 }
}