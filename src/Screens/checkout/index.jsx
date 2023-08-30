import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./checkout.scss";
import Header from "../../Components/Header";
import { FiChevronRight } from "react-icons/fi";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../../Components/Footer";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import PaymentForm from "../../Components/PaymentForm";
import InjectCheckout from "../../Components/PaymentForm";
import { ErrorSharp, Visibility, VisibilityOff } from "@mui/icons-material";
import { ClearCart, ClearCount, ClearTotalAmount, MaxPriceRange, PriceRange } from "../../Redux/cartSystem";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import axios from "axios";
import { NotificationManager } from "react-notifications";
import ForgetModal from "../../Components/ForgetModal";
import { BsCheckCircle } from "react-icons/bs";
import LoaderModal from "../../Components/LoaderModal";

// const stripe = loadStripe(
//   "pk_test_51Mc1A9Chg18ijhGETvgTddMGzm9gy4uJ4iTlPO6P1vSJsbnctncCJlI7qmObPGbF0QBuC8sekMLp4DCb1IVfv2fa00tTJnPBx4"
// );


function Checkout() {

  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [companyname, setCompanyName] = useState();
  const [countryname, setCountryName] = useState();
  const [address, setAddress] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [phone, setPhone] = useState();
  const [useremail, setEmail] = useState();
  const [note, setNotes] = useState();
  const [centredModal, setCentredModal] = useState(false);
  const [ stateFormChange, setStateFormChange] = useState(false);
  const [clientPusblish, setClientPublish] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [stateEmail, setStateEmail] = useState();
  const [statePassword ,setStatePassword] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [stateRefresh ,setStateRefresh] = useState();
  const [stateUuid, setStateUuid] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [ stateToken, setStateToken ] = useState(false)

  const cart = []
  var clientpublish;
  var TokenData;
  // const stripe = require('stripe')('pk_test_51Mc1A9Chg18ijhGETvgTddMGzm9gy4uJ4iTlPO6P1vSJsbnctncCJlI7qmObPGbF0QBuC8sekMLp4DCb1IVfv2fa00tTJnPBx4');

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  const Api = localStorage.getItem('API')
  const Token = sessionStorage.getItem('Token')

  

  // const uuid = location.state.data;
  var uuid;
  console.log('UUID ------ ',uuid)

  useEffect(()=>{
    dispatch(PriceRange(0))
    dispatch(MaxPriceRange(1000))
  },[stateRefresh])

  const onSubmit = (data) => {
    console.log("Submit Data ----- ", data);
  };

  const Cart = useSelector((state) => {
    return state.name.cart;
  });
  const Total_amount = useSelector((state) => {
    return state.name.cartTotalAmount;
  });
  console.log("Checkout Cart ----------- ", Cart);

  const onToken = async (token) => {
    console.log("Token ---------- ", token);   
      
      for (let persone of Cart) {
      const i_product = persone.id
      const product_units = persone.cartQuantity
      cart.push({i_product, product_units})
      }
  
      console.log('State Id ----- ',cart)
      
      axios.post(`${Api}/cart/get_or_add_item/`,cart,{
        headers:{
          Authorization: `token ${Token}`
        }
      })
      .then(async(res)=>{
        console.log('Add to cart Api Response ---- ', res)
        // NotificationManager.success(res.data.message);
        setIsLoading(true)
        HandleOrderApi(token.id)
        // navigate("/checkout");
      }).catch((error)=>{
        console.log('Add to cart Api Error ---- ', error)
        setIsLoading(false)
        // if(!token){
        // NotificationManager.error('Please Login First');
        // }else{
          // NotificationManager.error('Something went Wrong');
        // }
      }) 
    
  
    const HandleOrderApi = async(data) => {
      await axios.post(`${Api}/orders/`,{},{
        headers:{
          Authorization: `token ${Token}`
        }
      }).then(async(res)=>{
        console.log('Order Api Response ----- ',res)
        uuid = res.data.details;
        HandleOrderPayment(uuid,data)
        setStateUuid(res.data.details);
        // const data = res.data.details
        // navigate("/checkout",{state: {data}});
      }).catch((error)=>{
        console.log('Order Api Error ----- ',error)
        setIsLoading(false)
      })
    }

  };

  const HandleOrderPayment = (data,tokenId) => {

    const body = {
      "uuid": data,
      "card_token": tokenId
    }

    axios.post(`${Api}/orders/order-payment/`,body,{
      headers : {
        Authorization: `token ${Token}`
      }
    }
    ).then((res)=>{
      console.log('order-payment Api Response ----- ',res)
      NotificationManager.success('Payment is Successfully Done');
      if (tokenId) {
        setCentredModal(true)
        setTimeout(()=>{
          setCentredModal(false)
          dispatch(ClearCart());
          dispatch(ClearCount())
          dispatch(ClearTotalAmount())
          navigate('/')
        },2000)
        // alert("Payment is Successfully done");
        setIsLoading(false)
  
      } else {
        setCentredModal(false)
        alert("Payment is Failed");
        setIsLoading(false)
      }

    }).catch((error)=>{
      console.log('order-payment Api Error ------- ',error)
      NotificationManager.success('Payment is not done');
      setIsLoading(false)
    })
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const ForgetPass = () => {
    setModalShow(true)
  }

  const Navigate_To_SignUp = () => {
    
  };

  const Json = [
    {
      id: "1",
      product: "Black Handbag",
      quantity: "1",
      price: "299.00",
    },
    {
      id: "2",
      product: "Glasses",
      quantity: "1",
      price: "101.00",
    },
  ];

  const currencies = [
    {
      value: "Cameroon",
      label: "Cameroon",
    },
    {
      value: "Vanuatu",
      label: "Vanuatu",
    },
    {
      value: "Brunei",
      label: "Brunei",
    },
    {
      value: "Bulgaria",
      label: "Bulgaria",
    },
    {
      value: "Burkina Faso",
      label: "Burkina Faso",
    },
    {
      value: "Burundi",
      label: "Burundi",
    },
  ];

  // Cart.map((item)=>{
  //   setStateProductUnits(item.cartQuantity),
  //   setStateProductId(item.id)
  // })



  const HandleCheckOut = () => {
    
    

    axios.post(`${Api}/cart/get_or_add_item/`,{
      "product_units": 5,
      "i_product": 5
    })
    .then((res)=>{
      console.log('CheckOut Api Response ---- ',res)
    }).catch((error)=>{
      console.log('CheckOut Api Error ---- ',error)
    })
  }

  const HandleFormChange = () => {
    setStateFormChange(!stateFormChange)
  }

  const HandleSignUp = () => {

    stateEmail && phone && lastname && statePassword && countryname && state && address && zip ? (
      axios.post(`${Api}/authentication/signup/`,{
        "email": stateEmail,
        "phone_number": phone,
        "username": lastname,
        "password": statePassword,
        "country" : countryname,
        "state": state,
        "street":address,
        "zip": zip
      }).then((res)=>{
        console.log('Signup Api Response ------ ',res)
        NotificationManager.success('Your account has been created Successfully')
        setStateFormChange(true)
      }).catch((err)=>{
        console.log('Signup Api Error ------- ',err)
        NotificationManager.success('Something Went Wrong')
      })
    ) : alert('Some Fields are Missing');
    
    
  }

  const handleSubmit = (data) => {
    data.preventDefault()
    axios.post(`${Api}/authentication/signup/`,{
      "email": stateEmail,
      "phone_number": phone,
      "username": lastname,
      "password": statePassword,
      "country" : countryname,
      "state": state,
      "street":address,
      "zip": zip
    }).then((res)=>{
      console.log('Signup Api Response ------ ',res)
      // console.log('Signup Api Response Email check ------ ',res.data.debug_message.email[0])
      // if(res.data.debug_message.email[0] == 'This field must be unique.') {
      //   NotificationManager.error('This Email is Already Exists')
      // }else{
        NotificationManager.success('Your account has been created Successfully')
        // LoginData()
      // }
      
      setStateFormChange(!stateFormChange)
    }).catch((err)=>{
      console.log('Signup Api Error ------- ',err)
      NotificationManager.error('Something Went Wrong')
    })
  }

  const LoginData = (data) => {
    data.preventDefault()
    axios.post(`${Api}/authentication/login/`,{
      "login": stateEmail,
      "password": statePassword
    })
    .then((res)=>{
      console.log('Login Successfully', res.data)
      console.log('Login Token', res.data.token)
      if(res.data.detail == 'Login successful'){
        sessionStorage.setItem('Token',res.data.token);
        NotificationManager.success('Login Successfully');
        setStateToken(true)
      }
    })
    .catch((err)=>{
      console.log('Login Api Error', err.response);
      NotificationManager.error(err.response.data.detail);
    })
    
  }

  const HeaderData = () => {
    setStateToken(false)
  }

  return (
    <>
    
    
      <Container fluid>
      <Header HeaderData={HeaderData}/>
        <Row id='checkout-mainId'>
        <LoaderModal 
          show={isLoading}
        />
          {/* <Col>
          
          </Col> */}
        </Row>
        {Cart.length > 0 ? (
          <>
            <Row className="checkout-maincontainer-row">
              <Col lg={12} sm={12} className="checkout-maincontainer-row-col1">
                <h4 className="checkout-maincontainer-row-col1-h4">
                  Shopping Cart{" "}
                </h4>
                <FiChevronRight className="checkout-maincontainer-row-col1-icon" />
                <h4 className="checkout-maincontainer-row-col1-h4">
                  Checkout{" "}
                </h4>
                <FiChevronRight className="checkout-maincontainer-row-col1-icon" />
                <h4 className="checkout-maincontainer-row-col1-h4-1">
                  Order Complete
                </h4>
              </Col>
            </Row>

            <Row className="checkout-maincontainer-row1">
              <Col lg={7} sm={12}>
                <p className="checkout-maincontainer-row1-col-p">
                  {stateFormChange ? 'If you already have an account?' : 'If you dont have an account?'}
                  
                  <span className="checkout-maincontainer-row1-col-p-span" onClick={HandleFormChange}>
                    {stateFormChange ? 'Login' : 'Signup' }
                  </span>
                </p>

                {
                  stateFormChange ? (
                    <>
                    <h4 className="checkout-maincontainer-row1-col-h4">
                  Create Your Account
                </h4>
                <form
                onSubmit={(e)=>handleSubmit(e)}
                >
                  <Row>

                    <Col lg={12} >
                      <TextField
                        name="full"
                        fullWidth
                        required
                        id="standard-basic"
                        label="Full name"
                        variant="standard"
                        autoFocus
                        value={lastname}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        // error={!lastname}
                      />
                    </Col>

                    <Col lg={12}  >
                      <div style={{ margin: "1em" }} />
                      <TextField
                        required
                        fullWidth
                        id="standard-select-currency"
                        select
                        label="Country / Region"
                        defaultValue=""
                        variant="standard"
                        value={countryname}
                        onChange={(e) => {
                          setCountryName(e.target.value);
                        }}
                        // error={!lastname}
                      >
                        {currencies.map((option,id) => (                       
                        <MenuItem key={id} value={option.value}   className="checkout_menu">
                            {option.label}
                          </MenuItem>
                         
                        ))}
                      </TextField>
                      <div style={{ margin: "1em" }} />
                      <TextField
                        required
                        fullWidth
                        id="standard-basic"
                        label="Street address"
                        variant="standard"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        // error={!address}
                      />
                      <div style={{ margin: "1em" }} />

                      <TextField
                        required
                        fullWidth
                        id="standard-select-currency"
                        select
                        label="State / Country"
                        defaultValue=""
                        variant="standard"
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                        // error={!state}
                      >
                        {currencies.map((option,id) => (
                          <MenuItem key={id} value={option.value} className="checkout_menu">
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>

                      <div style={{ margin: "1em" }} />
                      <TextField
                        type="number"
                        required
                        fullWidth
                        id="standard-basic"
                        label="Postcode / Zip"
                        variant="standard"
                        value={zip}
                        onChange={(e) => {
                          setZip(e.target.value);
                        }}
                        // error={!zip}
                      />
                      <div style={{ margin: "1em" }} />
                      <TextField
                        type="number"
                        required
                        fullWidth
                        id="standard-basic"
                        label="Phone"
                        variant="standard"
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                        Max='11'
                        // error={!zip}
                      />
                      <div style={{ margin: "1em" }} />
                      <TextField
                        type='email'
                        name="email"
                        required
                        fullWidth
                        id="standard-basic"
                        label="Email address"
                        variant="standard"
                        value={useremail}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        // error={!email}
                      />
                      {/* <div style={{ margin: "1em" }} /> */}
                      
                      <div
                style={{
                  marginTop: "1em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >

<FormControl fullWidth variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={e=>setStatePassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
                {/* <FormControl fullWidth required variant="standard">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                  variant="standard"
                    style={{ width: "30em" }}
                    placeholder="Password"
                    onChange={e=>setStatePassword(e.target.value)}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl> */}
              </div>

              <div style={{ margin: "1em" }} />

        {/* <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword1 ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
                      
                      {/* <TextField
                        fullWidth
                        minRows={4}
                        multiline
                        id="filled-basic"
                        label="Order notes (Optional)"
                        variant="filled"
                      /> */}

                          <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                        
                      
                    </Col>

                    {/* <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button> */}
                  </Row>
                </form>
                    </>
                  ) : (
                    Token || stateToken == true ? (
                      <div className="checkout-success">
                        <BsCheckCircle className="checkout-success-icon" />
                        <p className="checkout-success-p">Login Successful </p>
                      </div>
                    ) : (
                      <>

                    <ForgetModal    
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    
                    <form onSubmit={(e)=>{LoginData(e)}}>
                    <Row
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        marginBottom: "5em",
                      }}
                    >
                      
                        <h4
                          style={{
                            width: "100%",
                            textAlign: "center",
                            marginBottom: "1em",
                            fontWeight: "700",
                            fontFamily: "ui-sans-serif",
                            color: "#343a40eb",
                            fontSize:"4em"
                          }}
                        >
                          Login
                        </h4>
          
                        <TextField
                          required
                          autoComplete="off"
                          type="email"
                          name="email"
                          onChange={e=>setStateEmail(e.target.value)}
                          style={{ width: "30em" }}
                          variant="outlined"
                          placeholder="Email Address"
                          defaultValue=" "
                        />
          
                        <div
                          style={{
                            marginTop: "2em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FormControl required sx={{ m: 1, width: "25ch" }} variant="outlined">
                            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                            <OutlinedInput
                              style={{ width: "30em" }}
                              placeholder="Password"
                              onChange={e=>setStatePassword(e.target.value)}
                              id="outlined-adornment-password"
                              type={showPassword ? "text" : "password"}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                            />
                          </FormControl>
                        </div>
          
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "-21em",
                            marginTop: "0.1em",
                          }}
                        >
                          <p
                            style={{
                              display: "flex",
                              textAlign: "center",
                              borderWidth: "1px",
                              borderColor: "black",
                              color: "black",
                              cursor: "pointer",
                              fontSize:'13px',
                              marginLeft:'-3em',
                              marginTop:'1em'
                            }}
          
                            onClick={ForgetPass}
                          >
                            Forget Password?
                          </p>
                        </div>
          
                        <div style={{ marginTop: "2em" }} />
          
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                          type="submit"
                            variant="contained"
                            style={{
                              backgroundColor: "#343a40",
                              color: "#fff",
                              marginRight: "1em",
                              width: "10em",
                            }}
                          >
                            Login
                          </Button>
                          <Button
                            onClick={Navigate_To_SignUp}
                            variant="contained"
                            style={{ width: "10em" }}
                          >
                            SignUp
                          </Button>
                        </div>
                    </Row>
                    </form>
                    </>
                    )
                  )
                }
              </Col>

              <Col lg={5} sm={12} className="checkout-maincontainer-row1-col2">
                <h5 className="checkout-maincontainer-row1-col2-h5">
                  Your Order
                </h5>
                <div className="checkout-maincontainer-row1-div">
                  <h6 className="checkout-maincontainer-row1-col2-h6">
                    Product
                  </h6>
                  <div
                    style={{
                      borderBottom: "1px solid rgba(0, 0, 0, 0.107)",
                      marginTop: "1em",
                    }}
                  />
                  <div style={{ marginTop: "1em", marginLeft: "1em" }} />
                  {Cart.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col  className="checkout-maincontainer-row2-col3">
                          <p className="checkout-maincontainer-row1-col2-p">
                            {item.name} x {item.cartQuantity}
                          </p>
                          <div style={{ marginTop: "1em" }} />
                          <p className="checkout-maincontainer-row1-col2-p1">
                            ${item.price}
                          </p>
                        </Col>
                      </Row>
                    );
                  })}

                  <div
                    style={{
                      borderBottom: "1px solid rgba(0, 0, 0, 0.107)",
                      marginTop: "1em",
                      marginBottom: "1em",
                    }}
                  />

                  <Row>
                    <Col className="checkout-maincontainer-row3-col1">
                      <h5>Total</h5>
                      <h5>${Total_amount}</h5>
                    </Col>
                  </Row>

                  <div
                    style={{
                      borderBottom: "1px solid rgba(0, 0, 0, 0.107)",
                      marginTop: "1em",
                      marginBottom: "1em",
                    }}
                  />

                  <Row>
                    <Col xlg={12} lg={12} sm={12}>
                      <h6 className="checkout-maincontainer-row4-col1">
                        Payment method
                      </h6>
                    </Col>
                    <Col>
                      <p className="checkout-maincontainer-row4-col2-p">
                        Stripe Payment Method is available for your state.
                        Please contact us if you require assistance or wish to
                        make alternate arrangements.
                      </p>
                    </Col>
                  </Row>
                </div>
                
                
                {Token
                // firstname 
                // &&
                // lastname &&
                // countryname &&
                // address &&
                // state &&
                // useremail &&
                // zip 
                ? 
                (
                  <StripeCheckout
                    name="Stripe Payment"
                    currency="USD"
                    // billingAddress
                    // shippingAddress
                    amount={Total_amount * 100}
                    token={onToken}
                    stripeKey={'pk_test_51MGeSgLN0C8PbbSaxqzV70km0tvzZeZ29amk7P6SMlHqS9H84fLYinRLvYHDle3d5zoMlFrUzdWofuqXfMsI0zAT00f3TmvCkB'}
                  >
                    <Button
                    
                      type="submit"
                      variant="contained"
                      className="checkout-maincontainer-row1-col2-button"
                    >
                       Place Order
                    </Button>
                    </StripeCheckout>
                ) : (
                  <button
                    disabled
                    type="submit"
                    variant="contained"
                    className="checkout-maincontainer-row1-col2-button notAllowed"
                  >
                    Place Order
                  </button>
                )
                }
                
              </Col>
            </Row>
          </>
        ) 
        : (
          <div
            style={{
              margin: "10em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 style={{ color: "#777" }}>Cart is Empty</h2>
          </div>
        )}

             <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <img src="https://thumbs.dreamstime.com/b/thank-you-your-order-online-business-owner-packaging-shopping-basket-trolley-vector-stock-illustration-eps-223400032.jpg"/>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
            <Footer />
          
      </Container>
    </>
  );
}

export default Checkout;
