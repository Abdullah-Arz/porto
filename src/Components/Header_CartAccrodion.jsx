import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../Sass/Header_CartAccrodion.scss'

function Header_CartAccrodion() {
  return (
    <div>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Send to a different wallet</Accordion.Header>
        <Accordion.Body>
          <input className='cart-accordion-input' placeholder='e.g. 0x1ed3... or destination.eth'/>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    </div>
  )
}

export default Header_CartAccrodion
