import React from "react";
import Header from "../header/header";
import { useState } from "react"
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signin = ()=>{
    const navigate = useNavigate();
    // const [login,setLogin] = useState({email:"",password:""});
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const postLogin = ()=>{
        console.log(email,password)
        fetch("/signin",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then((data)=>{
            // console.log(data.token);
            // debugger
            localStorage.setItem("token",data.token)
            console.log(localStorage.getItem("token"))
        }).catch(err=>console.log(err))
           .finally()
           navigate("/home");
    }

    return(
        <>
            <Header/>
            <form>
                <div>
                    <label htmlFor={"userEmail"}>Email</label>
                    <input type={"email"} id={"userEmail"} placeholder={"Enter email"} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor={"userPassword"}>Password</label>
                    <input type={"password"} id={"userPassword"} onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div>
                    <button onClick={postLogin}>signin</button>
                </div>
                
            </form>
        </>
    )
}
export default Signin;