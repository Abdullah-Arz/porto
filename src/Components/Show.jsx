import React, { useReducer, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ShowCart } from '../Redux/cartSystem';
import '../Sass/Show.scss';

const Show = ({setPostPerPage}) => {

  const [selects, setSelects] = useState(3);

  const dispatch = useDispatch()
  dispatch(ShowCart(selects))
  
  // localStorage.setItem('Show',selects)

  const SelectItems = (data) => {
    data ? setPostPerPage(data) : setPostPerPage(3)
    console.log('Options ---------- ',data)
    setSelects(data)
  }

  return (

    <div className='show-cart-maincontainer'>
      <select value={selects} id='select1' onChange={(e)=>{SelectItems(e.target.value)}} >
        <option>4</option>
        <option>6</option>
        <option>10</option>
      </select>
    </div>

  );
}

export default Show;