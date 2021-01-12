import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportant, Star } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

function EmailRow({id,title,description,subject,time}) {
    return (
        <Link to={`/${id}`} style={{textDecoration:'none',color:"black"}}>
        <div className="SingleEmailRow">
            <div className="emailRowOptions">
               <Checkbox/>
               <IconButton>
                 <Star/>
               </IconButton>
               
               
            </div>
        
            <div className="description">
            <span className="title">   {title}</span>
                <div className="msg" style={{marginTop:"10px"}}>
                <span>{subject}</span>- 
                 <span>{description}</span>
   
                </div>
                <span className="time">{time}</span>
             
            </div>
        </div>
        </Link>
    )
}

export default EmailRow
