import React,{ useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import './signup.scss';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { TrySharp, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MaxPriceRange, PriceRange } from "../../Redux/cartSystem";
import { useEffect } from "react";
import axios from "axios";
import {  NotificationManager } from "react-notifications";

// import { UserAuth } from "../../context/AuthContext";
// import GoogleButton from 'react-google-button'
// import GithubButton from 'react-github-login-button'
// import FacebookLogin from 'react-facebook-login';
// import fb from '../../assets/fb1.png'
// import ModalComp from "../../Components/ModalComp";
// import EmailAuthModal from "../../Components/EmailAuthModal";
// import { createUserWithEmailAndPassword, getAuth, sendSignInLinkToEmail } from "firebase/auth";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [stateName, setStateName] = useState();
    const [stateEmail, setStateEmail] = useState();
    const [stateNumber, setStateNumber] = useState('');
    const [statePassword ,setStatePassword] = useState();
    const [stateMsg ,setStateMsg] = useState();
    const [stateloading ,setStateLoading] = useState(false);

    const navigate = useNavigate()

    const dispatch = useDispatch()

    // const auth = getAuth()

    // const {googleSignIn, githubSignIn, facebookSignIn, user, signOut,PhoneOtp} = UserAuth();

  useEffect(()=>{
    dispatch(PriceRange(0))
    dispatch(MaxPriceRange(1000))
    // axios.get('http://localhost:8000/products/')
    // .then((res)=>console.log('Sign up Successfully', res))
    // .catch((error)=>console.log('Sign up Api Error', error))
  },[])

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
  //     // navigate('/')
  //   }
  // }, [user])

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Api = localStorage.getItem("API");

  const SignUp_Data = (data) => {
    data.preventDefault();
    console.log('SignUp Data',data)
    // alert()
    axios.post(`${Api}/authentication/signup/`,{
      "username": stateName,
      "email": stateEmail,
      "phone_number": stateNumber,
      "password": statePassword
    })
    .then((res)=>{
      if(res.data.status=== true){
        console.log('Sign up Successfully', res.data)
        NotificationManager.success(res.data.message);
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      }
      else{
        console.log('Sign up Api Error', res.data.message)
        console.log('res.data.message',)
        if(res.data.debug_message?.email[0])
        {
          NotificationManager.error("Email Should be unique")
        }
        else{
          NotificationManager.error("Please Enter Correct Data")
        }
        
      }
      
    })
    .catch((er)=>{
      console.log('Sign up Api Error', er)
 
      
      NotificationManager.error("some thing went wrong")
  })
    
    // NotificationManager.error(er);
  }

  // const SignUp_Data = (data) => {
  //   data.preventDefault()
  //   createUserWithEmailAndPassword(auth, stateEmail, statePassword)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;

  //     if(user){
  //       sendSignInLinkToEmail(auth, stateEmail, {
  //         url: 'http://localhost:3000/login',
  //         handleCodeInApp: true,
  //       }).then((result)=>{
  //         localStorage.setItem('Email', stateEmail);
  //         setStateLoading(false)
  //         alert('We have sent you an email with a link to sign in')
  //         console.log('Firebase Signup Data ------- ', user)
  //         // setStateMsg('We have sent you an email with a link to sign in');
  //       })
  //       .catch((error)=>{
  //         console.log('sendSignInLinkToEmail', error);
  //       })
  //     }

  //     // console.log('Firebase Signup Data ------- ', user)
  //     // alert('Successfully created an account')
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log('Firebase Signup Data errorCode ------- ', errorCode)
  //     if(errorCode == 'auth/email-already-in-use'){
  //       alert('Email is Already in Use')
  //     }else{
  //       alert(errorCode)
  //     }
      
  //     // ..
  //   });
  // }

 const  handlephoneChange = (e) => {
    const limit = 13;
    setStateNumber(e.target.value.slice(0, limit));
    }
  const Navigate_To_Login = () => {
    navigate('/login')
  }

  return (
    <>
    <Header />
    <Container className='SignUp-maincontainer' fluid>
      <Row>
        <Col>
          <form onSubmit={(e)=>SignUp_Data(e)}>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection:"column",
              marginTop: "9em",
              marginBottom: "5em"
            }}
          >
            <h4 style={{width:"100%", textAlign:"center",marginBottom:'1em', fontWeight:"700", fontFamily:"ui-sans-serif",color:"#343a40eb", fontSize:"4em"}}>
                SignUp
            </h4>

            <TextField
              required
              type="name"
              name="name"
              onChange={(e) => setStateName(e.target.value)}
              style={{ width: "30em" }}
              variant="outlined"
              placeholder="Email Your Name"
              autoComplete='off'
              inputProps={{autoComplete:'off'}}


            />

            <div style={{ marginTop: "2em" }} />

            <TextField
              required
              type="email"
              name="email"
              onChange={(e) => setStateEmail(e.target.value)}
              style={{ width: "30em" }}
              variant="outlined"
              placeholder="Email Your Email Address"
              autoComplete='off'
              inputProps={{autoComplete:'off'}}


            />

                <div style={{ marginTop: "2em" }} />

                <TextField
                required
                id="phone_number"
                type="number"
                name="number"
                onChange={(e) => handlephoneChange(e)}
                value={stateNumber}
                style={{ width: "30em" }}
                variant="outlined"
                placeholder="Enter Your Number"
                autoComplete='off'
                inputProps={{ inputMode: 'numeric', pattern: '[0-10]*' }}
                
                />
            
            <div style={{ marginTop: "2em", display:'flex', alignItems:"center", justifyContent:"center" }} >

            <FormControl 
            // inputProps={{ min: 11, max: 15 }}
            required 
            sx={{ m: 1, width: '25ch' }} 
            variant="outlined"
            >
          <OutlinedInput
          inputProps={{min:11, max:15}}
          style={{width:"30em"}}
          placeholder="Email Your Password"
          onChange={(e) => setStatePassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
            

          <div style={{ marginTop: "2em" }} />

          <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {stateMsg !== '' && (
                  <div>{stateMsg}</div>
                )}
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
                  Submit
                </Button>
                <Button
                  onClick={Navigate_To_Login}
                  variant="contained"
                  style={{ width: "10em" }}
                >
                  Login
                </Button>
              </div>

                  {/* <div 
                  style={{ width: "17em", marginTop:'2em' }}>
              <GoogleButton
                label='Sign up with Google'
                onClick={handleGoogleSignIn}
              />
              </div> */}
              
              {/* <div style={{ width: "17em", marginTop:'1em' }}>
              <GithubButton
                label='Sign up with GitHub'
                onClick={handleGithubSignIn}
              />
              </div> */}

              {/* <div style={{ width: "17em", marginTop:'1em' }}>
               <Button 
               onClick={handleFacebookSignIn}
               className='login-fb-img-btn'
               >
                  <img src={fb} 
                  className='login-fb-img'
                  />
                  Login with Facebook
                </Button>
              
              <div style={{ width: "17em", marginTop:'1em' }}>
                <ModalComp />
              </div>

                    

              </div> */}
          </Row>
          
          </form>   
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default SignUp;
