import React from 'react'
import style from './style.module.css'
import { Link } from "react-router-dom";
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements"
function NavBar() {
  return (
    
    <div className='body'>
        <nav className="navbar navbar-expand-lg background-color primary navbar-light bg-info">
            <div className='container-fluid'>
               <Bars/>
               <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                
                <NavLink to='/faq' activeStyle>
                    FAQ
                </NavLink>
                <NavLink to='/team' activeStyle>
                    Teams
                </NavLink>
                <NavLink to='/blogs' activeStyle>
                    Blogs
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
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