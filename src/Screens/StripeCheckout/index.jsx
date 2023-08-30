import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './StripeCheckout.scss'
import CheckoutForm from "../../Components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51Mc1A9Chg18ijhGETvgTddMGzm9gy4uJ4iTlPO6P1vSJsbnctncCJlI7qmObPGbF0QBuC8sekMLp4DCb1IVfv2fa00tTJnPBx4");

const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // fetch("/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret: '{{sk_test_51Mc1A9Chg18ijhGEeegI57JP2QQCcMkNwjqQUZ41WG9rYRu50evlnrJqw6gteYSUbdjAVHd1j6JkvlLAE3fWGEmP00VNv8VGVq}}',
    appearance,
  };

  return (
        <Elements 
          options={options}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
  );
}

export default StripeCheckout