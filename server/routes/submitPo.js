const express = require('express');
const router = express.Router();
const { POs, Clients, Parts, Lines } = require('../models');
const preparedPOs = require('../tempStorage'); // Import the shared temporary storage

const generateUniquePoNumber = async () => {
  const maxPo = await POs.max('poNo227');
  return maxPo ? maxPo + 1 : 10001; // Start from 10001 if no PO exists
};

// Endpoint to submit the prepared PO
router.post('/submit/:tempPoId', async (req, res) => {
  try {
    const { tempPoId } = req.params;

    if (!preparedPOs[tempPoId]) {
      return res.status(404).json({ error: 'Prepared PO not found' });
    }

    const { clientCompID, dateOfPO, status, lines } = preparedPOs[tempPoId];

    // Validate the client ID
    const client = await Clients.findByPk(clientCompID);
    if (!client) {
      return res.status(400).json({ error: 'Invalid client ID' });
    }

    // Validate the part numbers and quantities
    for (const line of lines) {
      const part = await Parts.findByPk(line.partNo);
      if (!part) {
        return res.status(400).json({ error: `Invalid part number: ${line.partNo}` });
      }
      if (part.qoh227 < line.qty) {
        return res.status(400).json({ error: `Insufficient quantity for part number: ${line.partNo}` });
      }
    }

    // Generate a unique PO number
    const poNo227 = await generateUniquePoNumber();

    // Create the PO
    const po = await POs.create({ poNo227, clientCompID, dateOfPO, status });

    // Create the PO lines and update part quantities
    for (const line of lines) {
      await Lines.create({
        poNo227: po.poNo227, // Use the manually generated PO number
        lineNo227: line.lineNo,
        partNo: line.partNo,
        qty: line.qty,
        priceOrdered: line.priceOrdered
      });

      // Update part quantity
      const part = await Parts.findByPk(line.partNo);
      part.qoh227 -= line.qty;
      await part.save();
    }

    // Remove the prepared PO from temporary storage
    delete preparedPOs[tempPoId];

    res.json({ poNo: po.poNo227 });
  } catch (error) {
    console.error('Error submitting PO:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
