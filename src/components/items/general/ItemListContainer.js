import { useState, useEffect } from 'react'
import ItemList from '../general/ItemList'
import { useParams } from 'react-router-dom'
import Title from './Title.js'
import Wcard from '../../nav/Wcard'
import {firestoreFetch} from '../../../utils/firestoreFetch'



 
const ItemListContainer=()=>{
    const [items, setItems]= useState([])
    const {id}= useParams()
 
   
     

    useEffect(() => {
        firestoreFetch(id)
            .then(result => setItems(result))
            .catch(err => console.log(err));
    }, [id]);

 
    useEffect(() => {
        return (() => {
            setItems([]);
        })
    }, []);
    
   

 
 
    return(
<>
{
    id== undefined
    ?<><header className='border-bottom'>
        <Wcard/> 
    </header><Title/> </>
    :  <> <h2 style={{'fontFamily':'Montserrat', 'textAlign': 'center'}} className='text-secondary'>{id}</h2></>
}

<div className='Cards-container'>
<div className="cards">
 <ItemList items={items}/>
  </div>
</div>

</>
    );
}
 
export default  ItemListContainer;
 

 
