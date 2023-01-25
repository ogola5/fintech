import React from 'react'
//import "./styles/main.scss"
import { Link } from "react-router-dom";
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements"
function NavBar() {
  return (
    
    <div className='body'>
        <nav className="navbar navbar-expand-lg background-color primary navbar-light bg-info">
            <div className='container-fluid'>
               <Bars/>
               <NavMenu>
                <NavBtnLink  to='/SignUp' activeStyle>
                    Sign Up
                </NavBtnLink><br/><br/>
                
                <NavLink to='/About' activeStyle>
                    About us
                </NavLink>
                <NavLink to='/team' activeStyle>
                    Teams
                </NavLink>
                <NavLink to='/blogs' activeStyle>
                    Blogs
                </NavLink>
                <NavLink to='/Home' activeStyle>
                    Home
                </NavLink><br/><br/>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </div>
        </nav>
    </div>


  )
}

export default NavBar