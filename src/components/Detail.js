import { useState, useEffect } from 'react';
import { Data } from '../utils/Data'
import Count from "./ItemCount";

const Detail = (props) => {



  return (
    <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.thumbnail}></img>
    </div>
    <div className=" b col-md-8 ">
      <div className="card-body ">
        <h5 className="card-title">{props.title}</h5>
        <p className=" desc card-text">{props.description}</p>
        <p className="card-text price"><small className="text-muted">{props.price}</small></p>
      </div>
      <Count/>
    </div>
  </div>
 
</div>   
  )
}

export default Detail;