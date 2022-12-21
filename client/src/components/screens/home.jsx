import React from "react";
import {useState, useEffect} from "react";
import Card from "../card/card";
import Header from "../header/header";
const Home = () =>{
        const [state,setState] = useState([]);
        useEffect(()=>{
        fetch("/viewPosts")
        .then((res)=>{return res.json()})//http://localhost:5000/viewPosts
        .then((res)=>{
            setState(res.posts);console.log(res)})
        .catch((err)=>{console.log(err)})
        .finally();
        },[])
        return(
            <>  <Header/>
                {state.map((ele,i)=>{
                    return(
                        <>  
                            
                            <Card post={ele} key={i}/>
                        </>
                    )
                })}
            </>
        )
    }
export default Home;