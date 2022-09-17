import React, { Fragment, useState } from 'react';
import Header from './Header';
import { Link, Route, Navigatora } from 'react-router-dom';
import LoginForm from './LoginForm';
import axios from 'axios';
function Regester() {
  const[email, setEmail] = useState("");
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[matchPass, setMatchPass] = useState("")
  const[sucess, setSucess] = useState(false)


  const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(email,username, password,matchPass)
   
    const response = axios.post("http://localhost:9090/amo/api/register",{
      username:username,
      email:email,
      password:password
    })
    if(response.then(res=>res.status)==200){

      setSucess(true);
    }else{
      response.catch((err)=>{

        console.log(err)
      })
    }

  }

    return (
      <>
      {
        sucess ? (<section>
         <p>username: {username}</p>
         <p>email: {email}</p>
         
        </section>
        ) : (
          <Fragment>
          <Header/>
<div class="full-screen-container">
 <div class="login-container">
   <h1 class="login-title">Task.io Welcome</h1>
   <form class="form">
   <div class="input-groupy success">
       <label for="email">Email</label>
       <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
       <span class="msg">Valid Email</span>
     </div>
     <div class="input-groupy success">
       <label for="email">Username</label>
       <input type="text" name="email" id="email" onChange={(e)=>setUsername(e.target.value)}/>
       <span class="msg">Valid username</span>
     </div>

     <div class="input-groupy error">
       <label for="password">Password</label>
       <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
       <span class="msg">Incorrect password</span>
     </div>
     <div class="input-groupy error">
       <label for="password">Confirm Password</label>
       <input type="password" name="password" id="password" onChange={(e)=> setMatchPass(e.target.value)}/>
       <span class="msg">Incorrect password</span>
     </div>

     <button type="submit" onClick={handlesubmit} class="login-button">Regester</button>
     <span>Already have an account <Link to = "/login">Sign In</Link></span>
   </form>
 </div>
</div>
     </Fragment>

        )
      }
        </>
      );
}

export default Regester;