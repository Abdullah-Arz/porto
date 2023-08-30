import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import "../Sass/Header.scss";
import logo from "../assets/mainLogo.png";
import pink_image from "../assets/18.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCarSide,
  faCartShopping,
  faChartSimple,
  faCircleInfo,
  faCompass,
  faDoorOpen,
  faEye,
  faFile,
  faGamepad,
  faGear,
  faGlobe,
  faHandFist,
  faHandsAmericanSignLanguageInterpreting,
  faHeart,
  faLock,
  faLockOpen,
  faMoon,
  faMusic,
  faPhotoVideo,
  faScroll,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faSolarPanel,
  faSquare,
  faTrademark,
  faUser,
  faUserCircle,
  faUserTimes,
  faVirus,
  faWallet,
  
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Offcanvas,
  Button,
  Container,
  Accordion,
} from "react-bootstrap";
import Header_sidebar_text_component from "./Header_sidebar_text_component";
import { useNavigate } from "react-router-dom";
import MButton from "@mui/material/Button";
import Header_CartItem from "./Header_CartItem";
import { useSelector } from "react-redux";
import axios from "axios";
import {  NotificationManager } from "react-notifications";

const Header = ({ func, func2, openwallet, closewallet, id, HeaderData }) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState(false);
  const [resource, setResource] = useState(false);
  const [usercircle, setUserCirle] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showcart, setShowCart] = useState(false);
  const [list_cart, set_list_cart] = useState([]);
  const [category_state,set_category_state] = useState([])
  const [checkState, setCheckState] = useState(false)
  const [statequantity, setStateQuantity] = useState()
  const [stateId, setStateId] = useState([])
  const cart = []

  const API=localStorage.getItem('API')


  const navigate = useNavigate();
  const Cart = useSelector((state) => {
    return state.name.cart;
  });

  const Quantity = useSelector((state) => {
    return state.name.quantity;
  });
  const [navbar_style, setNavbar] = useState(false);
  
  const Api = localStorage.getItem("API");
  const token = sessionStorage.getItem('Token');

  let nums = [2, 3];

  useEffect(()=>{
    CategoryData()
  },[])


  

  const CategoryData = () =>{
    axios.get(`${Api}/category/`)
    .then((res)=>{
      set_category_state(res.data);
      console.log('Category Data ------- ', res.data)
    })
    .catch((error)=> {
      console.log(error);
    });  
  }
  

  const Navigate_To_Home = () => {
    navigate("/");
  };

  const Navigate_To_Categories = () => {
    // navigate("/categories");
  };

  const NavigateToCheckhOut = async() => {    

    console.log('Cart-----', Cart)
    
    // for (let persone of Cart) {
    // const i_product = persone.id
    // const product_units = persone.cartQuantity
    // cart.push({i_product, product_units})
    // }

    // console.log('State Id ----- ',cart)
    
    // axios.post(`${Api}/cart/get_or_add_item/`,cart,{
    //   headers:{
    //     Authorization: `token ${token}`
    //   }
    // })
    // .then(async(res)=>{
    //   console.log('Add to cart Api Response ---- ', res)
      NotificationManager.success('Cart Added');
    //   await HandleOrderApi()
       navigate("/checkout");
    // }).catch((error)=>{
    //   console.log('Add to cart Api Error ---- ', error)
    //   // if(!token){
    //   // NotificationManager.error('Please Login First');
    //   // }else{
    //     NotificationManager.error('Something went Wrong');
    //   // }
    // }) 
  };

  // const HandleOrderApi = () => {
  //   axios.post(`${Api}/orders/`,{},{
  //     headers:{
  //       Authorization: `token ${token}`
  //     }
  //   }).then((res)=>{
  //     console.log('Order Api Response ----- ',res)
  //     const data = res.data.details
  //     navigate("/checkout",{state: {data}});
  //   }).catch((error)=>{
  //     console.log('Order Api Error ----- ',error)
  //   })
  // }

  function get_wallet_status(status) {
    console.log("STatus---------------", status);
    setShow1(false);
  }

  useEffect(() => {
    test();

    if (openwallet == true) {
      Open_Wallet();
      setShowCart(false);
    }
  }, [func2, closewallet]);
  
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  
  window.addEventListener("scroll", changeBackground);

  function AddItems(props) {
    set_list_cart(
      (nums = nums.includes(props)
        ? nums.filter((n) => n !== props)
        : [props, ...props])
    );
    console.log("State Item---------------------------------", list_cart);
  }
  const test = () => {
    if (func == true) {
      setShowCart(true);
      setShow1(false);
    } else {
      setShowCart(false);
    }
  };

  const Open_Wallet = () => {
    if (openwallet == true) {
      setShow1(true);
      // setShowCart(false)
    } else {
      setShow1(true);
    }
  };

  const handleClose = () => {
    if (closewallet) {
      setShow1(false);
      closewallet(false);
    } else {
      setShow1(false);
    }
  };
  const handleShow = () => setShow1(true);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    if (func2) {
      func2(false);
      setShowCart(false);
    } else {
      setShowCart(false);
    }
  };

  // func(handleShowCart)
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const showDropdownState = (e) => {
    setState(!state);
  };
  const hideDropdownState = (e) => {
    setState(false);
  };

  const showDropdownRes = (e) => {
    setResource(!resource);
  };
  const hideDropdownRes = (e) => {
    setResource(false);
  };

  const showDropdownUser = (e) => {
    setUserCirle(!resource);
  };
  const hideDropdownUser = (e) => {
    setUserCirle(false);
  };
const navigateLogin=()=>{
  navigate("/login");
}
  const Navigate_To_ProfilePage = () => {
    navigate("/Profile_Screen/");
  };

  const NavigateToCategory = (data) => {
    navigate(`/categories/${data.id}`, {state: {data}})
    console.log('Selected Category -------- ',data)
  }

  const logOut = () => {

    const configData = {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
    
    axios.post(`${Api}/authentication/logout/`, {} ,configData,{
      
    })
    .then((res)=>{
      console.log('Logout Api Result ----- ', res)
      sessionStorage.clear()
      setCheckState(true)
      
    })
    .catch((error)=> {
      console.log('Logout Api Error ----- ', error)
    })

    
  }

  useEffect(()=>{
    if(checkState == true){ 
      logOut()
    }
  },[checkState])

  const Logout_handle=()=>{
    console.log('Api_token',token)
    const body = {};
    axios.post(`${API}/accounts/logout/`, body, {
          headers: {
            Authorization: `Token ${token}`,
          },
        }).then((res)=>{
          if(res.data.status === true){
            NotificationManager.success('Logout Successfully');
            sessionStorage.removeItem("Token");
            HeaderData()
            // navigate('/login')
            
          }
          else{
            token ? NotificationManager.error('Some thing went wrong') : 
            NotificationManager.error('You are not logged in')
          }
 

  }).catch((err)=>{
    console.log('logout error',err)
    NotificationManager.error('Some thing went wrong');

  })
  }


  // const handleShow = () => setShow1(!show);

  function OffCanvasExample({ name, ...props }) {
    return (
      <div>
        <Offcanvas show={show1} onHide={handleClose} {...props}>
          <div className="header-sidebar-title-maindiv">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className="sidebar-title-div-wallet">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="header-sidebar-icon-wallet"
                  />
                  <h6 className="mt-2">My wallet</h6>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
          </div>
          <Offcanvas.Body className="header-sidebar-body-div">
            If you don't have a wallet yet, you can select a provider and create
            one now.
            <div style={{ marginTop: "20px" }} />
            {/* <Wallet_modal func={get_wallet_status} /> */}
          </Offcanvas.Body>
        </Offcanvas>

        {/* CArt Modal */}

        <div>
          <Offcanvas
            className="sidebar-maindiv "
            id="mm"
            show={showcart}
            onHide={handleCloseCart}
            {...props}
          >
            <div className="header-sidebar-title-maindiv">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className="sidebar-title-div">
                    <span className="header-sidebar-span">Your cart</span>
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="header-sidebar-icon"
                    />
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
            </div>
            <Offcanvas.Body className="header-sidebar-body-div">
              <Header_CartItem cartid={id} />

              <div style={{ marginTop: "1em" }} />
              {Cart.length > 0 ? (
                <MButton
                  onClick={NavigateToCheckhOut}
                  variant="contained"
                  style={{
                    width: "100%",
                    backgroundColor: "#222529",
                    color: "white",
                  }}
                >
                  CheckOut
                </MButton>
              ) : null}

              {/* If you don't have a wallet yet, you can select a provider and create
            one now.
            <div style={{ marginTop: "20px" }} />

            <Wallets /> */}

              {/* <Wallet_modal func={get_wallet_status} /> */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    );
  }

  return (
    // <div className="header-maindiv">
    //   {["sm"].map((expand) => (
    //     <Navbar
    // sticky="top"
    // key={expand}

    // expand={expand}
    // className={navbar_style?'navbar_stick mb-3':'navbar_normal mb-3'}
    //     >
    //       <Container className="header-opensea-maindiv" fluid>
    // <Navbar.Brand
    //   className="header-opensea-text-div"
    //   onClick={Navigate_To_Home}
    // >
    //   <img className="header-image" src={logo} alt="logo" />
    //   {/* <span className="header-opensea-text">OpenSea</span> */}
    // </Navbar.Brand>
    //         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //         <Navbar.Offcanvas
    //           id={`offcanvasNavbar-expand-${expand}`}
    //           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //           placement="end"
    //         >
    //           <Offcanvas.Header closeButton>
    //             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    //               <Navbar.Brand className="header-opensea-text">
    //                 <img className="header-image" src={logo} alt="logo" />
    //               </Navbar.Brand>
    //             </Offcanvas.Title>
    //           </Offcanvas.Header>

    // <Offcanvas.Body>
    //   <Nav className="navbarScrollingDropdown-maindiv">

    //     <Nav.Link onClick={Navigate_To_Home}>
    //       <span className="navbarScrollingDropdown">Home</span>
    //     </Nav.Link>

    //     <NavDropdown
    //       title={
    //         <span onClick={()=>{Navigate_To_Categories()}} className="navbarScrollingDropdown">Categories</span>
    //       }
    //       // id={`offcanvasNavbarDropdown-expand-${expand}`}
    //       className="navbarScrollingDropdown"
    //       show={state}
    //       onMouseEnter={showDropdownState}
    //       onMouseLeave={hideDropdownState}
    //     >
    //      <div className="header-menu-icons-top-maindiv">
    //      <NavDropdown.Item className="header-menu-icons-top-maindiv-rank">
    //         <span>Rankings</span>
    //       </NavDropdown.Item>

    //       <NavDropdown.Item>Activity</NavDropdown.Item>
    //      </div>
    //     </NavDropdown>

    //     <div className="header-sidebar-button-div">

    //       <div className="header-sidebar-button-div-home">
    //       <span
    //       onClick={Navigate_To_Home}
    //       className="header-sidebar-button-div-home-span"
    //       >
    //         Home
    //       </span>
    //       </div>

    //       <div className="header-sidebar-button-div-home">
    //       <span
    //       onClick={()=>{Navigate_To_Categories()}}
    //       className="header-sidebar-button-div-home-span"
    //       >
    //         Categories
    //       </span>
    //       <div>
    //         <span>
    //           Category Points
    //         </span>
    //       </div>
    //       </div>

    //       {/* <div>
    //       <span
    //         onClick={handleShowCart}
    //         // className="navbarScrollingDropdown"
    //       >
    //         <FontAwesomeIcon
    //           icon={faCartShopping}
    //           className="header-iconwallet-facart"
    //         />
    //         {Cart.length > 0 ? (
    //           <span className="header-iconwallet-items">{Quantity}</span>
    //         ) : null }
    //       </span>
    //       </div> */}

    //       {/* <Button
    //         onClick={handleShow}
    //         className="header-sidebar-button"
    //         variant="primary"
    //       >
    //         Connect wallet
    //       </Button>{" "} */}
    //     </div>
    //   </Nav>
    // </Offcanvas.Body>

    //         </Navbar.Offcanvas>

    //         <Offcanvas.Body>
    //             <Nav className="navbarScrollingDropdown-maindiv">

    //               {/* Erase data after 575 pixels*/}

    //               {/* <div className="header-sidebar-data-erase"> */}

    // <Nav.Link>
    //   <span
    //     // onClick={handleShow}
    //     className="navbarScrollingDropdown"
    //   >
    //     <FontAwesomeIcon
    //       icon={faUser}
    //       className="header-iconwallet"
    //     />
    //   </span>
    // </Nav.Link>
    // <Nav.Link>
    //   <span
    //     className="navbarScrollingDropdown"
    //   >
    //     <FontAwesomeIcon
    //       icon={faHeart}
    //       className="header-iconwallet1"
    //     />
    //   </span>
    // </Nav.Link>
    // <Nav.Link>
    //   <span
    //     onClick={handleShowCart}
    //     className="navbarScrollingDropdown"
    //   >
    //     <FontAwesomeIcon
    //       icon={faCartShopping}
    //       className="header-iconwallet2"
    //     />
    //     {Cart.length > 0 ? (
    //       <span className="header-iconwallet-items">{Quantity}</span>
    //     ) : null }
    //   </span>
    // </Nav.Link>

    //               {/* <div className="header-sidebar-button-div">
    //                 <Button
    //                   onClick={handleShow}
    //                   className="header-sidebar-button"
    //                   variant="primary"
    //                 >
    //                   Connect wallet
    //                 </Button>{" "}
    //               </div> */}
    //             </Nav>
    //           </Offcanvas.Body>

    //       </Container>
    //     </Navbar>
    //   ))}
    //   {["end"].map((placement, idx) => (
    //     <OffCanvasExample
    //       className="sidebar-maindiv"
    //       key={idx}
    //       placement={placement}
    //       name={placement}
    //     />
    //   ))}
    // </div>

    <div className="header-maindiv">
      {["sm"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className={navbar_style ? "navbar_stick mb-3" : "navbar_normal mb-3"}
        >
          <Container>
            <Navbar.Brand
              className="header-opensea-text-div"
              onClick={Navigate_To_Home}
            >
              <img className="header-image" src={logo} alt="logo" />
              {/* <span className="header-opensea-text">OpenSea</span> */}
            </Navbar.Brand>

            <span onClick={handleShowCart} className="header-mobile-cart">
        <FontAwesomeIcon icon={faCartShopping} className="header-iconwallet2-facart" />
        {Cart.length > 0 ? (
          <span className="header-iconwallet-items-facart">{Quantity}</span>
        ) : null}
      </span>
      
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand className="header-opensea-text">
                    <img className="header-image" src={logo} alt="logo" />
                  </Navbar.Brand>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                
                <Nav>
                  <Nav.Link onClick={Navigate_To_Home}>
                    <span
                      // className="navbarScrollingDropdown"
                      style={{ marginRight: "1em", marginLeft: "1em", fontWeight:"1000" }}
                    >
                      Home
                    </span>
                  </Nav.Link>

                  <NavDropdown
                    title={
                      <span
                        onClick={() => {
                          Navigate_To_Categories();
                        }}
                        style={{ marginRight: "1em", marginLeft: "1em", fontWeight:"1000" }}
                      >
                        Categories
                      </span>
                    }
                    // id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="navbarScrollingDropdown"
                    show={state}
                    onMouseEnter={showDropdownState}
                    onMouseLeave={hideDropdownState}
                  >
                    <div className="header-menu-icons-top-maindiv">
                      {
                        
                      }
                      {
                        category_state.map((item,index)=>{
                          return(
                            <NavDropdown.Item key={index} onClick={()=>NavigateToCategory(item)} className="header-menu-icons-top-maindiv-rank">
                              <span>{item.name}</span>
                            </NavDropdown.Item>
                          )
                        })
                      }

                      {/* <NavDropdown.Item>Activity</NavDropdown.Item> */}
                    </div>
                  </NavDropdown>
                  {/* </div> */}
                </Nav>

                <Nav>
                  <Nav.Link>
                    <span
                      onClick={navigateLogin}
                      className="navbarScrollingDropdown"
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        className="header-iconwallet"
                      />
                    </span>
                  </Nav.Link>
                  <Nav.Link>
                    <span className="navbarScrollingDropdown">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="header-iconwallet1"
                      />
                    </span>
                  </Nav.Link>
                  <Nav.Link>
                    <span
                      onClick={handleShowCart}
                      className="navbarScrollingDropdown"
                    >
                      <div className="navbarScrollingDropdown-div">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="header-iconwallet2"
                      />
                      {Cart.length > 0 ? (
                        <span className="header-iconwallet-items">
                          {Quantity}
                        </span>
                      ) : null}
                      </div>
                    </span>
                  </Nav.Link>
                  <Nav.Link>
                    {token ? (
                      <span
                      onClick={Logout_handle}
                      className="navbarScrollingDropdown"
                    >
                       <FontAwesomeIcon
                        icon={faUser}
                        className="header-iconwallet"
                      />
                    </span>
                    ) : (
                      <span
                      onClick={navigateLogin}
                      className="navbarScrollingDropdown"
                    >
                       <FontAwesomeIcon
                        icon={faLock}
                        className="header-iconwallet"
                      />
                    </span>
                      // <Link to='/signin'>Signin</Link>
                    )}
                  </Nav.Link>
                </Nav>
                {/* </div> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {["end"].map((placement, idx) => (
        <OffCanvasExample
          className="sidebar-maindiv"
          key={idx}
          placement={placement}
          name={placement}
        />
      ))}

      
    </div>
  );
};

export default Header;
