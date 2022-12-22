import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "@firebase/firestore";
import db from '../../utils/firebaseConfig'


const Cart =()=> {
  const test = useContext(CartContext);


  const createOrder = () => {
    const itemsForDB = test.CartList.map(item => ({
      id: item.idItem,
      title: item.titleItem,
      price: item.priceItem
    }));

    test.CartList.forEach(async (item) => {
      const itemRef = doc(db, "Data", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: {
        name: "Ludmila Miranda",
        email: "lurm98@gmail.com",
        phone: "2267458932"
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };
  
    console.log(order);
    
    const createOrderInFirestore = async () => {
     
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }
  
    createOrderInFirestore()
      .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));
  
    test.removeList();
  
  }

    console.log(test.CartList);

    
    return(
       <>
 
<div className="generalcontainer  d-flex ">
<div className=" w-75  d-flex flex-column mx-auto mt-5 cart" >
 <div className="card">
  <div className="card-header">
  <h3 className="text-center" style={{'fontFamily':'Montserrat'}}>¡Revisa tu lista de compras!</h3>
  </div>
  <div className="card-body">
  <ul className="list-group mt-5">
     {
      test.CartList.length === 0
      ? <li className="list-group-item text-center">Tu carrito de compras está vacío</li>
      : test.CartList.map(item =>
        {
          return(
            test.CartList.length > 0 &&
            <div className="card mb-3 cartDetail" key={item.idItem}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.imgItem} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.titleItem}</h5>
                  <p className="card-text"><small class="text-muted">{item.priceItem}</small></p>
                  <p className="card-text"><small class="text-muted">Cantidad: {item.qtyItem}</small></p>
                 <div className="d-flex"> 
                 <button type="button" className="btn btn-outline-danger mx-auto" onClick={() => test.removeItem(item.idItem)}>
                  Eliminar
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          )
        }
      
        )
     }

       </ul>
       {
                    (test.CartList.length > 0)
                    ?  <button type="button" className="btn btn-outline-danger mx-auto" onClick={() => test.clear()}>
                    Eliminar todo
                    </button>
                    :  <button type="button" class="btn btn-outline-secondary  mt-4" disabled >Eliminar todo</button>
                }
        <Link to='/'><button type="button" class="btn btn-outline-success ms-5 mt-4"  >Seguir comprando</button></Link>
  </div>
  
</div> 

</div>


  <div className="card totalInfo w-25 mt-5 ms-3">
   <h5 className="card-header">Resumen de la compra</h5>
  <div className="card-body">
    <h5 className="card-title" >Total:   </h5>
    <p className="card-text">Total con envío: </p>
    <a href="#" className="btn btn-success" onClick={createOrder}>Continuar</a>
  </div>
</div>



      


</div>

       </>
    );
}

export default Cart;

/*<Cost valor={test.calcTotal()}/>*/
/*test.cSubTotal()*/