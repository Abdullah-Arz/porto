import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import {  NotificationManager } from "react-notifications";
import { useNavigate } from 'react-router-dom';

const ForgetModal = (props) => {

    const [stateEmail, setStateEmail] = useState();
    const Api = localStorage.getItem("API");
    const navigate = useNavigate();

    const SubmitEmail = () => {
        ForgetPass()
    }

    const ForgetPass = () => {
        axios.post(`${Api}/authentication/send-reset-password-link/`,{
            "login": stateEmail,
          })
          .then((res)=>{
            console.log('Forget Successfully', res.data.detail)
              NotificationManager.success(`${res.data.detail} to your Email`);
              props.onHide()
            }
          )
          .catch((err)=>{
            console.log('Forget Api Error', err.response);
            if(err.response.data.detail == 'User not found'){
                NotificationManager.error(err.response.data.detail);
            }else{
                NotificationManager.error('Something Went Wrong');
            }
            
          })
    }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className='fs-6' id="contained-modal-title-vcenter">
          Enter Your Registered Email
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField 
        type="email"
        name="email"
        variant="outlined"
        placeholder='abc@gmail.com'
        value={stateEmail}
        onChange={(e) => setStateEmail(e.target.value)}
        fullWidth
        autoComplete="off"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{SubmitEmail()}}>Send</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ForgetModal