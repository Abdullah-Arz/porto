import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Product_card from "../Components/Product_card";
import Popular_product_card from "./popular_product_card";


function Popular_product() {

  const navigate = useNavigate();
  let Api=localStorage.getItem('API')
  const [product_card,set_product_card]=useState([]);
  
  useEffect(()=>{
    axios.get(`${Api}/popular-products/`)
    .then(function (res) {
      console.log('popular-products response ---- ',res)
      set_product_card(res.data);
    })
    .catch(function (error) {
      console.log('popular-products error ----- ',error);
    });  
    
  },[])
 
  const Navigate_To_Categories = () => {
    // navigate("/categories");
  }

    return (
    <>
    <div style={{marginTop:"4em"}} />
      <h1 className='categories_component_heading pb-3'>Popular Products</h1>
      <div style={{marginTop:"-2em"}} />
          <MDBContainer  className="my-5">
          
          <MDBRow>
            {
      product_card.map((data)=>{
        // console.log('data.images[1].image_path',data.images[1] ? data.images[1].image_path : data.images[1].image_path)
         return(
          <MDBCol key={data.id} md="12" lg="2" className="mb-4 mb-lg-0">
            <Popular_product_card data={data} NavigateToDetailCart={'/categories/singleproduct'}/>
         </MDBCol>

         )
        })
    }
        </MDBRow>
      </MDBContainer>
        
      
    </>
    )
}

export default Popular_product