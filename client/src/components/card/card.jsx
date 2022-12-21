// import {useState, useEffect} from "react";
// const Card = (props)=>{
//     // debugger
//     return(
//         <>



//         //

        import React from "react";
import { useState,useEffect } from "react";
import "./card.css"



const Card = (props) => {
   
  

       
    
    return (
        <>
            <div className="card">
                <div className="card-head">
                    <div className="intro">
                        <span className="name"> {props.post.postedBy}</span>
                        <br />
                        <span className="place"> {props.post.location}</span>

                    </div>
                    <div className="ellipse">

                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div className="img">
                    <img src={props.post.photo} alt="img" />
                </div>
                <div className="foot">
                    <span className="icons">
                       
                        {/* <i className="fa-solid fa-paper-plane" style={{marginTop:"0px"}}></i> */}
                       
                    </span>
                    {/* <span className="date">
                        // {post.date.substring(0, 10)} 
                    </span>  */}
                </div>
                {/* <p className="likes">{totalLikes} likes</p>
                <p className="likes">{allComments.length} Comments</p> */}
                <div className="title">
                    {props.post.title}
                </div>

                <div className="description">
                    {props.post.body}
                </div>
                {/* <div className="comments"> */}
                    {/* <form onSubmit={(e)=>{
                        e.preventDefault()
                        commentfunc(e.target[0].value,post._id)
                        e.target[0].value=""
                    }} >

                    {showcomment?<input className="comments" type="text" placeholder="add a comment here and hit enter" />:""}
                    </form>
                    {(showcomment && allComments.length!==0)?allComments.map(record=>{
                        return(
                            <>
                            <h6 style={{textAlign:"start", marginLeft:"15px"}}>
                            <span style={{
                                fontWeight:"bold",
                                fontSize:"15px"
                            }}>{record.postedBy}: </span>
                            <span style={{
                                fontWeight:"lighter",
                                fontSize:"15px"
                            }}>{record.text}</span>
                            </h6>
                            </>
                        )
                    }):""}
                </div> */}

            </div>

        </>
    )
}

export default Card


        






              {/* <section className="card"> */}
        {/* <section className="card_header"> */}
            {/* <div>
            <div>{props.post.body}</div>
            <img src={props.post.photo}></img>
            <div>{props.post.postedBy.name}</div>
            <div>{props.post.title}</div>
            </div> */}
            {/* <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </section>
        <section className="post_image">

        <img src={require(""+props.post.PostImage)} alt="image" />
        </section>
        <section className="post_likes">
            <span className="heart_symbol"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
            <span><i className="fa fa-paper-plane-o" aria-hidden="true"></i></span>
        
        
            <span className="post_date">{props.post.date}</span>
s
        </section>
        <section className="post_likes">{props.post.likes} likes</section>
        <section className="post_description">{props.post.description}
        </section>
        </section>  */}
        // </>
//     )
// }

// export default Card;