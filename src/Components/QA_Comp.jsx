import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import '../Sass/QA_comp.scss'

export default function QA_Comp() {
  return (
    <MDBContainer>
      <section className="QA-Comp">
        <MDBRow className="pb-2 pt-5">
          <MDBCol md="6" lg="3" className="mb-4 text-center QA_card" >
          <MDBIcon fas icon="headset text-dark pe-2" />
            <MDBTypography tag="h5" className="mb- text-dark">
               CUSTOMER SUPPORT
            </MDBTypography>
            <h6>Need Assistance?</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="3" className="mb-4 text-center QA_card" >
          <MDBIcon fas icon="credit-card text-dark pe-2" />
            <MDBTypography tag="h5" className="mb- text-dark">
            SECURED PAYMENT
            </MDBTypography>
            <h6>Safe & Fast</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="3" className="mb-4 text-center QA_card" >
          <MDBIcon fas icon="undo text-dark pe-2" />
            <MDBTypography tag="h5" className="mb- text-dark">
            FREE RETURNS

            </MDBTypography>
            <h6>Easy & Free
</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="3" className="mb-4 text-center QA_card" >
          <MDBIcon fas icon="shipping-fast text-dark pe-2" />
            <MDBTypography tag="h5" className="mb- text-dark">
            FREE SHIPPING
            </MDBTypography>
            <h6>Orders Over $99</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}