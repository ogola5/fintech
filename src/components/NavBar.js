import React from 'react'
//import "./styles/main.scss"
import { Link } from "react-router-dom";
import "./styles/navbar.css"
import {Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements"
function NavBar() {
  return (
    
    <div className='body'>
        <nav className="navbar navbar-expand-lg background-color primary navbar-light bg-info">
            <div className='container'>
               <Bars/>
               <NavMenu>
                <NavBtnLink  to='/' activeStyle>
                    Home
                </NavBtnLink><br/><br/>
                
                <NavBtnLink to='/About' activeStyle>
                    About us
                </NavBtnLink>
                <NavBtnLink to='/personal' activeStyle>
                    Personal
                </NavBtnLink>
                <NavBtnLink to='/Business' activeStyle>
                    Business
                </NavBtnLink>
                <NavBtnLink to='/SignUp' activeStyle>
                    Sign Up
                </NavBtnLink><br/><br/>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/* <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn> */}
               
            </div>
        </nav>
        
    </div>


  )
}

export default NavBar