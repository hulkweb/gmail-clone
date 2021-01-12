import { Avatar, IconButton} from '@material-ui/core'
import { Apps, BarChartSharp, HelpOutline, Menu, Search, Settings } from '@material-ui/icons'
import React from 'react'
import './Header.css';
import gm from './gmail.png';
import { BrowserRouter, Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { actionTypes } from './reducer';
function Header() {
   
    const [{user,isOpen},dispatch]=useStateValue();
    const signout= ()=>{
        auth.signOut().then((res)=>{
         dispatch({type:actionTypes.SET_USER,
             user:null});
        })
    }
    return (
        <div className="Header">
            <div className="header_left">

                 <Menu />
                 <BrowserRouter>
                 <Link to="/" style={{textDecoration:"none"}}>
                 <div className="logo">
                  <img src={gm}/>
                  <span>Gmail</span>
                </div>
                 </Link>
                 </BrowserRouter>
                 
               

            </div>
            <div className="header_center">
                  <form>
                    <Search/>
                   <input placeholder="Search" />
                 </form>               
            </div>
            <div className="header_right">
                <IconButton>
                  <HelpOutline/>
                </IconButton>
                <IconButton>
                  <span style={{background:"orange",borderRadius:"50%",padding:"8px 18px"}}>{user.email[0]}</span>
                </IconButton>
                 <IconButton>
                    <Settings/>
                </IconButton>
                <IconButton>
                    
                    <Apps/>
                </IconButton>
                <IconButton onClick={signout}>
                    <Avatar src=""/>
                </IconButton>
                

            </div>
            
        </div>
    )
}

export default Header
