import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/ListParts.css';




const ListParts = () => {

  const [listofParts, setListOfParts] = useState([]);

  useEffect(() => {
    axios.get("http://3.138.137.223:3001/parts").then((response) => {
      console.log(response);
      setListOfParts(response.data)
    })
    .catch((error) => {
      console.error('Error fetching parts data:', error);
    });
  }, []);
  

  return (
    <div>
      <h1>List Parts</h1>
      <table >
        <thead>
          <tr>
            <th>Part ID</th>
            <th>Part Name</th>
            <th>Current Price</th>
            <th>Quantity on Hand</th>
          </tr>
        </thead>
        <tbody>
          {listofParts.map((part) => (
            <tr key={part.partNo227}>
              <td>{part.partNo227}</td>
              <td>{part.partName}</td>
              <td>${part.currentPrice}</td>
              <td>{part.qoh227}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListParts;
