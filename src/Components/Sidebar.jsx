import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../Sass/Sidebar.scss';
import PriceFilter from './PriceFilter';

function Sidebar() {

    const [select, setSelect] = useState(false)
    const [select1, setSelect1] = useState(false)
    const [select2, setSelect2] = useState(false)
    const [select3, setSelect3] = useState(false)

    const [selectcolor, setSelectColor] = useState(false)
    const [selectcolor1, setSelectColor1] = useState(false)
    const [selectcolor2, setSelectColor2] = useState(false)
    const [selectcolor3, setSelectColor3] = useState(false)
    const [selectcolor4, setSelectColor4] = useState(false)

    const Select_Size = () => {
        setSelect(!select)
    }

    const Select_Size1 = () => {
        setSelect1(!select1)
    }

    const Select_Size2 = () => {
        setSelect2(!select2)
    }

    const Select_Size3 = () => {
        setSelect3(!select3)
    }

    const SelectColor = () => {
        setSelectColor(!selectcolor)
    }

    const SelectColor1 = () => {
        setSelectColor1(!selectcolor1)
    }

    const SelectColor2 = () => {
        setSelectColor2(!selectcolor2)
    }

    const SelectColor3 = () => {
        setSelectColor3(!selectcolor3)
    }

    const SelectColor4 = () => {
        setSelectColor4(!selectcolor4)
    }

    const JsonData = [
      {
        "id" : "1",
        "name" : "CATEGORIES",
        "subname" : "Accessories",
        "subname1" : "Bags",
        "subname2" : "Watches",
        "subname3" : "Electronics",
        "subname4" : "Headphone",
        "subname5" : "Toys",
        "subname6" : "Fashion",
        "subname7" : "Shoes",
        "subname8" : "T-shirts",
        "subname9" : "Trousers",
        "subname10" : "PRICE",
        "subname11" : "COLOR",
        "color" : "Black",
        "color1" : "Blue",
        "color2" : "Green",
        "color3" : "Indigo",
        "color4" : "Red",
        "subname12" : "SIZES",
        "subname13" : "BRAND",
        "subname14" : "Adidas"
      }
    ]


  return (
    <div className='sidebar-maincontainer'>
        {
          JsonData.map((item,index)=>{
            return(
              <Accordion flush key={index}>
      {/* <Accordion.Item eventKey="0">
        
        <Accordion.Header>{item.name}</Accordion.Header>
        <Accordion.Body>
        <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{item.subname}</Accordion.Header>
        <Accordion.Body>
         <p className='sidebar-accessories-p'>{item.subname1}</p>
         <p className='sidebar-accessories-p'>{item.subname2}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{item.subname3}</Accordion.Header>
        <Accordion.Body>
         <p className='sidebar-accessories-p'>{item.subname4}</p>
         <p className='sidebar-accessories-p'>{item.subname5}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>{item.subname6}</Accordion.Header>
        <Accordion.Body>
         <p className='sidebar-accessories-p'>{item.subname7}</p>
         <p className='sidebar-accessories-p'>{item.subname8}</p>
         <p className='sidebar-accessories-p'>{item.subname9}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Accordion.Body>
      </Accordion.Item> */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>{item.subname10}</Accordion.Header>
        <Accordion.Body>
        <PriceFilter />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>{item.subname11}</Accordion.Header>
        <Accordion.Body>
            <div onClick={SelectColor} className='sidebar-color-maindiv'>
            <div  className='sidebar-color-div'>
                { selectcolor ? <FontAwesomeIcon icon={faCheck} color='white' /> : null}
            </div>
            <p className='sidebar-color-div-p'>{item.color}</p>
            </div>
            <div onClick={SelectColor1} className='sidebar-color-maindiv1'>
            <div className='sidebar-color-div1'>
            { selectcolor1 ? <FontAwesomeIcon icon={faCheck} color='white' /> : null}
            </div>
            <p className='sidebar-color-div-p1'>{item.color1}</p>
            </div>
            <div onClick={SelectColor2} className='sidebar-color-maindiv2'>
            <div className='sidebar-color-div2'>
            { selectcolor2 ? <FontAwesomeIcon icon={faCheck} color='white' /> : null}
            </div>
            <p className='sidebar-color-div-p2'>{item.color2}</p>
            </div>
            <div onClick={SelectColor3} className='sidebar-color-maindiv3'>
            <div className='sidebar-color-div3'>
            { selectcolor3 ? <FontAwesomeIcon icon={faCheck} color='white' /> : null}
            </div>
            <p className='sidebar-color-div-p3'>{item.color3}</p>
            </div>
            <div onClick={SelectColor4} className='sidebar-color-maindiv4'>
            <div className='sidebar-color-div4'>
            { selectcolor4 ? <FontAwesomeIcon icon={faCheck} color='white' /> : null}
            </div>
            <p className='sidebar-color-div-p4'>{item.color4}</p>
            </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>{item.subname12}</Accordion.Header>
        <Accordion.Body>
           <div className='sidebar-size-maindiv'>
           <div 
           onClick={Select_Size} 
           style={ select == true ? {backgroundColor:'black',color:'white'} : {backgroundColor:'white'} } 
           className='sidebar-size-div'>
            <p style={ select == true ? {color:'white'} : {color:'black'} } className='sidebar-size-div1-p'>XL</p>
            </div>
            <div onClick={Select_Size1} style={ select1 == true ? {backgroundColor:'black',color:'#fff'} : {backgroundColor:'white'} } className='sidebar-size-div'>
            <p style={ select1 == true ? {color:'white'} : {color:'black'} } className='sidebar-size-div1-p'>L</p>
            </div>
            <div onClick={Select_Size2} style={ select2 == true ? {backgroundColor:'black',color:'#fff'} : {backgroundColor:'white'} } className='sidebar-size-div'>
            <p style={ select2 == true ? {color:'white'} : {color:'black'} } className='sidebar-size-div1-p'>M</p>
            </div>
            <div onClick={Select_Size3} style={ select3 == true ? {backgroundColor:'black',color:'#fff'} : {backgroundColor:'white'} } className='sidebar-size-div'>
            <p style={ select3 == true ? {color:'white'} : {color:'black'} } className='sidebar-size-div1-p'>S</p>
            </div>
           </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>{item.subname13}</Accordion.Header>
        <Accordion.Body>
        <p className='sidebar-brand-p'>
          {item.subname14}
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            )
          })
        }
    </div>
  );
}

export default Sidebar;