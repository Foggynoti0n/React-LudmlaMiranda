import {  Link } from "react-router-dom";

const Category =()=>{
    return(
        <>
    <ul className="nav nav-pills nav-fill ">

    <li className="nav-item dropdown d-flex "  >
    <span className=" mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" fill="currentColor" className="bi bi-bag-heart-fill text-success" viewBox="0 0 16 16">
   <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
    </svg>
    </span>
    <a className="nav-link dropdown-toggle  " style={{'color': 'gray', 'textDecoration': 'none'}} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tienda</a>
    <ul className="dropdown-menu">
    <li>
    <Link to={'/category/Tratamientos'} style={{'color': 'gray', 'textDecoration': 'none'}}><span className="dropdown-item mt-2 text-secondary" >Tratamientos</span></Link>
    </li>
    <li>
   <Link to={'/category/Novedades'} style={{'color': 'gray'  ,'textDecoration': 'none'}}> <span className="dropdown-item mt-2 text-secondary" >Novedades</span></Link>
    </li>
    <li>
    <Link to={'/category/Promociones'} style={{'color': 'gray'  ,'textDecoration': 'none'}}><span className="dropdown-item mt-2 text-secondary">Promociones</span></Link>
  </li>
    </ul>
  </li>
  
  <li className="nav-item">
  <Link style={{'color': 'gray'  ,'textDecoration': 'none'}}><span className="nav-link text-secondary">Mi cuenta</span></Link>
    
  </li>
</ul>
        </>
    )
}

export default Category;