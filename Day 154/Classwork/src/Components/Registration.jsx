import React from "react";
import { useState } from "react";
import Students from "./Students";

export default function Registration()
{
    const [registered,setRegistered] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        const dict = {
            username: e.target.username.value,
            email: e.target.mail.value,
            password:e.target.password.value
        }
        console.log(JSON.parse(localStorage.getItem(JSON.stringify(e.target.mail.value))))
        if(JSON.parse(localStorage.getItem(JSON.stringify(e.target.mail.value))))
        {
            alert("you already have an account you can go to login page and log in")
            
        }
        else{
            localStorage.setItem(JSON.stringify(e.target.mail.value),JSON.stringify(dict))
            setRegistered(true);
        }
        
    }
    return (
        <>
            {registered?<form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" required/><br/><br/>
                <input type="email" name="mail" placeholder="email" required/><br/><br/>
                <input type="password" name="password" placeholder="password" required/><br/><br/>
                <button>submit</button>
            </form>:null}
            {registered ? <Students/>:<p></p>}
        </>
    )
}