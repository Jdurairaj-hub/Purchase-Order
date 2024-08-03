import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ListParts.css';

const FindPO = () => {
  const [poNo, setPoNo] = useState('');
  const [poData, setPoData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setPoData(null);
    try {
      const response = await axios.get(`http://3.138.137.223:3001/findpos/${poNo}`);
      console.log(response);
      setPoData(response.data);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error fetching data');
    }
  };

  return (
    <div>
      <h1>Find PO</h1>
      <div>
        <label>
          PO Number:
          <input
            type="text"
            value={poNo}
            onChange={(e) => setPoNo(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {poData && (
        <div>
          <h2>PO Details</h2>
          <p>PO Number: {poData.poNo227}</p>
          <p>Date: {poData.dateOfPO}</p>
          <p>Status: {poData.status}</p>
          <p>Client ID: {poData.clientCompID}</p>
          <p>Client Name: {poData.Client?.clientName || 'N/A'}</p>
          <p>Client City: {poData.Client?.clientCity || 'N/A'}</p>
          {/* <h3>Items:</h3> */}
          <table>
            <thead>
              <tr>
                <th>Line No</th>
                <th>Part Name</th>
                <th>Quantity</th>
                <th>Price Ordered</th>
              </tr>
            </thead>
            <tbody>
              {poData.Lines.map((line) => (
                <tr key={line.lineNo227}>
                  <td>{line.lineNo227}</td>
                  <td>{line.Part?.partName || 'N/A'}</td>
                  <td>{line.qty}</td>
                  <td>${line.priceOrdered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FindPO;
