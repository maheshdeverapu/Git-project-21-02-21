import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
const Header = ()=>{
    return(
        <nav className="content-header">
           
    {/* <div className="nav-wrapper"> */}
      {/* <a href="#" class="brand-logo">Logo</a> */}
      {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul> */}
    
 
                {/* <Link to="/" className="brand-logo">Instagram</Link>
            
    <ul id="nav-mobile" className="right hide-on-med-and-down"> 
            
                <li><Link to="/signin" >signin</Link></li>
            
        
                <li><Link to={"/signup"} >signup</Link></li>
            
        
                <li><Link to={"/profile"} >Profile</Link></li>
            
        
                <li><Link to={"/post"} >camera icon</Link></li>
            </ul> */}
            <nav>
                <Link to={"/"} className={"brand-logo nav-content"}>Instagram</Link>
            </nav>
            <nav>
                <Link to={"/signin"} className={"nav-content"}>signin</Link>
            </nav>
            <nav>
                <Link to={"/signup"} className={"nav-content"}>signup</Link>
            </nav>
            {/* <nav>
                <Link to={"/profile"} className={"nav-content"}>Profile</Link>
            </nav> */}
            {/* <nav>
                <Link to={"/post"} className={"nav-content"}>camera icon</Link>
            </nav> */}
            <nav>
                <Link to={"/createPost"} className={"nav-content"}><i class="fa-solid fa-camera"></i></Link>
            </nav>
            
        </nav>
    )
}
export default Header;
