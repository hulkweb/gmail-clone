import React from 'react'

function SidebarOption({Icon,title,number}) {
    return (
        <div className="sidebar_option">
            <Icon/>
             <div className="message" >
               <span className="title">{title}</span>
               <span className="number">{number}</span>
             </div>

        </div>
    )
}

export default SidebarOption
