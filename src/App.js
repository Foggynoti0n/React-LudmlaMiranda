import './App.css'
import ItemListContainer from './components/items/general/ItemListContainer';
import ItemDetailContainer from './components/items/detail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart'
import CartContextProvider from './components/cart/CartContext';
import NavBar from './components/nav/NavBar';



const App = () => {
  return(
<>
<CartContextProvider>
<BrowserRouter>
<NavBar/> 
<Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/category/:id' element={<ItemListContainer/>} />
  <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
  <Route path='/Cart' element={<Cart/>} />
</Routes>
<Footer/>
</BrowserRouter> 
</CartContextProvider>
</>

);
}

export default App;

