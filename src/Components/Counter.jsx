import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../Sass/Counter.scss';
import { AddCart, AddCount, AddCounter, AddEth, EthCount_Add, EthCount_Minus, RemoveCart, TotalAmount } from "../Redux/cartSystem";

function Counter({data}) {

    const dispatch = useDispatch();
    const [inputvalue, setInputValue] = useState(null)

    const Counter = useSelector((state)=>{return state.name.counter})
    const Cart = useSelector((state)=>{return state.name.cart})
    console.log('Counter ----- ', Counter);
    

    const SelectCart = (id,name,price,image) => {
        
        // if(inputvalue > 0){
        //     dispatch(AddCart({id, name, price,image }))
        // dispatch(TotalAmount(parseInt(price)))
        // dispatch(AddCount(inputvalue))
        // }else{
          
          if(Counter >= 2) {
            dispatch(AddCart({id, name, price,image }))
            dispatch(TotalAmount(parseInt(price)))
            dispatch(AddCount(Counter))
          }else{
            dispatch(AddCart({id, name, price,image }))
            dispatch(TotalAmount(parseInt(price)))
            dispatch(AddCount(1))
          }

          setInputValue(null)
        
        // dispatch(AddCounter(parseInt(inputvalue)))
    //   }
    }

    const CounterValue = (e) => {
      
      dispatch(AddCounter(parseInt(e.target.value)))
    }

    



  return (
    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="counter-quantity">Quantity :</h3>
                  <div className="">
                    <input
                      // value={null}
                      type="number"
                      name="number"
                      min={1}
                      max={10}
                      defaultValue={1}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                      onChange={(data)=>{CounterValue(data)}}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <Button onClick={()=>SelectCart(data.id,data.name,data.price,data.images[0].image_path)} variant="contained" style={{backgroundColor:"rgb(34, 37, 41)", color:"white"}}>
                        ADD TO CART
                    </Button>
                        
                    
                  </div>
                </div>
  )
}

export default Counter