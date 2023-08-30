import React, { useEffect, useState } from 'react'
import '../Sass/Header_CartItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import Header_CartAccrodion from './Header_CartAccrodion'
import { useDispatch, useSelector } from 'react-redux'
import { AddCart, ClearCart, ClearCount, ClearTotalAmount, EthCount_Clear, EthCount_Minus, RemoveCart, SubCount, SubTotalAmount } from '../Redux/cartSystem'


function Header_CartItem({cartid}) {
  const [state_id, setState_Id] = useState()
  const [state_image, setState_Image] = useState('')
  const [state_nftname, setState_NftName] = useState('')
  const [state_eth, setState_eth] = useState(null)
  const [state_ethadd, setState_EthAdd] = useState(null)
  // const [state_eth, setState_eth] = useState('')
  const [state_addcart, setState_AddCart] = useState(['Apple','Orange','oo'])

  const Cart = useSelector((state) => {return state.name.cart});
  const Total_amount = useSelector((state) => {return state.name.cartTotalAmount});
  // const EthCount = useSelector((state) => {return state.name.price});

  console.log('Quantity ---- ',Cart.map((item)=>{return item.cartQuantity}))
  let arr=[]

  const l_cartid = localStorage.getItem('cartid')
  let card_id =localStorage.getItem('cartid');
  
  var ab = Cart.includes(l_cartid)
  const dispatch = useDispatch()
  const cart_id = require('../Json/Cart_Data.json')
  const data = require('../Json/Cart_Data.json')
  let eth;
  const checkCartId = (id) => {
    
    // arr.push(card_id)
    // console.log('Age-------------------',id);
    // if(l_cartid == idarr){
    //   alert('Alert')
    // }
    
  }

  useEffect(()=>{
    
    Add_Cart()
    // console.log('Header Cart Item ----------',Cart)
    Cart.map((item,index)=>{
      return(
        eth = item.price
      )
    })
    setState_EthAdd(state_ethadd+parseFloat(eth))
    // console.log('setState_EthAdd------------------',state_ethadd)
},[]
) 
  
    const Add_Cart = async() => { 
        if(Cart == state_addcart){
          // console.log('state add Cart--------------------------------',state_addcart)
          dispatch(RemoveCart(l_cartid))
        }else{
          data.filter((item)=>{
            // console.log('state add Cart--------------------------------',state_addcart)
            if(item.id == l_cartid){
              setState_Image(item.nft_img)
              setState_NftName(item.nftName)
              // setState_eth(item.eth)
            }
      }
          )
        }
        
      // }
      // )
    }


  const ClearAll_Item = () => {
    dispatch(ClearCart())
    dispatch(ClearCount())
    dispatch(EthCount_Clear())
    dispatch(ClearTotalAmount())
  }

  const Delete_Cart_Item = async(id, price, quantity) => {
    // const index_id = Cart.indexOf(id)
    // console.log('Index_id--------------------------------',id)

    // Cart.map((item)=>{
    //   if(id == item.id){
    //     dispatch(ClearCount())
        
    //   }else{
    //     dispatch(SubCount(parseInt(quantity)))  
    //   }
    // })
    dispatch(SubCount(parseInt(quantity))) 
    dispatch(RemoveCart(id))
    dispatch(EthCount_Minus(parseFloat(price)))
    dispatch(SubTotalAmount(price*quantity))
  }

  return (
      Cart.length > 0 ? (
        
        <>
        
        <div className='header-cartitem-div'>
        <span className='header-cartitem-div-span'>{Cart.length} item</span>
        <span className='header-cartitem-div-span1' onClick={ClearAll_Item}>clear all</span>
      </div>

      {
        Cart.map((item,index)=>{
          return(
 
        <div key={index} className='header-cartitem-maindiv'>
      
      <div key={index} className='header-cartitem-div1'>
        <div className='header-cartitem-div1-div'>
            <img src={item.image} className='header-cartitem-div1-img'/>
        </div>
        <div className='header-cartitem-div2'>
        <div className='header-cartitem-div2-div'>
            <span className='header-cartitem-div2-div-span'>{item.name}</span>
            <div>
                <span className='header-cartitem-div2-div-span1'>{item.name}</span>
                <FontAwesomeIcon icon={faCheckCircle} className='header-cartitem-div2-div-icon'/>
            </div>
            <span className='header-cartitem-div2-div-span2'>Creator fee: 7.5%</span>
        </div>
        <div className='header-cartitem-div2-div-div-quantity'>
            <span className='header-cartitem-eth-value1'>Quantity: {item.cartQuantity}</span>
            <span className='header-cartitem-eth-value'>{item.price} USD</span>
            {/* <FontAwesomeIcon onClick={()=>{Delete_Cart_Item(item.id, item.price)}} icon={faTrash} className='header-cartitem-trash'/> */}
        </div>
        <div className='header-cartitem-div2-div-div-quantity1'>
            {/* <span className='header-cartitem-eth-value1'>Quantity: {item.cartQuantity}</span>
            <span className='header-cartitem-eth-value'>{item.price} USD</span> */}
            <FontAwesomeIcon onClick={()=>{Delete_Cart_Item(item.id, item.price, item.cartQuantity)}} icon={faTrash} className='header-cartitem-trash'/>
        </div>
        </div>
        
      </div>
      <div className='header-cartitem-div-line'/>

    </div>
          )
        })
      }
       <div className='header-cartitem-div3'>
<span className='header-cartitem-div3-span'>Total Price</span>
<div className='header-cartitem-div3-div'> 
{/* <span className='header-cartitem-div3-span'>{EthCount}$</span> */}
<span className='header-cartitem-div3-span1'>${Total_amount}</span>
</div>

      </div>
        </>

        
      ) : (
        <>
        <div className='header-cartitem-maindiv'>
      <div className='header-cartitem-div-empty-cart'>
        <span className='header-cartitem-div-span-empty-cart'>Cart is Empty</span>
        {/* <span className='header-cartitem-div-span1'>clear all</span> */}
      </div>
    </div>
        </>
      )
    
  )
}

export default Header_CartItem