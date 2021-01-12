import { Button } from '@material-ui/core'
import { AccessTime, Add, ExpandMore, Inbox, Keyboard, LabelImportant, NearMe, Note, Star, Videocam } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { sendMailOpenFun } from './app/counterSlice';
import { actionTypes } from './reducer';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useStateValue } from './StateProvider';
function Sidebar() {
   
    const [{user,isOpen},dispatch]=useStateValue();
    return (
        <div className="sidebar">
            <div className="sidebar_top">
               <Button startIcon={<Add style={{fontSize:"30px"}}/>} onClick={
                   ()=>{dispatch({type:actionTypes.OPEN})}
               } >Compose</Button>
            </div>
            <div className="sidebar_middle" >
                <BrowserRouter>
          
             <Link to="/" style={{textDecoration:'none'}}>  <SidebarOption Icon={Inbox} title="Inbox" number={54} /></Link>
               <SidebarOption Icon={Star} title="Starred" number={0} />
               <SidebarOption Icon={AccessTime} title="Snoozed" number={0} />
              
              <Link to="/sent" style={{textDecoration:'none'}}>
              <SidebarOption Icon={NearMe} title="Sent" number={0} />
              </Link> 
               <SidebarOption Icon={Note} title="Drafts" number={0} />
               </BrowserRouter>
               <SidebarOption Icon={ExpandMore} title="More"  />
            </div> 
            <div className="sidebar_bottom">
             <h3>Meet</h3>
             <SidebarOption Icon={Videocam} title="New meeting" />
             <SidebarOption Icon={Keyboard} title="Join a meeting" />
            </div>
        </div>
    )
}

export default Sidebar 
