import "./sidebar.css"
import {
 Message,Feedback,Email,PieChart,AirportShuttle,MonetizationOn,AccountBox,Home,TrendingUp,Timeline,LineStyle} from "@material-ui/icons"
import { Link } from "react-router-dom"
 
export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Dashboard</h3>
                   <ul className="sidebarList">
                   <Link to="/" className="link">
                      <li className="sidebarListItem active">
                         <Home className="sidebarIcon"/>
                          Home
                      </li>
                      </Link>
                      <li className="sidebarListItem">
                         <Timeline className="sidebarIcon"/>
                          Analytics
                      </li>
                      <li className="sidebarListItem">
                         <TrendingUp className="sidebarIcon"/>
                          Sales
                      </li>
                   </ul>
                </div>
                <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">
                   <Link to="/users" className="link">
                      <li className="sidebarListItem">
                         <AccountBox className="sidebarIcon"/>
                          Users
                      </li>
                      </Link>
                      <Link to="/products" className="link">
                      <li className="sidebarListItem">
                         <AirportShuttle className="sidebarIcon"/>
                          Products
                      </li>
                      </Link>
                      <li className="sidebarListItem">
                         <MonetizationOn className="sidebarIcon"/>
                          transaction
                      </li>
                      <li className="sidebarListItem">
                         <PieChart className="sidebarIcon"/>
                          Reports
                      </li>
                   </ul>
                </div>
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                   <li className="sidebarListItem">
                      <Email className="sidebarIcon"/>
                       Mail
                   </li>
                   <li className="sidebarListItem">
                      <Feedback className="sidebarIcon"/>
                       Feedbacks
                   </li>
                   <li className="sidebarListItem">
                      <Message className="sidebarIcon"/>
                       Messages
                   </li>
                </ul>
             </div>
             <div className="sidebarMenu">
             <h3 className="sidebarTitle">Staff</h3>
             <ul className="sidebarList">
                <li className="sidebarListItem">
                   <LineStyle className="sidebarIcon"/>
                    Manage
                </li>
                <li className="sidebarListItem">
                   <Timeline className="sidebarIcon"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                   <Feedback className="sidebarIcon"/>
                    Reports
                </li>
             </ul>
          </div>
            </div>
        </div>
    )
}
