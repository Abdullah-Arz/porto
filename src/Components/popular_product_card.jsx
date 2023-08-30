import React from 'react'
import {
 
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBadge,
  } from "mdb-react-ui-kit";
  import '../Sass/Product_card.scss'
  import { AddCart, AddCount, AddEth, EthCount_Add, EthCount_Minus, RemoveCart, TotalAmount } from "../Redux/cartSystem";
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import image from '../images/noimage.jpg'
import { Rating } from '@mui/material';

  
function Popular_product_card({data,cattocart,NavigateToDetailCart}) {

//   console.log('image id ---- ', data.images[1].image_path)

const dispatch = useDispatch();
const navigate = useNavigate();
const Api = localStorage.getItem('API')
// const {id} = useParams()

const SelectCart = (id,name,price,image) => {
  dispatch(AddCart({id, name, price,image }))
  dispatch(TotalAmount(parseInt(price)))
  dispatch(AddCount(1))
}

const label = data.label
const breadcumb = data.label
const Navigate_To_Categories = () => {
const popular_product_image = true
     

  if(NavigateToDetailCart) { 
    navigate(`/categories/singleproduct/${data.id}`,{state: {data, popular_product_image}})
  }
  else if(cattocart){
    navigate(`/categories/singleproduct/${data.id}`,{state: {data,breadcumb}})
    window.scrollTo(0,0)
  }else{ 
      navigate("/categories")
  }
    }

    const Reviews = data.reviews[0] ? data.reviews[0].rating : null 

    // console.log('data.images[1].image_path ----- ',data.images[1].image_path)
  return (
    // FilterData.filter(data=> {return data.price > parseInt(price,10)}).map((data,index)=>(
      <div  className='product-card'>
       
            <MDBCard className='thumbnail'>
              <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded"
            >
               <div className="d-flex card_top justify-content-between p-3 mt-1">
                <MDBBadge className='ms-0' color='success'>Hot</MDBBadge>
                <MDBIcon
                onClick={()=>{SelectCart(data.id,data.name,data.price,data.images[0] ? `${Api}/${data.images[0].image_path}` : null)}} 
                fas icon="shopping-cart" 
                className='add_card' 
                />
              </div>
              {
                data.images[0] ? (
                  <>
                  <MDBCardImage
                  
                src={`${Api}/${data.images[0].image_path}`}
                position="top"
                alt="Laptop"
                className='picture1'
              />
                <MDBCardImage
                // src="https://d-themes.com/react_asset_api/porto/uploads/product_3_1_19d24575e2.jpg"
                src={`${Api}/${data.images[0].image_path}`}
                position="top"
                alt="Laptop"
                className='picture2'
                onClick={Navigate_To_Categories}
              />
              </>
                ) : (
                  <>
                  <MDBCardImage
                src={image}
                position="top"
                alt="Laptop"
                className='picture1'
              />
                <MDBCardImage
                src={image}
                position="top"
                alt="Laptop"
                className='picture2'
                onClick={Navigate_To_Categories}
              />
              </>
                )
              }
              
            <a onClick={Navigate_To_Categories} className='inner_quick_view'>Quick View</a>
              </MDBRipple>
              <MDBCardBody className='pt-2 pb-1'>
                <div className="d-flex justify-content-between pb-2 pt-1">
                    <a href="#!" className="text-muted card_category_text">
                    {label}
                    </a>
                </div>
  
                <div className="d-flex justify-content-between mb-2">
                  <h6 className="mb-0 card_heading_text text-Secondary"> {data.name}</h6>
                </div>
                <div className="d-flex justify-content-between mb-2">
                <div className=" text-Secondary  star-icon card_star_text">
                    {/* <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" /> */}
                    <Rating name="size-medium" defaultValue={Reviews} readOnly />
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <h6 className="text-dark mb-0 card_price_text">${data.price}</h6>
                </div>
                
              </MDBCardBody>
            </MDBCard>
    </div>
    // ))
  )
}

export default Popular_product_card
