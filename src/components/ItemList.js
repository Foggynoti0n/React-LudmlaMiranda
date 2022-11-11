import Item from "./Item";
import { Data } from "../utils/Data";
import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";


const ItemList=({items})=>{

    return(
<>

{
    items.length > 0
       ?     items.map(item=>(
                <Item
                key={item.id}
                title= {item.title}
                thumbnail= {item.thumbnail}
                description=  {item.description}
                price= {item.price}    
                /> ))
       : <p> ... cargando </p> 
                
           
}

</>
          
    )
  
}

export default ItemList;