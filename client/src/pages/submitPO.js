import React from 'react';
import axios from 'axios';

const SubmitPO = ({ tempPoId }) => {
  const handleSubmitPO = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/submitPo/submit/${tempPoId}`);
      alert(`PO submitted with PO Number: ${response.data.poNo}`);
    } catch (err) {
      alert('Error submitting PO');
    }
  };

  return (
    <div>
      <button onClick={handleSubmitPO}>Submit PO</button>
    </div>
  );
};

export default SubmitPO;
