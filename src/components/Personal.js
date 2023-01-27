import React from 'react'
import "./styles/personal.css"
import { useState } from 'react'



function Personal() {
    const[fullName,setFullName]=useState(null)
    const[email,setEmail]=useState(null)
    const[contact,setContact]=useState(null)
    const[profilePicture,setProfilePicture]=useState(null)
    const[password,setPassword]=useState(null)
    const[confirmPassword,setConfirmPassword]=useState(null)
  return (
    <div>
        <div class="container">
            <p>Personal Information</p>
            <form action="">
                <label for="fname">Full name:</label>
                <input type="text" id="fname" name="fname"/><br/><br/>
                <label for="email">Email:</label>
                <input type="email" name="email"/><br/><br/>
                <label for="phone number">Phone Number:</label>
                <input type="text" id="phone number"/><br/><br/>
                <label for="img">Profile Picture</label>
                <input type="file" id="profilePicture" name="filename"/>
                <div class="container">
                    <form id="form">
                    <h2>TWO-FACTOR AUTHENTICATION</h2>
                    <div class="form__group form__pincode">
                        <label>Enter 6-digit code from your authenticator application</label>
                        <input type="tel" name="pincode-1" maxlength="1" pattern="[\d]*" tabindex="1" placeholder="·" autocomplete="off"/>
                        <input type="tel" name="pincode-2" maxlength="1" pattern="[\d]*" tabindex="2" placeholder="·" autocomplete="off"/>
                        <input type="tel" name="pincode-3" maxlength="1" pattern="[\d]*" tabindex="3" placeholder="·" autocomplete="off"/>
                        <input type="tel" name="pincode-4" maxlength="1" pattern="[\d]*" tabindex="4" placeholder="·" autocomplete="off"/>
                        <input type="tel" name="pincode-5" maxlength="1" pattern="[\d]*" tabindex="5" placeholder="·" autocomplete="off"/>
                        <input type="tel" name="pincode-6" maxlength="1" pattern="[\d]*" tabindex="6" placeholder="·" autocomplete="off"/>
                    </div>
                    <div class="form__buttons">
                        <a href="#" class="button button--primary" disabled>Continue</a>
                    </div>
                    </form>
                </div>
                <label for="password">Change Password:</label>
                <input type="text" id="myPassword" name="password"/><br/><br/>
                <label for="password">Old password:</label>
                <input type="text" id="oldPassword" name="password"/>
                <input type="submit"/>
            </form>      


        </div>
    </div>
  )
}

export default Personal