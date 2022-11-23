import './App.css'
import NavBar from './components/nav/NavBar';
import ItemListContainer from './components/items/general/ItemListContainer';
import ItemDetailContainer from './components/items/detail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return(

<BrowserRouter>
<NavBar/>
<Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/category/:id' element={<ItemListContainer/>} />
  <Route path='/item/:id' element={<ItemDetailContainer/>} />
</Routes>
</BrowserRouter> 
);
}

export default App;

