import Table from 'react-bootstrap/Table';
import '../Sass/SingleProduct_Table.scss';

function SingleProduct_Table() {
  return (
    // <div className='singleProduct-table-maindiv'>
        <Table 
    striped 
    // bordered 
    // hover
    >
      <thead>
        <tr>
          <th>SIZE</th>
          <th>CHEST (IN.)</th>
          <th>WAIST (IN.)</th>
          <th>HIPS (IN.)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>WS</td>
          <td>34-36</td>
          <td>27-29</td>
          <td>34.5-36.5</td>
        </tr>
        <tr>
          
          <td>S</td>
          <td>36-38</td>
          <td>29-31</td>
          <td>36.5-38.5</td>
        </tr>
        <tr>
          
        <td>M</td>
          <td>38-40</td>
          <td>31-33</td>
          <td>38.5-40.5</td>
        </tr>

        <tr>
          
        <td>L</td>
          <td>40-42</td>
          <td>33-36</td>
          <td>40.5-42.5</td>
        </tr>

        <tr>
          
        <td>XL</td>
          <td>42-45</td>
          <td>36-40</td>
          <td>43.5-47.5</td>
        </tr>
        
        <tr>
        <td>XLL</td>
          <td>45-48</td>
          <td>40-44</td>
          <td>47.5-51.5</td>
        </tr>

      </tbody>
    </Table>
    // </div>
  );
}

export default SingleProduct_Table;