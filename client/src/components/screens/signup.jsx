import React,{useState, useEffect} from "react";
import M from "materialize-css"
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import Header from "../header/header";
// import {useHistory} from "react";
import { json } from "react-router-dom";
const Signup = ()=>{
    //

        // const history = useHistory();
        const navigate = useNavigate();
        const [name,setName] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
    
    const PostData=()=>{
    
        console.log(name,email,password)
        // debugger
        // useEffect(()=>{
        fetch("/signup",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    
                    name,
                    email,
                    password
                })})
        .then((res)=>{res.json()})//http://localhost:3000/
        .then((data)=>{
            console.log(data.message);
            if(data.error){
                // console.log(data.error);
                M.toast({html:data.error})
            }
            // else{
            //     M.toast({html:data.message})
                 navigate("/signin")
            // }
            
            })
        .catch((err)=>{console.log(err)})
        .finally();
        // },[]
        // )
    }
        return(
            <>
                <Header/>
                <form>
                    <div>
                        {/* <label htmlFor={"userEmail"}>Email</label> */}
                        <input type={"text"} id={"name"} placeholder={"Enter name"} onChange={(e)=>{setName(e.target.value)}}></input>
                    </div>
                    <div>
                        {/* <label htmlFor={"userEmail"}>Email</label> */}
                        <input type={"email"} id={"userEmail"} placeholder={"Enter email"} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <div>
                        {/* <label htmlFor={"userPassword"}>Password</label> */}
                        <input type={"password"} id={"userPassword"} onChange={(e)=>{setPassword(e.target.value)}}></input>
                    </div>
                    <div>
                        {/* <input type={"submit"} id={"Submit"} value={"Submit"} onClick={postData}></input> */}
                        <button onClick={()=>{PostData()}}>signup</button> 
                    </div>
                <h3>
                    <Link to={"/signin"}>Have an account? click here to signin</Link>
                </h3>
                    
                </form>
            </>
        )
        
    }
export default Signup;