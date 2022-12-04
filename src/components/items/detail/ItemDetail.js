import { useState } from "react";
import { Link } from "react-router-dom";
import Count from "./ItemCount";
import { CartContext } from "../../cart/CartContext";
import { useContext } from "react";



const ItemDetail= ({item})=>{

  const [ItemCount, setItemCount]= useState(0)
  const test = useContext(CartContext);

  const add = (qty) => {
    setItemCount(qty);
    test.addItems(item, qty);
}

    return(
<>
{
            item && item.thumbnail
            ? 
            <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.thumbnail}></img>
              </div>
              <div className=" b col-md-8 ">
                <div className="card-body ">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text "><small className="text-muted">{item.price}</small></p>
                  <p className=" desc card-text">{item.description}</p>
                
                </div>
                {
                  ItemCount === 0
                  ? <Count stock={item.stock} initial={1} add={add} />
                  :<Link to = '/Cart' style ={{textDecoration:'none'}}>
                    <a className=" goCart btn btn-outline-secondary">Ir al Carrito</a>
                  </Link>
                }
              </div>
            </div>
           
          </div>
            : <p>Cargando...</p>
        }



</>
    )
}

export default ItemDetail;

/*     */