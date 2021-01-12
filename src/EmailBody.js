import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Checkbox, IconButton } from '@material-ui/core';
import './EmailBody.css'
import { AlarmOn, ArrowDropDown, ChevronLeft, ChevronRight, Delete, Email, Inbox, LocalOffer, MoreVert, MoreVertSharp, People, Redo, Reply, Report, SaveAlt, Star, WatchLater } from '@material-ui/icons'
import { useParams } from 'react-router-dom';
import { db } from './firebase';
function EmailBody() {
    const {id}=useParams();
    const [mail, setmail] = useState([]);
    useEffect(() => {
        if(id){
           
     console.log(id)
    
            db.collection("emails").doc(id).onSnapshot((snapshot)=>
            
                setmail(
                [{ 
                  title:snapshot.data().from,
                  description:snapshot.data().message,
                  subject:snapshot.data().subject,
                  userPic:snapshot.data().userPic,
                  from:snapshot.data().from,
                  time:new Date(snapshot.data().timestamp.seconds*1000).toUTCString()}])
                )
                console.log(mail);
        }
        
    }, [id])
    
    return (
        <div className="EmailBody" >
            <div className="EmailListSetting">
               <div className="EmailListSettingLeft">
                  
                  <IconButton>
                      <SaveAlt/>
                  </IconButton>
                  <IconButton>
                      <Report/>
                  </IconButton>
                  <IconButton>
                      <Delete/>
                  </IconButton>

                  <IconButton>
                      <Email/>
                  </IconButton>
                  <IconButton>
                      <WatchLater/>
                  </IconButton>
                  <IconButton>
                      <AlarmOn/>
                  </IconButton>
               </div>
               <div className="EmailListSettingRight">
                  <IconButton>
                      <ChevronLeft/>
                  </IconButton>
                  <IconButton>
                      <ChevronRight/>
                  </IconButton>
                  
               </div>
            </div>
            <div className="email_subject">
                 <h3>{mail[0]?.subject}</h3>
                 <div className="email_subject_icons">
                 <IconButton>
                      <Redo/>
                  </IconButton>
                  <IconButton>
                      <MoreVert/>
                  </IconButton>
                 </div>
            </div> 
            <div className="email_body">
                <div className="email_body_header">
                   <div className="sender_info">
                        <Avatar src={mail[0]?.userPic}/>
                        <h3>{mail[0]?.title}</h3>
                   </div>
                   <div className="header_right">
                        <span>{mail[0]?.time}</span>
                        <Star/>
                        <Reply/>
                        <MoreVertSharp/>
                        
                   </div>
                </div>
                <div className="email_text">
                     {mail[0]?.description}
                </div>
            </div>
        </div>
    )
}

export default EmailBody
