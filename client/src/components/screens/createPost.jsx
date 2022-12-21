import React from 'react'
import { useEffect,useState } from 'react'
import "./createPost.css"
import { useNavigate } from 'react-router-dom'
// import M from "materialize-css"
const CreatePost = () => {
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")
  const [location,setLocation]=useState("")
  const [image,setImage]=useState("")
  const [url,setUrl]=useState("")
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(url){
      fetch("/createPost",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("token")
        },
        body: JSON.stringify({
            title,body,
            photo:url
        })
    }).then(res=>res.json())
    .then(data=>{
       if(data.message){
        // M.toast({html: data.error,classes:"toast-error"})
        console.log(data.message)
        // navigate("/signin")
       }
       else{
        // M.toast({html:data.status,classes:"toast-success"})
        navigate("/home");
       }
    })
    }
  },[url])
  const postDetails = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","instaclonepic")
    data.append("cloud_name","dcfqb1dtn")
    fetch("https://api.cloudinary.com/v1_1/dcfqb1dtn/image/upload",{
      method:"POST",
      body:data,
    }).then(res=>res.json())
    .then( data=>{setUrl(data.secure_url);console.log(url)})
    .catch(err=>console.log(err))
  }
  return (
    <>
        <div className='createpost'>
          <span>Upload Image:</span>
        <input type="file" onChange={(e)=>{console.log(e.target.files);setImage(e.target.files[0])}} accept="image/png, image/jpeg, image/jpg"  /><br/>
        <input type="text"  value={location} onChange={(e)=>{setLocation(e.target.value)}} placeholder="Location"/><br/>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} size={50} placeholder="Title"/><br/>
        <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} size={50} placeholder="Description"/><br/>
        <button onClick={()=>{postDetails()}}>Post</button> 
        </div>
    </>
  )
}
export default CreatePost