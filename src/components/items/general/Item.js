import { Link } from 'react-router-dom';
const Item = ({id, thumbnail, title, price}) => {


  return (
    <div className="c">
    <div className="card border-0 text-center">
      <img width="200" height="260" src={thumbnail} className="card-img-top" alt="..."></img>
      <div className="card-body cc">
        <h5 className="card-title">{title}</h5>
        <p className="card-text price"><small className="text-muted">{price}</small></p>
      </div>
     
        </div>
        <Link to={`/item/${id}`}><span className=" card-button btn btn-outline-secondary">Agregar al carrito </span></Link>     
  </div>   
  )
}

export default Item;