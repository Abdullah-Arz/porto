import React from 'react';
import MainTitle from '../../Components/MainTitle';
import './home.scss';
import { useNavigate } from "react-router-dom";
import Sale_banner from '../../Components/Sale_banner';
import Categories from '../../Components/Catergories';
import Footer from '../../Components/Footer';
import Popular_product from '../../Components/Popular_product';
import QA_Comp from '../../Components/QA_Comp';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MaxPriceRange, PriceRange } from '../../Redux/cartSystem';


function Home() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(PriceRange(0))
    dispatch(MaxPriceRange(1000))
  })
  

  
  return (
    <div >
      <MainTitle />
      <Categories/>
      <Sale_banner/>
      <Popular_product/>
      <QA_Comp/>
      <Footer/>
      
    </div>
  )
}

export default Home