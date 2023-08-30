import { Button, Rating, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NotificationManager } from 'react-notifications'

function RatingForm({data}) {

  const [stateValue, setStateValue] = useState()
  const [stateRating, setStateRating] = useState(0)

  const Api = localStorage.getItem('API');
  const Token = sessionStorage.getItem('Token');
  const product_id = data.id

  const handleReview = (data) => {
    setStateValue(data)
  }

  const handleRating = (data) => {
    setStateRating(data)
  }

  const handleButton = () => {
    axios.post(`${Api}/reviews/`,{
      "rating": stateRating,
      "review": stateValue,
      "product": product_id
    },{
      headers : {
        Authorization: `token ${Token}`
      }
    }
    )
    .then((res)=>{
      console.log('Review post Api Response ----- ', res)
      // setStateValue(null)
      // setStateRating(0)
      window.location.reload(true);
      NotificationManager.success('Thank you for your Feedback😊')
    }).catch((error)=>{
      console.log('Review post Api Error ----- ', error.data)
      NotificationManager.error('Something Went Wrong')
    })
  }

  return (
    <Container fluid>
        <Row>
            <Col lg={12} sm={12}>
            <p>Your rating *</p>
            <Rating
                name="size-medium"
                defaultValue={2}
                value={stateRating}
                onChange={(event, newValue) => {
                  handleRating(newValue);
                }}
            />

            <div style={{marginTop:"2em"}} />
{/*     
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth  />

            <div style={{marginTop:"2em"}} />

            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth  />

            <div style={{marginTop:"2em"}} /> */}

            <TextField
          id="outlined-multiline-static"
          label="Your Review"
          multiline
          rows={4}
          fullWidth
          value={stateValue}
          onChange={(e)=>handleReview(e.target.value)}
        />
            <div style={{marginTop:"2em"}} />
            </Col>
            <Col lg={12} sm={12} >
        <Button
        onClick={handleButton} 
        variant='contained' 
        style={{backgroundColor:"#222529"}}>
          Submit
        </Button>
        </Col>
        </Row>
    </Container>  
    )
}

export default RatingForm