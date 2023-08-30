import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Sass/Carousel.scss";
import Carousel from "react-bootstrap/Carousel";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ImageZoom from "react-image-zooom";
import LazyLoad from "react-lazyload";

const Carousel_Comp = ({images,popular_product_image}) => {

  const Api = localStorage.getItem('API')

  const [stateborder, setStateBorder] = useState();
  const [imageState, setImageState] = useState(
    // images[0].image_path
    popular_product_image ? `${Api}/${images[0].image_path}` : images[0].image_path
  );
  
  useEffect(()=>{
    // window.location.reload()
    // setImageState(popular_product_image ? `${Api}/${images[1].image_path}` : images[0].image_path)
  },[])
  


  const SetImageFunction = () => {
    // alert()
    popular_product_image ? setImageState(`${Api}/${images[0].image_path}`) : setImageState(images[0].image_path);
  };

  const SetImageFunction1 = () => {
    // alert()
    popular_product_image ? setImageState(`${Api}/${images[1].image_path}`) : setImageState(images[1].image_path);
    // setImageState(images[1].image_path);
  };

  const SetImageFunction2 = () => {
    // alert()
    popular_product_image ? setImageState( images[2] ? `${Api}/${images[2].image_path}` : `${Api}/${images[1].image_path}` ) 
    : 
    setImageState(images[2] ? images[2].image_path : images[1].image_path);
    // setImageState(images[2] ? images[2].image_path : images[1].image_path);
  };

  return (
    <Container className="carousel-container">
      {/* <Carousel> */}
        {/* <Carousel.Item> */}
          <Zoom>
          <img
            className="d-block w-100"
            src={imageState}
            alt="First slide"
          />
          </Zoom>
        {/* </Carousel.Item> */}
        {/* <Carousel.Item>
          <ImageZoom
            className="d-block w-100"
            src={imageState1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ImageZoom
            className="d-block w-100"
            src={imageState2}
            alt="Third slide"
          />
        </Carousel.Item> */}
      {/* </Carousel> */}

      <div className="carousel-div-margin" />

      <Row className="carousel-row">
        <div className="carousel-row-div">
        <Col
          lg={3}
          sm={3}
          xsm={3}
         
        >
          <img
           onClick={SetImageFunction}
            src={
              popular_product_image ? 
              `${Api}/${images[0].image_path}` 
              : images[0] ? images[0].image_path : null
              // images[0] ? images[0].image_path : null 
            }
            className="carousel-img"
          />
        </Col>

        <Col
          lg={3}
          sm={3}
          xsm={3}
         
        >
          <img
           onClick={SetImageFunction1}
            src={
              popular_product_image ? images[1] ? 
              `${Api}/${images[1].image_path}` : `${Api}/${images[0].image_path}` 
              : images[1] ? images[1].image_path : images[0].image_path
              // images[1] ? images[1].image_path : null
            }
            className="carousel-img1"
          />
        </Col>

        <Col
          lg={3}
          sm={3}
          xsm={3}
          onClick={SetImageFunction2}
        >
          <img
            src={
              popular_product_image ? images[2] ? 
              `${Api}/${images[2].image_path}` : `${Api}/${images[1].image_path}`  
              : images[2] ? images[2].image_path : images[1].image_path
              // images[2] ? images[2].image_path : images[1].image_path 
            }
            className="carousel-img2"
          />
        </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Carousel_Comp;
