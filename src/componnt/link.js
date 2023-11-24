import React from "react";
import Info from "./info.json"
function link (props){
    let i=JSON.stringify(Info)
    return(
    <div className="col-md-4 ">
         <div className="card">
<div className="card-header">
    
    <img src={i.img}/>
    <div className="card-body" >
        <h6>{i.name}</h6>
        <h7>{i.feald}</h7>
    </div>
</div>
         </div>
    </div>
    
    )
}
export default link