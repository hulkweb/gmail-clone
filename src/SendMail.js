import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React, { useState } from 'react';
import { actionTypes } from './reducer';
import './SendMail.css';
import {useForm} from 'react-redux';
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
function SendMail() {
    const history=useHistory();
    const [{user,isOpen},dispatch]=useStateValue();
    const [TO, setTO] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const SendMail=(e)=>{
        e.preventDefault();
        db.collection("emails").add({to:TO,
            subject:Subject,
            message:Message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            from:user.email,
            userPic:user.photoURL});
            
history.replace('/sent');
    }
    return (
        <div className="SendMail">
           <div className="SendMail_header">
              <h3>New Message</h3>
              <Close className="header_close"  onClick={()=>{dispatch({type:actionTypes.CLOSE})}} />
           </div>
           <form>
               <input type="text" placeholder="To" name="to" value={TO} onChange={(e)=>{setTO(e.target.value)}} />
               <input type="text" placeholder="Subject" value={Subject} name="subject" onChange={(e)=>{setSubject(e.target.value)}} />
                <textarea rows="12" cols="40"  value={Message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
               <div className="SendMail_footer" >
                   <Button type="submit" onClick={SendMail}>Send</Button>
               </div>
           </form>
        </div>
    )
}

export default SendMail
