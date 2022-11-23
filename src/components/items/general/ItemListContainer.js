import { useState, useEffect } from 'react'
import { customFetch } from '../../../utils/customFetch'
import ItemList from '../general/ItemList'
import { useParams } from 'react-router-dom'
 const {Data} = require ('../../../utils/Data')


 
const ItemListContainer=()=>{
    const [items, setItems]= useState([])
    const {id}= useParams()
 
    useEffect(()=>{
     
   if (id == undefined) {
    customFetch(2000, Data)
    .then(response => setItems(response))
    .catch(err=> console.log(err))
   } else {
    customFetch(2000, Data.filter(item => item.categoria == id))
    .then(response => setItems(response))
    .catch(err=> console.log(err))
    
   }

    }, [id])
 
 
    return(
<>
<div className="cards">
 <ItemList items={items}/>
 
  </div>
</>
    );
}
 
export default  ItemListContainer;
 

 
