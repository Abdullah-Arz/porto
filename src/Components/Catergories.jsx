import React, { useEffect, useState } from "react";
import { 
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBadge,
    MDBCol,
    MDBContainer,
    MDBRow,
  } from "mdb-react-ui-kit";
  import axios from "axios";
  import '../Sass/Product_card.scss'
  import '../Sass/categories_component.scss'
import { useNavigate } from "react-router";
import {ScaleLoader} from 'react-spinners'; 

function Categories({data}) {

    const navigate = useNavigate()
    let Api=localStorage.getItem('API')
    const [category,set_category]=useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
      setIsLoading(true)
      axios.get(`${Api}/category/`)
      .then(function (res) {
        console.log('category res',res.data[0])
        set_category(res.data);
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log('category error',error);
        setIsLoading(false)
      });  
    },[])

    const Navigate_To_Categories = (data) => {
      navigate(`/categories/${data.id}`,{state: {data}} )
      // navigate("/categories");
    }


  return (
    <div className='categories_container'>
      <div style={{marginTop:"4em"}} />
      <h1 className='categories_component_heading pb-3'>SHOP BY CATEGORY</h1>
      <div style={{marginTop:"-2em"}} />
         {
          isLoading ? (
            <div className="categories-loader">
            <ScaleLoader color="#36d7b7" />
            </div>
          ) : (
            <MDBContainer  className="my-5">
            
          <MDBRow>
          {
      category.map((data,id)=>{
        console.log('data',data)
         return(
            <MDBCol onClick={()=>Navigate_To_Categories(data)} key={id} md="12" lg="2" className="mb-5 mb-lg-4">
            <MDBCard className="categories_card" >
            <MDBRipple
              
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom categories_div"
            
            >
              <MDBCardImage
                src={data.image}
                fluid
                className="categories_img"
              />
              {/* <a href="#!"> */}
               
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              {/* </a> */}
            </MDBRipple>
            <MDBCardBody className="pt-3 pb-0 text-center">
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-1 category_name" >{data.name}</h5>
              </a>
              <a href="#!" className="text-reset">
                <p className=" category_quantity" >Product 10</p>
              </a>
            </MDBCardBody>
          </MDBCard>
            </MDBCol>
         )})}
            </MDBRow>
          </MDBContainer>
          )
         }
    </div>
  )
}

export default Categories
