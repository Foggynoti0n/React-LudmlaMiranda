import Count from "./ItemCount";
const {Data} = require ('../../../utils/Data')

const ItemDetail= ({item})=>{

    return(
<>
{
            item && item.thumbnail
            ? 
            <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.thumbnail}></img>
              </div>
              <div className=" b col-md-8 ">
                <div className="card-body ">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text price"><small className="text-muted">{item.price}</small></p>
                  <p className=" desc card-text">{item.description}</p>
                  
                </div>
                <Count/>
              </div>
            </div>
           
          </div>
            : <p>Cargando...</p>
        }



</>
    )
}

export default ItemDetail;

/*     */