import React, {useState, useEffect} from 'react';
import {PaymentElement, PaymentRequestButtonElement, useStripe} from '@stripe/react-stripe-js';

const CheckoutForm = () => {

  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1099,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });
      pr.canMakePayment().then(result => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);
  
  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{paymentRequest}} />
  }
  
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;