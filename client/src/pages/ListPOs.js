import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/ListPOs.css';




const ListPOs = () => {

  const [listofPOs, setListOfPOs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/pos").then((response) => {
      console.log(response);
      setListOfPOs(response.data)
    })
    .catch((error) => {
      console.error('Error fetching parts data:', error);
    });
  }, []);
  

  return (
    <div>
      <h1>List POs</h1>
      <table >
        <thead>
          <tr>
            <th>PO No</th>
            <th>Client CompID</th>
            <th>Date of PO</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {listofPOs.map((po) => (
            <tr key={po.poNo227}>
              <td>{po.poNo227}</td>
              <td>{po.clientCompID}</td>
              <td>{po.dateOfPO}</td>
              <td>{po.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPOs;