import Item from "./Item";


const ItemList=({items})=>{

    return(
<>

{
    items.length > 0
       ?     items.map(item=>(
                <Item
                key={item.id}
                id={item.id}
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