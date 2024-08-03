import React, { useState } from 'react';
import axios from 'axios';

const AddLines = ({ tempPoId }) => {
  const [lines, setLines] = useState([]);
  const [partNo, setPartNo] = useState('');
  const [qty, setQty] = useState('');
  const [priceOrdered, setPriceOrdered] = useState('');
  const [lineNo, setLineNo] = useState('');
  const [error, setError] = useState(null);

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
      await axios.post(`http://3.138.137.223:3001/preparePo/prepare/${tempPoId}/lines`, {
        lines,
      });
      setLines([]);
      alert('Lines added to PO');
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error adding lines to PO');
    }
  };

  return (
    <div>
      <h2>Add Lines to PO</h2>
      <div>
        <label>
          Line No:
          <input
            type="number"
            value={lineNo}
            onChange={(e) => setLineNo(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Part No:
          <input
            type="number"
            value={partNo}
            onChange={(e) => setPartNo(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Price Ordered:
          <input
            type="number"
            value={priceOrdered}
            onChange={(e) => setPriceOrdered(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddLine}>Add Line</button>
      <button onClick={handleSubmitLines}>Submit Lines</button>
      {lines.length > 0 && (
        <div>
          <h3>Lines</h3>
          <ul>
            {lines.map((line, index) => (
              <li key={index}>{`Line No: ${line.lineNo}, Part No: ${line.partNo}, Quantity: ${line.qty}, Price: ${line.priceOrdered}`}</li>
            ))}
          </ul>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddLines;
