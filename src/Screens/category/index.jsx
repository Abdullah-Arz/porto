import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import Filter from "../../Components/Filter";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";
import Product_card from "../../Components/Product_card";
import Show from "../../Components/Show";
import Sidebar from "../../Components/Sidebar";
import { AddCart, AddCount, AddCounter, AddEth, EthCount_Add, EthCount_Minus, RemoveCart, TotalAmount } from "../../Redux/cartSystem";
import './category.scss';
import image from '../../images/acc.jpg'

function Category() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {id} = useParams()
  const location = useLocation()
  const breadcumb = location.state.data.name;
  

  const show = useSelector((state)=>{ return state.name.show})
  console.log('Show')
  // const show = localStorage.getItem('Show')
  // const filterprice = localStorage.getItem('priceFilter')
  // console.log('Filter Price on Category Page ----- ',filterprice)
  let Api=localStorage.getItem('API')
  const [product_card,set_product_card]=useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postperpage, setPostPerPage] = useState(parseInt(show))
  const PriceFilterData = useSelector((state) => {
    return state.name.price_range;
  });

  const MaxPriceFilterData = useSelector((state) => {
    return state.name.maxprice_range;
  });

  console.log('PriceFilterData ------- ', PriceFilterData)
  console.log('MaxPriceFilterData ------- ', MaxPriceFilterData)
  console.log('Category id ------ ',id);
  console.log('breadcumb ------ ',breadcumb)

  useEffect(()=>{

    dispatch(AddCounter(null))
    window.scrollTo(0,0)

      axios.get(`${Api}/category/${id}/`)
    .then(function (res) {
      console.log('Sub Category res',res)
      set_product_card(res.data.category_products);
    })
    .catch(function (error) {
      console.log('Sub Category Error',error);
    });  

  },[id])


  const lastPostIndex = currentPage * postperpage;
  // console.log('lastPostIndex----', lastPostIndex)
  const firstPostIndex = lastPostIndex - postperpage;
  // console.log('firstPostIndex----', firstPostIndex)
  const currentPosts = product_card.slice(firstPostIndex, lastPostIndex)

  // const FilterData = currentPosts.filter(data=> {return data.price > parseInt(PriceFilterData,10) && data.price < parseInt(MaxPriceFilterData,10)})

  const FilterData = product_card.filter(data=> {return data.price > parseInt(PriceFilterData,10) && data.price < parseInt(MaxPriceFilterData,10)})
    return (
      <>
      
        <Header />
    
    <Container fluid className='category-container'>
        
        <Row className='category-row-1'>
          <Col className='category-row-1-col'>
            <p className='category-row-1-col-p'>Home </p>
            <p className='category-row-1-col-p1'>> Category > {breadcumb} </p>
          </Col>
        </Row>
          
          <Row>
            <Col lg={3} sm={3}  className="category-sidebar">
              <Sidebar />
            </Col>

            <Col >

             <Row className='category-row-2'>
          <Col className='category-row-2-col'>
          <img className="img-fluid shadow-4" 
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1676467841~exp=1676468441~hmac=a3074e8352038cb7d958b9003748bf030f3309e911cb74ad7c395e5b9c952ac4" 
          alt="banner" />
          {/* <div className="category-row-2-col-div-img"> */}
          <div className="category-row-2-col-div">
            <h2 className="category-row-2-col-div-h2">
            Winter Fashion Trends
            </h2>
            <h2 className="category-row-2-col-div-h2-1">
            UP TO 30% OFF ON JACKETS
            </h2>
            <div className="category-row-2-col-div-h2-1-div">
            <h6 className="category-row-2-col-div-h6">STARTING AT 
            <span className="category-row-2-col-div-h6-span"><sup>$</sup>199<sup>99</sup></span>
            </h6>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                SHOP NOW
              </a>
            </div>
          </div>
          {/* </div> */}

          
          </Col>
          <div className='category-row-4-div-col'>
          <Col className='category-row-4-col'>
            <p className='category-row-4-col-p'>sort by:  </p>
            <Filter />
          </Col>

          {/* <Col className='category-row-4-col-1'>
            <p className='category-row-4-col-p1'>Show:  </p>
            <Show setPostPerPage={setPostPerPage} />
          </Col> */}
          </div>
        </Row>


        {/* <Row className='category-row-4'>
          <Col className='category-row-4-col'>
            <p className='category-row-4-col-p'>sort by:  </p>
            <Filter />
          </Col>
        </Row> */}
        

          <MDBContainer className="my-5">
          <MDBRow className="w-100">
            {
        // currentPosts.filter(data=> {return data.price > parseInt(PriceFilterData,10) && data.price < parseInt(MaxPriceFilterData,10)})
        FilterData.length ? (
          FilterData.map((data,index)=>{
            return(
             <MDBCol key={data.id} md="12" lg="2" className="mb-4 mb-lg-0">
               <Product_card data={data} breadcumb={breadcumb} price={PriceFilterData} cattocart={true} id={id} />
            </MDBCol>
            )
           })
        ) 
        : (
          <MDBCol md="12" lg="12" className="mb-4 mb-lg-0">
          <img 
          src='https://lh3.googleusercontent.com/proxy/9MX-RDfE7gzMp0uRXxBd8qIuDG_v91Zc3UXJJs--DQRTXOxVo7U6qEWV-kO6nDY99z507txU7DFuLdz6kK4ljNNrXM3Cy0ZG' 
          style={{width:"350px", height:"350px"}} 
          />
          </MDBCol>
        )
    }
        </MDBRow>
      </MDBContainer> 
        
        <Row className="category-row-3" >
          <Col>
            <Pagination  
              totalPosts={product_card.length}
              postsPerPage={postperpage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </Col>
        </Row>
            </Col>
          </Row>
       
       <Row>
        <Col>
          <div className="category-border0-end-line" />
        </Col>
       </Row>

       <Footer />
    </Container>
    
    </>
    )
}

export default Category