import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faMailForward,
  faMailReply,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "../../Components/Carousel_Comp";
import Counter from "../../Components/Counter";
import Header from "../../Components/Header";
import "./singleProduct.scss";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";
import { GrMail } from "react-icons/gr";
import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Product_card from "../../Components/Product_card";
import {
  AddCart,
  AddCount,
  AddEth,
  EthCount_Add,
  EthCount_Minus,
  MaxPriceRange,
  PriceRange,
  RemoveCart,
  TotalAmount,
} from "../../Redux/cartSystem";
import { useDispatch } from "react-redux";
import SingleProducts_Tabs from "../../Components/SingleProducts_Tabs";
import Footer from "../../Components/Footer";
import { useLocation, useNavigate, useParams } from "react-router";

function SingleProduct() {
  const [product_card, set_product_card] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {id} = useParams()
  const Api = localStorage.getItem('API')

  console.log("Location data --------- ", location.state.data);
  const data = location.state.data;
  const cartid = location.state.data.id;
  const name = location.state.data.name;
  const description = location.state.data.description;
  const price = location.state.data.price;
  const breadcumb = location.state.breadcumb
  const images = data.images
  const popular_product_image = location.state.popular_product_image

  console.log('Images ----- ', images)
  console.log('breadcumb ----- ',breadcumb)
  console.log('Product id ----- ',id)

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get(`${Api}/category/${data.category}/`)
    .then(function (res) {
      console.log('Sub Category res',res)
      set_product_card(res.data.category_products);
    })
    .catch(function (error) {
      console.log('Sub Category Error',error);
    });  

      dispatch(PriceRange(0))
      dispatch(MaxPriceRange(1000))

  }, []);

  const [select, setSelect] = useState(false);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);

  const [selectcolor, setSelectColor] = useState(false);
  const [selectcolor1, setSelectColor1] = useState(false);
  const [selectcolor2, setSelectColor2] = useState(false);
  const [selectcolor3, setSelectColor3] = useState(false);
  const [selectcolor4, setSelectColor4] = useState(false);

  const Select_Size = () => {
    setSelect(!select);
  };

  const Select_Size1 = () => {
    setSelect1(!select1);
  };

  const Select_Size2 = () => {
    setSelect2(!select2);
  };

  const Select_Size3 = () => {
    setSelect3(!select3);
  };

  const SelectColor = () => {
    setSelectColor(!selectcolor);
  };

  const SelectColor1 = () => {
    setSelectColor1(!selectcolor1);
  };

  const SelectColor2 = () => {
    setSelectColor2(!selectcolor2);
  };

  const SelectColor3 = () => {
    setSelectColor3(!selectcolor3);
  };

  const SelectColor4 = () => {
    setSelectColor4(!selectcolor4);
  };

  const NavigateToCart = async (data) => {
    await navigate("/categories/singleproduct", { state: { data } });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />

      <Container fluid className="singleProduct-maincontainer">
        <Row className="singleProduct-row-1">
          <Col className="singleProduct-row-1-col">
            <p className="singleProduct-row-1-col-p">Home </p>
            <p className="singleProduct-row-1-col-p1"> > Category</p>
            <p className="singleProduct-row-1-col-p1"> > {breadcumb ? breadcumb : data.label}</p>
            <p className="singleProduct-row-1-col-p1"> > ProductDetails</p>
            {/* <p className="singleProduct-row-1-col-p1"> > Glasses</p> */}
          </Col>
        </Row>

        <Row className="singleProduct-row-2">
          <Col lg={5} sm={4}>
            <Carousel images={images} popular_product_image={popular_product_image} />
          </Col>

          <Col className="singleProduct-col">
            <Row>
              <Col>
                <h2>{name}</h2>
                <Rating name="size-medium" defaultValue={2} />
                <h1>
                  ${price} - ${price}
                </h1>
                <p className="singleProduct-col-p">{description}</p>
                <p className="singleProduct-col-p1">
                  CATEGORY:{" "}
                  <span className="singleProduct-col-p1-span">
                  {breadcumb ? breadcumb : data.label}, {data.name}
                  </span>
                </p>

                <div className="singleProduct-col-p1-div">
                  <p>Color: </p>
                  <div
                    onClick={SelectColor}
                    className="singleProduct-color-maindiv"
                  >
                    <div className="singleProduct-color-div">
                      {selectcolor ? (
                        <FontAwesomeIcon icon={faCheck} color="white" />
                      ) : null}
                    </div>
                  </div>
                  <div
                    onClick={SelectColor1}
                    className="singleProduct-color-maindiv1"
                  >
                    <div className="singleProduct-color-div1">
                      {selectcolor1 ? (
                        <FontAwesomeIcon icon={faCheck} color="white" />
                      ) : null}
                    </div>
                  </div>
                  <div
                    onClick={SelectColor2}
                    className="singleProduct-color-maindiv2"
                  >
                    <div className="singleProduct-color-div2">
                      {selectcolor2 ? (
                        <FontAwesomeIcon icon={faCheck} color="white" />
                      ) : null}
                    </div>
                  </div>
                  <div
                    onClick={SelectColor3}
                    className="singleProduct-color-maindiv3"
                  >
                    <div className="singleProduct-color-div3">
                      {selectcolor3 ? (
                        <FontAwesomeIcon icon={faCheck} color="white" />
                      ) : null}
                    </div>
                  </div>
                  <div
                    onClick={SelectColor4}
                    className="singleProduct-color-maindiv4"
                  >
                    <div className="singleProduct-color-div4">
                      {selectcolor4 ? (
                        <FontAwesomeIcon icon={faCheck} color="white" />
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="singleProduct-size-maindiv">
                  <p className="singleProduct-size-maindiv-p">Size: </p>
                  <div
                    onClick={Select_Size}
                    
                    style={
                      select == true
                        ? { backgroundColor: "black", color: "white" }
                        : { backgroundColor: "white" }
                    }
                    className="singleProduct-size-div"
                  >
                    <p
                      style={
                        select == true ? { color: "white" } : { color: "black" }
                      }
                      className="singleProduct-size-div1-p"
                    >
                      Extra Large
                    </p>
                  </div>
                  <div
                    onClick={Select_Size1}
                    style={
                      select1 == true
                        ? { backgroundColor: "black", color: "#fff" }
                        : { backgroundColor: "white" }
                    }
                    className="singleProduct-size-div"
                  >
                    <p
                      style={
                        select1 == true
                          ? { color: "white" }
                          : { color: "black" }
                      }
                      className="singleProduct-size-div1-p"
                    >
                      Large
                    </p>
                  </div>
                  <div
                    onClick={Select_Size2}
                    style={
                      select2 == true
                        ? { backgroundColor: "black", color: "#fff" }
                        : { backgroundColor: "white" }
                    }
                    className="singleProduct-size-div"
                  >
                    <p
                      style={
                        select2 == true
                          ? { color: "white" }
                          : { color: "black" }
                      }
                      className="singleProduct-size-div1-p"
                    >
                      Medium
                    </p>
                  </div>
                  <div
                    onClick={Select_Size3}
                    style={
                      select3 == true
                        ? { backgroundColor: "black", color: "#fff" }
                        : { backgroundColor: "white" }
                    }
                    className="singleProduct-size-div"
                  >
                    <p
                      style={
                        select3 == true
                          ? { color: "white" }
                          : { color: "black" }
                      }
                      className="singleProduct-size-div1-p"
                    >
                      Small
                    </p>
                  </div>
                </div>

                <div className="singleProduct-line-div" />

                <Counter data={data} />

                <div className="singleProduct-line-div" />

                <div className="singleProduct-icon-maindiv">
                  <div className="singleProduct-icon-div">
                    <TiSocialFacebook
                      size={20}
                      className="singleProduct-icon-div-fb"
                    />
                  </div>

                  <div className="singleProduct-icon-div1">
                    <TiSocialTwitter
                      size={20}
                      className="singleProduct-icon-div-fb1"
                    />
                  </div>

                  <div className="singleProduct-icon-div2">
                    <TiSocialLinkedin
                      size={20}
                      className="singleProduct-icon-div-fb2"
                    />
                  </div>

                  <div className="singleProduct-icon-div3">
                    <GrMail size={16} className="singleProduct-icon-div-fb3" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Product Description Section */}
          <div className="singleProduct-related-products-div" />
          <Row>
            <Col>
              <SingleProducts_Tabs data={data}  />
            </Col>
          </Row>

          {/* Related Product Section */}

          <div className="singleProduct-related-products-div" />
          <Row>
            <Col>
              <h5 className="singleProduct-related-products">
                Related Products
              </h5>
              <div className="singleProduct-related-products-div-border" />
            </Col>
          </Row>

          <MDBContainer className="singleProduct-cart-list">
            <MDBRow>
              {product_card.map((data, index) => {
                return (
                  <MDBCol
                    key={data.id}
                  >
                    <Product_card 
                    data={data} 
                    cattocart={true} 
                    />
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBContainer>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default SingleProduct;
