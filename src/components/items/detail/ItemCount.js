import { useState, useEffect } from 'react';
import { Data } from '../../../utils/Data';

const Count =(item)=>{
const [rate, setRate] = useState(0);  
const [logued, setLogued] = useState(false);

let stock= 30;

const addItem = () => {
rate< stock
  ?setRate(rate + 1)
  :setRate(stock)
}

const deleteItem = () => {
  rate > 0
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
  </div>
)

}

export default Count;

