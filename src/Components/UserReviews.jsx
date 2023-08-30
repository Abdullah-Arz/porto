import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Rating } from "@mui/material";
import { FcBusinessman } from "react-icons/fc";
import "../Sass/UserReviews.scss";

function UserReviews({data}) {
  console.log('Reviews ----- ',data.reviews)

  return (
    <Container fluid className="user-review-container">
      <Row>
        <Col lg={12} sm={12}>
          {data.reviews.map((item, index) => {
            return (
              <div key={index}>
                <div className="userreview-tab-review-icon-div">
                  <FcBusinessman className="userreview-tab-review-icon" />
                  <p className="userreview-tab-review-icon-p">({item.user.first_name})</p>
                  <Rating
                    name="size-medium"
                    readOnly
                    defaultValue={parseInt(item.rating)}
                  />
                </div>
                <p className="userreview-tab-review-p">{item.review}</p>
              </div>
            );
          })}
          
        </Col>
        <Col lg={12} sm={12} className="user-review-col" />
      </Row>
    </Container>
  );
}

export default UserReviews;
