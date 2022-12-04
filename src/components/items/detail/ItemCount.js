import { useState, useEffect } from 'react';


const Count =({ stock = 0, initial = 1, add })=>{
const [rate, setRate] = useState(0);  

useEffect(() => {
  setRate(initial);
},[]);


const addItem = () => {
rate< stock
  ?setRate(rate + 1)
  :setRate(stock)
}

const deleteItem = () => {
  rate > initial
  ?setRate(rate - 1)
  :setRate(0)
  }



return(
  <div id='contador'>
      <span id="count">
      <a onClick={addItem} className=" btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
      </svg></a>
      <i className="bi bi-dash-circle"></i>
      <p>{rate}</p>
      <a  onClick={deleteItem} className=" btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
      </svg></a>
    </span>
  
    {
                rate
                ?   <a className=" btn btn-outline-success mt-4" onClick={() => add(rate)}> Agregar </a>
                :   <button type="button" class="btn btn-outline-secondary mt-4" disabled>Button</button>
            }
  </div>
)

}

export default Count;

