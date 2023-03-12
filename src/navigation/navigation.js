import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import "./navigation.css"
function NavBar(){
    let [navIcon,changeNav] = useState({
        icon:faBars
      })
    
      let returnClass = ({isActive}) =>{
        return(
          isActive ? 'nav-link':'inactive'
        )
      } 
    
      let handleNav = () =>{
        let navigationBar=document.querySelector('#navIcon')
        navigationBar.classList.toggle("toggle")
        if(navIcon.icon===faBars){
          changeNav({
            icon:faClose
          })
        }else{
          changeNav({
            icon:faBars
          })
        }
      }

    return(
        <div className="main-wrapper">
            <div className="navigation-bar clearfix">
                <img className="logo" src="/images/shared/logo.svg" alt="logo image"></img>    
                <FontAwesomeIcon className="icon" icon={navIcon.icon} onClick={handleNav}/>
                <nav id="navIcon" className="clearfix">
                    <NavLink className={returnClass} to="/">00 Home</NavLink>
                    <NavLink className={returnClass} to="/destination">01 Destination</NavLink>
                    <NavLink className={returnClass} to="/crew">02 Crew</NavLink>
                    <NavLink className={returnClass} to="/technology">03 Technology</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default NavBar