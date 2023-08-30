import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
  } from "mdb-react-ui-kit";
  import '../Sass/Sale_banner.scss'
  
function Sale_banner() {
  return (
    <div style={{backgroundColor:'#f4f4f4'}} className="pt-3 pb-3">
          <MDBContainer  className="my-5 text-center">
            <MDBRow>
              <MDBCol md="12" lg="3" className="mb-4">
              <div className="sale_banner_container1">
                <img src="https://d-themes.com/react/porto/demo3/images/home/banners/home-banner1.jpg" style={{width:'100%'}} />
                    <div className="bottom-left">
                        <h3 >Sunglasses Sale</h3>
                        <h4 >See all and find yours</h4>
                        <MDBBtn  style={{height:'4em',weight:'15em'}} color='dark' size="sm">Shop By Glasses</MDBBtn>
                    </div>
              </div>
              </MDBCol>
              <MDBCol md="12" lg="3" className="mb-4">
              <div className="sale_banner_container2">
                <img src="https://d-themes.com/react/porto/demo3/images/home/banners/home-banner2.jpg" style={{width:'100%'}}/>
                    <div className="bottom-left">
                        <h3 >Cosmetics Trends</h3>
                        <h4 >See all and find yours</h4>
                        <MDBBtn  style={{height:'4em',weight:'15em'}} color='dark' size="sm">Shop By Glasses</MDBBtn>
                    </div>
              </div>
              </MDBCol>
              <MDBCol md="12" lg="3" className="mb-4">
              <div className="sale_banner_container3">
                <img src="https://d-themes.com/react/porto/demo3/images/home/banners/home-banner3.jpg" style={{width:'100%'}}/>
                    <div className="bottom-left">
                        <h3 >Fashion Summer Sale</h3>
                        <h4 >See all and find yours</h4>
                        <MDBBtn  style={{height:'4em',weight:'15em'}} color='dark' size="sm">Shop By Fashion</MDBBtn>
                    </div>
              </div>
              </MDBCol>
              <MDBCol md="12" lg="3" className="mb-4">
              <div className="sale_banner_container4">
                <img src="https://d-themes.com/react/porto/demo3/images/home/banners/home-banner4.jpg" style={{width:'100%'}}/>
                    <div className="bottom-left">
                        <h3 >UP TO 70% IN ALL BAGS</h3>
                        <h4 >Starting at $99</h4>
                        <MDBBtn  style={{height:'4em',weight:'15em'}} color='dark' size="sm">Shop By Bags</MDBBtn>
                    </div>
              </div>
              </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}

export default Sale_banner
