import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { firestoreFetchOne} from '../../../utils/firestoreFetch'
import { useParams } from 'react-router-dom';




 
const ItemDetailContainer=()=>{
    const [item, setItem]= useState({});
    const { idItem }= useParams();
        

     useEffect(() => {
        firestoreFetchOne([idItem])
            .then(result => setItem(result))
            .catch(err => console.log(err));
    }, []);

  
    return(
<>
<div className='card-open mt-5 mb-5'>
        
                <ItemDetail
                item={item}    
                /> 
                 
</div>
</>
    )
}
 
export default  ItemDetailContainer;
 