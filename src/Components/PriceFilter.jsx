import React, { useReducer, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { MaxPriceRange, PriceRange } from '../Redux/cartSystem';
  
const PriceFilter = () => {
  
  // Our States
  const [value, setValue] = useState([0,1000]);
  const dispatch = useDispatch()
  
  // const priceRange = useReducer((state)=>{return state.name.price_range})
  // console.log('Price Range ----- ', priceRange);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
    // localStorage.setItem('priceFilter',[newValue])
    console.log('Price Range ----- ', newValue);
  };

  const FilterData = () => {
    console.log('Filter Data Submit ----- ')
    dispatch(PriceRange(value[0]))
    dispatch(MaxPriceRange(value[1]))
  }

  // const PriceFilter = () => {
    
  // }
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: "100%",
    }}>
      {/* <h3>How to create Price Range</h3> */}
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
      <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
      <div>
      Price ${value[0]} - ${value[1]}
      
      </div>
      <Button onClick={FilterData} variant="contained" style={{backgroundColor:"black",color:'white'}}>
        Filter
        </Button>
      </div>
    </div>
  );
}
  
export default PriceFilter;