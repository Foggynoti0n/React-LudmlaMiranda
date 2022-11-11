import { useState, useEffect } from "react";
import { Data } from "../utils/Data";
import { customFetch } from "../utils/customFetch";
import Detail from "./Detail";


const ItemDetail= ({item})=>{

    return(
<>

{
    item.thumbnail 
       ?     
                <Detail
                key={item.id}
                title= {item.title}
                thumbnail= {item.thumbnail}
                description=  {item.description}
                price= {item.price} 
                /> 
       : <p> ... cargando </p> 
          
           
}

</>
    )
}

export default ItemDetail;

/*     */