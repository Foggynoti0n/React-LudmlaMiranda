import { useState, useEffect } from 'react';
import { customFetch } from '../../../utils/customFetch';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
const {Data} = require ('../../../utils/Data');


 
const ItemDetailContainer=()=>{
    const [item, setItems]= useState({});
    const { id }= useParams();
 
    useEffect(()=>{
     
    customFetch(2000, Data.find(product => product.id == parseInt(id)))
    .then(response => setItems(response))
    .catch(err=> console.log(err))
    }, [])

    return(

<div className='card-open'>
        
                <ItemDetail
                item={item}    
                /> 
                 
</div>
    )
}
 
export default  ItemDetailContainer;
 