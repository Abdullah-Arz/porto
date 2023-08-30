import Table from 'react-bootstrap/Table';

function SingleProducts_Additional() {
  return (
    <div style={{padding:"0 0 0 0"}}>
        <Table striped>
      <tbody>

        <tr>
          <td>Weight</td>
          <td>23 kg</td>
        </tr>
        
        <tr>
         <td>Dimensions</td>
          <td>12 × 24 × 35 cm</td>
        </tr>

        <tr>
         <td>Color</td>
          <td>Black, Green, Indigo</td>
        </tr>

        <tr>
         <td>Size</td>
          <td>Large, Medium, Small</td>
        </tr>

      </tbody>
    </Table>
    </div>
  );
}

export default SingleProducts_Additional;