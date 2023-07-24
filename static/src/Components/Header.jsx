import React from "react";
import "../style.css";
import Logo from "../assets/foodlogo.png";


function Header(){
    return(
      <nav className="navbar">
         <img className="img1" src={Logo}/> 
         <div className="list-div">
            <ul className="list1">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>ContactUs</li>
            </ul>
         </div>
      </nav>
    )
}
export default Header;