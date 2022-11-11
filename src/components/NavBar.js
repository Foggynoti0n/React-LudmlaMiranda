
import CartWidget from './CartWidget.js';
import Menu from './Menu.js'
import {Link} from 'react-router-dom'


const NavBar=()=>{
    return(
<header>
<nav className="navbar  border-bottom">
  <div className="container-fluid">
  <Link to={'/'} style={{'color': 'gray' ,'textDecoration': 'none'}} ><div id='logo'><h2>Estética Afrodita</h2></div></Link>
    <ul className="nav nav-pills nav-fill ">
  <li className="nav-item ">
    <Link to={'/category/tratamientos'} style={{'color': 'gray', 'textDecoration': 'none'}}><span className="nav-link text-secondary" >Tratamientos</span></Link>
  
  </li>
  <li className="nav-item">
  <Link to={'/category/novedades'} style={{'color': 'gray'  ,'textDecoration': 'none'}}> <span className="nav-link text-secondary" >Novedades</span></Link>
   
  </li>
  <li className="nav-item">
    <Link to={'/category/promociones'} style={{'color': 'gray'  ,'textDecoration': 'none'}}><span className="nav-link text-secondary">Promociones</span></Link>
  </li>
  <li className="nav-item">
  <Link style={{'color': 'gray'  ,'textDecoration': 'none'}}><span className="nav-link text-secondary">Mi cuenta</span></Link>
    
  </li>
</ul>
<div id='buttons' className='d-flex'>
<CartWidget/>
<Menu/>
</div>
  </div>
</nav>
</header>
    );
}

export default NavBar;