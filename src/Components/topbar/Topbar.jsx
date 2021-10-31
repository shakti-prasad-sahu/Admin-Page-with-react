import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
        <div className="topbarWrapper">
              <div className="topLeft">
                   <span className="logo">lamaadmin</span>
              </div>
              <div className="topRight">
                <div className="topbarIconCointainer">
                   <NotificationsNone/> 
                   <span className="topIconBag">2</span> 
                </div>
                <div className="topbarIconCointainer">
                   <Language/> 
                   <span className="topIconBag">2</span> 
                </div>
                <div className="topbarIconCointainer">
                   <Settings/>  
                </div>
                <img src="https://images.pexels.com/photos/3596555/pexels-photo-3596555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="" className="topAvatar"/>
              </div>
        </div>
        </div>
    )
}

