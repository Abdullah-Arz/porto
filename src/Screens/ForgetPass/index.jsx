import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./Forget.scss";
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
import ForgetModal from "../../Components/ForgetModal";


const ForgetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [stateEmail, setStateEmail] = useState();
  const [statePassword ,setStatePassword] = useState();
  const dispatch = useDispatch()
  const {id} = useParams()

  console.log('Id ---- ',id)

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

  const SubmitNewPass = (data) => {

      data.preventDefault();
      axios.post(`${Api}/authentication/reset-password/`,{
        "user_id": "",
        "timestamp": null,
        "signature": "",
        "password": ""
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

  return (
    <>

    <Header />
    <Container className="forget-maincontainer" fluid>
      
      <Row className="pb-5">
        <Col>
          <form  onSubmit={(e)=>{SubmitNewPass(e)}} >
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
                Forget Password
              </h4>

              <div
                style={{
                  marginTop: "2em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FormControl required sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <OutlinedInput
                    style={{ width: "30em" }}
                    placeholder="New Password"
                    onChange={e=>setStatePassword(e.target.value)}
                    id="outlined-adornment-password"
                    autoComplete="off"
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

              {/* <div
                style={{
                  marginTop: "2em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FormControl required sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <OutlinedInput
                    style={{ width: "30em" }}
                    placeholder="Confirm Password"
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
              </div> */}

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
                  Submit
                </Button>
              </div>
          </Row>
          </form>
        </Col>
      </Row>

      

    </Container>

    <Footer />
    </>
  );
};

export default ForgetPass;
