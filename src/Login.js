import React ,{useEffect,useState}from  'react'
import { auth, Provider } from './firebase';
import './Login.css';
import gm from './gmail.png'

import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { useHistory } from 'react-router-dom';
import { green } from '@material-ui/core/colors';
function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history =useHistory();

    const login=()=>{auth.signInWithEmailAndPassword(email,password).then((user)=>{
        if(user){
            // history.push("/")
    
         }
    }).catch((Err)=>{
        alert(Err.message);
    })
    };
  const create= ()=>{
 auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
     console.log(auth)
     if(auth){
        // history.push("/")

     }
 }).catch((err)=>{
     alert(err.message);
 })
  }
  
    
    return (
        <div className="Login">
             <img src={gm}/>
            <div className="container">
         
                 <h1 style={{margin:0,textAlign:"center"}}>Login</h1>
                 <input type="text" placeholder="Enter your Email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                 <input type="password" placeholder="Password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                 <button className="submit" onClick={login}>Log In</button>
                  <p style={{color:"green",textAlign:"center",fontSize:"large",margin:"0px"}}>or</p>
                 <button onClick={create}>Create New Account</button>
            </div>
           

        </div>
    )
}

export default Login
