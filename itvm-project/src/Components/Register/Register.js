import React from 'react'
import { useState } from 'react'
import { addUser } from '../../service/api'

const Register = () => {

 
  const [user,setuser] =useState({
    email:"",
    pwd:""
  });

  const onvaluechange=(e)=>{
      console.log(e.target.id,e.target.value)
      setuser({...user,[e.target.id] : e.target.value});
  }
  const adduserdetails= async ()=>{
    await addUser(user);
  }
  return (
    <div>
      <form >
        <h1 className='text-center'>Register Here</h1>
  <div className="form-group">
    <label>Email address:</label>
    <input type="email" value={user.email} className="form-control" id="email" onChange={(e)=>onvaluechange(e)}/>
  </div>
  <div className="form-group">
    <label >Password:</label>
    <input type="password" value={user.pwd} className="form-control" id="pwd" onChange={(e)=>onvaluechange(e)}/>
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" className="btn btn-default" onClick={adduserdetails}>Submit</button>
</form>
    </div>
  )
}

export default Register;
