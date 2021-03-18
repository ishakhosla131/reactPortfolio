import React from "react";

import "./style.css";

function Card(props) {
  return (
  
  <div className="card rounded"  style={{ width: '18rem', height:'auto' }}>
  <img className="card-img-top rounded" src={props.image} alt={props.name}></img>
  <div className="card-body">
    <h5 className="card-title text-center">{props.name}</h5>
      </div>
  
  <div className="card-body ">
    
      <a href={props.github} className="card-link text-muted ">GitHub</a>
    
    
      <a href={props.deployed} className="card-link float-right text-muted">Deployed App</a>
    
    
  </div>
</div>
  );
}

export default Card;
