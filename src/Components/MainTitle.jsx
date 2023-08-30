import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigation } from 'react-router-dom'
import '../Sass/MainTitle.scss';
import Header from './Header';

function MainTitle() {

  return (
    <div className='home-maindiv'>
      
     <div style={{display:"block", position:"relative"}}>
     {/* // Header Component */}
      <Header />
      
      {/* // Main Image       */}
      <div
        className='home-div-image'
      >
        
        <div className='home-img-text'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h2 className='home-img-text-winter'>Winter Fashion Trends</h2>
              <h2 className='home-img-text-off'>Get up to 30% off</h2>
              <h2 className='home-img-text-jacket'>on Jackets</h2>
              <h4 className='home-img-text-price'>Starting at 
              <span className='home-img-text-price1'>$199.99</span>
              </h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                SHOP NOW
              </a>
            </div>
          </div>
          </div>
        
      </div>
     </div>

      
</div>
  )
}

export default MainTitle