import React, { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function LoginForm({login,error}) {
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[sucess, setSucess] = useState(false)
    
    return ( 
     <Fragment>
      <Header/>
         <div class="full-screen-container">
    <div class="login-container">
      <h1 class="login-title">Task.io Welcome</h1>
      <form class="form">
        <div class="input-groupy success">
          <label for="email">Username</label>
          <input type="text" name="email" id="email" onChange={(e)=> setUsername(e.target.value)}/>
          <span class="msg">Valid username</span>
        </div>

        <div class="input-groupy error">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
          <span class="msg">Incorrect password</span>
        </div>

        <button type="submit" class="login-button">Login</button>
        <span>Dont have account <Link to="/regester">Sign up</Link></span>
      </form>
    </div>
  </div>
      
     </Fragment>
    );
}

export default LoginForm;