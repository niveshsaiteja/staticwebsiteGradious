import React from "react";
import "../style.css";
import Logo1 from "../assets/types.webp";

function TypesOfFarming(){
    return(
  <div className="card">
    <img className="img3" src={Logo1} />
    <ul className="list2">
   <li> Dairy Farming.</li>
   <li>Commercial Farming.</li>
   <li>Plantation Farming.</li>
   <li>Commercial grain farming.</li>
   <li>Commercial mixed farming.</li>
   <li>Primitive subsistence farming.</li>
   <li>Intensive subsistence.</li>
    </ul>
  </div>
    )
}

export default TypesOfFarming;