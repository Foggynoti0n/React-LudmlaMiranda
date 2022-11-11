import { useState, useEffect } from 'react';
import { Data } from '../utils/Data'

const Item = (props) => {


  return (
    <div className="c">
    <div className="card border-0 text-center">
      <img width="200" height="260" src={props.thumbnail} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
        </div>
        <a href="#" class=" card-button btn btn-outline-secondary">Agregar al carrito </a>
  </div>   
  )
}

export default Item;