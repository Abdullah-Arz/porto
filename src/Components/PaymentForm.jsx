import { Button } from "@mui/material";
import { CardElement, ElementsConsumer, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { Component} from "react";
import CardSection from "./CardSection";

const CardComponent = () => {
  
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event)=>{
    alert()
    event.preventDefault();
    if(!stripe || !elements){
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if(result.error){
      console.log('Error', result.error.message);
    }else{
      console.log('Result', result.token);
    }
  }

return (
<div className='card container'>
<form onSubmit={handleSubmit}>
<CardSection />
<Button variant="contained" color="primary" disabled={!stripe} className="btn-pay">Buy Now</Button>
</form>
</div>
);
}


export default function InjectCheckout(){
  return ( <ElementsConsumer>
    {
      ({stripe,elements})=>(
        <CardComponent stripe={stripe} elements={elements} />
      )
    }
  </ElementsConsumer>
  );
};