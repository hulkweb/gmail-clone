import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, LocalOffer, MoreVert, People, Redo } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './EmailList.css'
import EmailRow from './EmailRow'
import { db } from './firebase'
import { useStateValue } from './StateProvider'
function EmailList() {
const [mails, setmails] = useState([]);
const history=useHistory();

const [{user,isOpen},dispatch]=useStateValue();
  useEffect(() => {
 
   if(history.location.pathname==='/sent'){
    
    db.collection("emails").onSnapshot((snapshot)=>(
      setmails(
      snapshot.docs
      .filter((doc)=>doc.data().from===user.email)
      .map((doc)=>(  {  id:doc.id,
        title:doc.data().to,
        description:doc.data().message,
        subject:doc.data().subject,
        time:new Date(doc.data().timestamp.seconds*1000).toUTCString()} )))
      ))
   }
   else{
    db.collection("emails").onSnapshot((snapshot)=>(
      setmails(
      snapshot.docs
      .filter((doc)=>doc.data().to===user.email)
      .map((doc)=>(  {  
        id:doc.id,
        title:doc.data().from,
        description:doc.data().message,
        subject:doc.data().subject,
        time:new Date(doc.data().timestamp.seconds*1000).toUTCString()} )))
      ))
   }
    
      console.log(mails)
  }, [])
  console.log(mails)
    return (
        <div className="EmailList">
            <div className="EmailListSetting">
               <div className="EmailListSettingLeft">
                  <Checkbox/>
                  <IconButton>
                      <ArrowDropDown/>
                  </IconButton>
                  <IconButton>
                      <Redo/>
                  </IconButton>
                  <IconButton>
                      <MoreVert/>
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
            <div className="EmailSection">
              <div className="section">
                <Inbox/><span>Primary</span>
              </div>
              <div className="section">
                <People/><span>Social</span>
              </div>
              <div className="section">
                <LocalOffer/><span>Promotions</span>
              </div>
            </div>
            <div className="emailRows">
              { mails.map((doc)=>(
        <EmailRow 
        id={doc.id}
        title={doc.title}
        description={doc.description}
        subject={doc.subject}
        time={doc.time}
        />
     
              ))}
              
            </div>
        </div>
    )
}

export default EmailList
