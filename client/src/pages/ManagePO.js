import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ManagePO.css';

const ManagePO = () => {
  const [clientCompID, setClientCompID] = useState('');
  const [dateOfPO, setDateOfPO] = useState('');
  const [status, setStatus] = useState('');
  const [tempPoId, setTempPoId] = useState(null);
  const [lines, setLines] = useState([]);
  const [partNo, setPartNo] = useState('');
  const [qty, setQty] = useState('');
  const [priceOrdered, setPriceOrdered] = useState('');
  const [lineNo, setLineNo] = useState('');
  const [error, setError] = useState(null);

  const handlePreparePO = async () => {
    setError(null);
    try {
      const response = await axios.post('http://localhost:3001/preparePo/prepare', {
        clientCompID,
        dateOfPO,
        status,
      });
      setTempPoId(response.data.tempPoId);
      alert(`PO Prepared with ID: ${response.data.tempPoId}`);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error preparing PO');
    }
  };

  const handleAddLine = () => {
    const newLine = { partNo, qty, priceOrdered, lineNo };
    setLines([...lines, newLine]);
    setPartNo('');
    setQty('');
    setPriceOrdered('');
    setLineNo('');
  };

  const handleSubmitLines = async () => {
    setError(null);
    try {
      await axios.post(`http://localhost:3001/preparePo/prepare/${tempPoId}/lines`, { lines });
      setLines([]);
      alert('Lines added to PO');
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error adding lines to PO');
    }
  };

  const handleSubmitPO = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/submitPo/submit/${tempPoId}`);
      alert(`PO submitted with PO Number: ${response.data.poNo}`);
    } catch (err) {
      alert('Error submitting PO');
    }
  };

  return (
    <div className="manage-po-container">
      <h2>Manage PO</h2>

      <div className="section">
        <h3>Prepare PO</h3>
        <div className="form-group">
          <label>
            Client ID:
            <input
              type="number"
              value={clientCompID}
              onChange={(e) => setClientCompID(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Date of PO:
            <input
              type="date"
              value={dateOfPO}
              onChange={(e) => setDateOfPO(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Status:
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
        </div>
        <button className="btn" onClick={handlePreparePO}>Prepare PO</button>
      </div>

      {tempPoId && (
        <div className="section">
          <h3>Add Lines to PO</h3>
          <div className="form-group">
            <label>
              Line No:
              <input
                type="number"
                value={lineNo}
                onChange={(e) => setLineNo(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Part No:
              <input
                type="number"
                value={partNo}
                onChange={(e) => setPartNo(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Quantity:
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Price Ordered:
              <input
                type="number"
                value={priceOrdered}
                onChange={(e) => setPriceOrdered(e.target.value)}
              />
            </label>
          </div>
          <button className="btn" onClick={handleAddLine}>Add Line</button>
          <button className="btn" onClick={handleSubmitLines}>Submit Lines</button>

          {lines.length > 0 && (
            <div>
              <h4>Lines</h4>
              <ul className="lines-list">
                {lines.map((line, index) => (
                  <li key={index}>{`Line No: ${line.lineNo}, Part No: ${line.partNo}, Quantity: ${line.qty}, Price: ${line.priceOrdered}`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {tempPoId && (
        <div className="submit-po-container">
          <h3>Submit PO</h3>
          <button className="btn" onClick={handleSubmitPO}>Submit PO</button>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ManagePO;
