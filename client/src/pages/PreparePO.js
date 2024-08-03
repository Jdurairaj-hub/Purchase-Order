import React, { useState } from 'react';
import axios from 'axios';

const PreparePO = ({ onPoPrepared }) => {
  const [clientCompID, setClientCompID] = useState('');
  const [dateOfPO, setDateOfPO] = useState('');
  const [status, setStatus] = useState('');
  const [tempPoId, setTempPoId] = useState(null);
  const [error, setError] = useState(null);

  const handlePreparePO = async () => {
    setError(null);
    try {
      const response = await axios.post('http://3.138.137.223:3001/preparePo/prepare', {
        clientCompID,
        dateOfPO,
        status,
      });
      setTempPoId(response.data.tempPoId);
      onPoPrepared(response.data.tempPoId);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error preparing PO');
    }
  };

  return (
    <div>
      <h2>Prepare PO</h2>
      <div>
        <label>
          Client ID:
          <input
            type="number"
            value={clientCompID}
            onChange={(e) => setClientCompID(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Date of PO:
          <input
            type="date"
            value={dateOfPO}
            onChange={(e) => setDateOfPO(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handlePreparePO}>Prepare PO</button>
      {tempPoId && <p>PO Prepared with ID: {tempPoId}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PreparePO;
