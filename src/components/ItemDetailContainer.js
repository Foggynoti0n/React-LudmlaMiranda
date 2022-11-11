import { useState, useEffect } from 'react'
import { Data } from '../utils/Data'
import { customFetch } from '../utils/customFetch'
import ItemDetail from './ItemDetail'
import Count from './ItemCount'
import Detail from './Detail'

 
const ItemDetailContainer=(props)=>{
    const [item, setItem]= useState({})
 
    useEffect(()=>{
        customFetch(2000, Data[4])
        .then(response => setItem(response))
        .catch(err=> console.log(err))
    }, [])
    return(

<div className='card-open'>
       
               <ItemDetail
                item={item}/>
              
                 
</div>
    )
}
 
export default  ItemDetailContainer;
 