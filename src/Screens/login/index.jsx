import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./login.scss";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MaxPriceRange, PriceRange } from "../../Redux/cartSystem";
import { useEffect } from "react";
import axios from "axios";
import {  NotificationManager } from "react-notifications";
// import { UserAuth } from "../../context/AuthContext";
// import GoogleButton from 'react-google-button'
// import GithubButton from 'react-github-login-button'
// import FacebookLogin from 'react-facebook-login';
import fb from '../../assets/fb1.png'
import ForgetModal from "../../Components/ForgetModal";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [stateEmail, setStateEmail] = useState();
  const [statePassword ,setStatePassword] = useState();
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch()
  // const {googleSignIn, githubSignIn, facebookSignIn, user, signOut} = UserAuth();
  // const auth= getAuth()

  const Api = localStorage.getItem("API");

  useEffect(()=>{
    dispatch(PriceRange(0))
    dispatch(MaxPriceRange(1000))
  },[])

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const Navigate_To_SignUp = () => {
    navigate("/signup");
  };

  const LoginData = (data) => {

      data.preventDefault();
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
          navigate("/")
        }
      })
      .catch((err)=>{
        console.log('Login Api Error', err.response);
        NotificationManager.error(err.response.data.detail);
      })
      
    }

    const ForgetPass = () => {
      setModalShow(true)
    }

  // const LoginData = (data) => {
  //     data.preventDefault()
  //     signInWithEmailAndPassword(auth, stateEmail, statePassword)
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       console.log('Firebase Signin Data ------- ', user)
  //       alert('This user is Successfully Signed in')
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log('Firebase Signin Data errorCode ------- ', errorCode)
  //       alert(errorCode)
  //       // ..
  //     });
  // }

    
  // const handleGoogleSignIn = async() => {
  //   try{
  //     await googleSignIn();
  //   } catch(error){
  //     console.log('Google Sign In error', error)
  //   }
  // }

  // const handleGithubSignIn = async() => {
  //   try{
  //       await githubSignIn();
  //   } catch(error){
  //     console.log('Google Sign In error', error)
  //   }
  // }

  // const handleFacebookSignIn = async() => {
  //   try{
  //       await facebookSignIn();

  //   } catch(error){
  //     console.log('Google Sign In error', error)
  //   }
  // }

  // useEffect(()=>{
  //   if(user != null){
  //     navigate('/')
  //   }
  // }, [user])


  return (
    <>

    <Header />
    <ForgetModal 
    show={modalShow}
    onHide={() => setModalShow(false)}
    />
    <Container className="login-maincontainer" fluid>
      
      <Row className="pb-5">
        <Col>
          {/* <div style={{ margin: "10em" }} /> */}
          <form  onSubmit={(e)=>{LoginData(e)}} >
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "10em",
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
                {/* <Button
                  onClick={Navigate_To_SignUp}
                  variant="contained"
                  style={{ width: "10em" }}
                >
                  SignUp
                </Button> */}
              </div>

              {/* <div 
                  style={{ width: "17em", marginTop:'2em' }}>
              <GoogleButton
                label='Login with Google'
                onClick={handleGoogleSignIn}
              />
              </div> */}
              
              {/* <div style={{ width: "17em", marginTop:'1em' }}>
              <GithubButton
                label='Login with GitHub'
                onClick={handleGithubSignIn}
              />
              </div> */}

              {/* <div style={{ width: "17em", marginTop:'1em' }}>

                <Button 
                onClick={handleFacebookSignIn}
                className='login-fb-img-btn'>
                  <img src={fb} 
                  className='login-fb-img'
                  />
                  Login with Facebook
                </Button>
                
              </div>
             */}
          </Row>
          </form>
        </Col>
      </Row>

      

    </Container>

    <Footer />
    </>
  );
};

export default Login;
