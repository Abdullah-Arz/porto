import Modal from 'react-bootstrap/Modal';
import { FadeLoader } from "react-spinners";
import '../Sass/LoaderModal.scss';

function LoaderModal(props) {
  return (
    
        <Modal
      {...props}
      size="lg"
      id='loadermodal-id'
    //   aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <FadeLoader color="#36d7b7" />
     
    </Modal>
    
  );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

export default LoaderModal