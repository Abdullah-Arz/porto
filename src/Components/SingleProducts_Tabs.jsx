import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../Sass/SingleProducts_Tabs.scss';
// import Sonnet from '../../components/Sonnet';
import { BsFillCheckCircleFill } from "react-icons/bs";
import SingleProduct_Table from './SingleProduct_Table';
import { Col, Row } from 'react-bootstrap';
import SingleProducts_Additional from './SingleProducts_Additional';
import { Rating } from '@mui/material';
import { FcBusinessman } from "react-icons/fc";
import UserReviews from './UserReviews';
import RatingForm from './RatingForm';

function SingleProducts_Tabs({data}) {

    const descrip = [
        {
            "id" : "1",
            "des" : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "id" : "2",
            "desc" : "Any Product types that You want - Simple, Configurable",
            "key" : "true"
        },
        {
            "id" : "3",
            "desc" : "Downloadable/Digital Products, Virtual Products",
            "key" : "true"
        },
        {
            "id" : "4",
            "desc" : "Inventory Management with Backordered items",
            "key" : "true"
        }

    ]
  return (
    <div className='singleProduct-tab-maindiv'>
        <Tabs
      defaultActiveKey="description"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="description" title="DESCRIPTION">
        {
            // descrip.map((item,index)=>{
                // return(
                    <div >
                        <div>
                            <p className='singleProduct-tab-p'>{data.description}</p>
                            {/* {
                            item.key ? ( 
                            <div className='singleProduct-tab-icon-div'>
                                <BsFillCheckCircleFill className='singleProduct-tab-icon' />
                            <p className='singleProduct-tab-p'>{item.desc}</p>
                            </div>
                            )
                            : null} */}
                        </div>
                    </div>
            //     )
            // })
        }
      </Tab>
      {/* <Tab eventKey="size-guide" title="SIZE GUIDE" >
        <Row  className='singleProduct-tab-size-tab'>
            <Col lg={3} sm={6}>
            <img src="https://d-themes.com/react/porto/demo3/images/products/single/body-shape.png" className='singleProduct-tab-size-tab-img' alt="body shape" width="217" height="398" />
            </Col>
            <Col>
                <SingleProduct_Table />
            </Col>
        </Row>
      </Tab> */}
      <Tab eventKey="addition-info" title="ADDITIONAL INFORMATION">
        <SingleProducts_Additional />
      </Tab>
      <Tab eventKey="reviews" title="REVIEWS">
        <Col style={{marginLeft:"-1em"}} lg={12} sm={12}>
            <h6 style={{marginLeft:"2em"}}>REVIEW</h6>
            <UserReviews data={data} />
        </Col>
        <Col lg={12} sm={12} style={{marginTop:"2em"}}>
            <h6 style={{marginLeft:"1.5em"}}>Add a Review</h6>
            <RatingForm data={data}/>
        </Col>
      </Tab>
    </Tabs>
    </div>
  );
}

export default SingleProducts_Tabs;