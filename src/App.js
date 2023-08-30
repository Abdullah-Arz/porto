import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/home";
import Category from "./Screens/category";
// import Home from './Screens/home'
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./Components/Sidebar";
import SingleProduct from "./Screens/singleProduct";
import Checkout from "./Screens/checkout";
import Login from "./Screens/login";
import SignUp from "./Screens/SignUp";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from "react-notifications";
import ForgetPass from "./Screens/ForgetPass";
import StripeCheckout from "./Screens/StripeCheckout";

function App() {
  let API = "http://10.0.11.182:8520";
  localStorage.setItem("API", API);
  return (
    <Provider store={store}>
        <NotificationContainer />
      <BrowserRouter>
        {/* <Sidebar> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Category />} />
          <Route path="categories/:id" element={<Category />} />
          <Route path="categories/singleproduct" element={<SingleProduct />} />
          <Route path="categories/singleproduct/:id" element={<SingleProduct />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forget" element={<ForgetPass />} />
          <Route path="stripe" element={<StripeCheckout />} />
        </Routes>
        {/* </Sidebar> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
