import { createContext, useState } from "react";
import Cost from '../../utils/CostFunctions'

export const CartContext = createContext();

const CartContextProvider= ({children})=>{
const [CartList, setCartList]= useState([]);



const addItems= (item,qty) =>{
   
    const isInCart= CartList.find ( product=> product.id === item.id)
    
    if (isInCart === undefined) {
        setCartList([
            ...CartList,
            {
                idItem: item.id,
                imgItem: item.thumbnail,
                titleItem: item.title,
                priceItem: item.price,
                qtyItem: qty
            }
        ]);
    } else {
      
        isInCart.qtyItem += qty;
        setCartList([
            ...CartList
        ]);
    }
}

    const clear=()=>{
        setCartList([])
    }


    const removeItem=(id)=>{
        let deleted = CartList.filter(item => item.idItem != id);
        setCartList(deleted);
    }


    const totalItem = (idItem) => {
        let TI = CartList.map(item => item.idItem).indexOf(idItem);
        return CartList[TI].costItem * CartList[TI].qtyItem;
    }

    const cSubTotal = () => {
        let totalDeItem = CartList.map(item => totalItem(item.idItem));
        return totalDeItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }



    const calcTotal = () => {
         let envio= 100;
       let subT= cSubTotal + envio;
        return subT();
    }

    const ItemsQty = () => {
        let qtys = CartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }




    return(
        <CartContext.Provider value={{
            CartList, 
            addItems,            
            removeItem, 
            clear,
            totalItem,
            calcTotal,
            ItemsQty

           }}>
        {children}
        </CartContext.Provider>
    )
}




export default CartContextProvider;