import React from "react";
import "../style.css";
import Logo from "../assets/farming.avif";
import TypesOfFarming from "./TypesOfFarming";

function MainBody(){
    return(
    <div>
        <div className="inner-div">
        <img className="img2" src={Logo}/>
        <div>
            <h1 className="heading">Cultivation & Farming is the Main Cultural and Traditional growth of our Country</h1>
        </div>
        </div>
        <TypesOfFarming/>
    </div>
    )
}

export default MainBody;
