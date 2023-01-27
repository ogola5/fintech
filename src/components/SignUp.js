import React,{useState,setState} from 'react'
import  './styles/signup.css'


function SignUp() {
  const[fullName,setFullName] =useState(null)
  const[email,setEmail] =useState(null)
  const[contact,setContact] =useState(null)
  const[password,setPassword] =useState(null)

  const handleInputChange =(e) =>{
    const{id,value} = e.target
    if(id ==="fullName"){
      setFullName(value)
    }
    if(id==="email"){
      setEmail(value)
    }
    if(id==="contact"){
      setContact(value)
    }
    if(id==="password"){
      setPassword(value)
    }
  }
  const handleSubmit =(e) =>{
    console.log(fullName,email,contact,password)
  }
  
  return (
    <div className='form'>
      <div className='form-body'>
        <form>
          <div className="mb-3">
          <label for="fullname" className="form-label">fullName</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <label for="contact" className="form-label">contact</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp