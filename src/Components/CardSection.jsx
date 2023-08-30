import { CardElement } from "@stripe/react-stripe-js";


const CARD_ELEMENT_OPTIONS = {
    style: {
    base: {
    color: "green",
    fontSize: "24px",
    fontFamily: "sans-serif",
    fontSmoothing: "antialiased",
    "::placeholder": {
    color: "#CDF7DF",
    },
    },
    invalid: {
    color: "red",
    ":focus": {
    color: "red",
    },
    },
    }
}

export default function CardSection () {
    
return (
<label style={{width:"100%"}}>
<div style={{textAlign:"center",fontSize:"20px"}}>Fill the Card details</div>
<CardElement options={CARD_ELEMENT_OPTIONS} />
</label>
);
}