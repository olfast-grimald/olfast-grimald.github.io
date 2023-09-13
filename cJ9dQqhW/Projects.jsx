import React from "react";

export default function Projects(props){
    console.log(props.proj)
    return(
        
    
    <div className="proj">
    <h3>{props.proj.title}</h3>
    
    <div className="para">
    <img className="projimg" src={props.proj.image} />
    <p>{props.proj.desc}</p>
    </div>
       
    
    </div>
    )
}